import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  business: z.string().trim().max(150).optional().default(""),
  need: z.string().trim().max(100).optional().default(""),
  message: z.string().trim().min(1).max(2000),
  botcheck: z.string().optional().default(""),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input) => ContactSchema.parse(input))
  .handler(async ({ data }) => {
    if (data.botcheck) return { success: true };

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error("WEB3FORMS_ACCESS_KEY is not set");
      return { success: false, error: "Server is not configured to send messages." };
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "New inquiry from Guardafui Works website",
          from_name: "Guardafui Works Website",
          name: data.name,
          email: data.email,
          business: data.business,
          need: data.need,
          message: data.message,
        }),
      });
      const json: { success?: boolean; message?: string } = await res
        .json()
        .catch(() => ({}));
      if (res.ok && json.success) return { success: true };
      return { success: false, error: json.message || "Submission failed." };
    } catch (err) {
      console.error("Contact submission failed:", err);
      return { success: false, error: "Network error sending message." };
    }
  });
