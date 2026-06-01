import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Reveal } from "../components/site/Reveal";
import { WEB3FORMS_ACCESS_KEY, CONTACT_EMAIL } from "@/lib/site-config";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Guardafui Works" },
      { name: "description", content: "Get in touch to book a free consult or ask about getting your business online." },
      { property: "og:title", content: "Contact — Guardafui Works" },
      { property: "og:description", content: "Book a free consult or send us a note." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

type Status = "idle" | "submitting" | "success" | "error";

function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    const formEl = e.currentTarget;
    const data = new FormData(formEl);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append("subject", `New inquiry from ${data.get("name") || "site"}`);
    data.append("from_name", "Guardafui Works Website");
    // Honeypot field is included in the form (botcheck).

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) {
        setStatus("success");
        formEl.reset();
      } else {
        setStatus("error");
        setErrorMsg(json.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  return (
    <>
      <section className="bg-sand py-24 md:py-32">
        <div className="container-prose max-w-3xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber mb-4">Contact</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-5xl md:text-6xl font-serif mb-6">
              Let's <em className="text-amber not-italic">talk.</em>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-lg text-charcoal/75 leading-relaxed">
              Tell us a bit about your business and what you need. We'll get back within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-prose grid lg:grid-cols-5 gap-12">
          {/* Side */}
          <Reveal className="lg:col-span-2">
            <div className="bg-navy text-white rounded-2xl p-8 md:p-10 h-full">
              <h2 className="text-3xl font-serif text-white mb-4">Prefer to skip ahead?</h2>
              <p className="text-white/70 mb-6 leading-relaxed">
                Grab a free 30-minute consult on the calendar — no forms, no waiting.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 bg-amber text-navy-deep font-semibold px-6 py-3 rounded-full hover:shadow-amber transition-all hover:-translate-y-0.5"
              >
                <CalendarCheck size={18} /> Book a Free Consult
              </a>

              <div className="mt-10 pt-8 border-t border-white/15">
                <p className="text-xs uppercase tracking-wider text-amber font-semibold mb-2">Email</p>
                <a href="mailto:info@guardafuiworks.com" className="text-white hover:text-amber inline-flex items-center gap-2">
                  <Mail size={16} /> info@guardafuiworks.com
                </a>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal className="lg:col-span-3" delay={120}>
            {status === "success" ? (
              <div className="bg-sand border border-amber rounded-2xl p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-amber mx-auto flex items-center justify-center mb-5">
                  <CheckCircle2 className="text-navy-deep" size={26} />
                </div>
                <h3 className="text-2xl font-serif mb-2">Message sent.</h3>
                <p className="text-charcoal/75">
                  Thanks — we got it and will get back within one business day.
                  In a hurry? Email us at{" "}
                  <a className="text-navy underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-semibold text-navy underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="bg-white border border-border rounded-2xl p-8 md:p-10 shadow-card space-y-5">
                {/* Honeypot for spam bots */}
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <Field label="Business Name" name="business" />
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">What do you need?</label>
                  <select
                    name="need"
                    required
                    className="w-full bg-white border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber focus:border-amber transition"
                  >
                    <option value="">Select one…</option>
                    <option>Website</option>
                    <option>Email Setup</option>
                    <option>Full Setup</option>
                    <option>Not Sure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us a little about your business and what you're hoping to set up."
                    className="w-full bg-white border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber focus:border-amber transition resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-start gap-2 text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl p-3">
                    <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center gap-2 bg-amber text-navy-deep font-semibold px-7 py-3.5 rounded-full hover:shadow-amber transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <>Sending… <Loader2 size={18} className="animate-spin" /></>
                  ) : (
                    <>Send Message <ArrowRight size={18} /></>
                  )}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label, name, type = "text", required = false,
}: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-navy mb-2">
        {label}{required && <span className="text-amber"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-white border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber focus:border-amber transition"
      />
    </div>
  );
}
