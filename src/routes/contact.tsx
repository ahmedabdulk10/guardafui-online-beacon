import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, ArrowRight, CheckCircle2, AlertCircle, Loader2, Clock } from "lucide-react";
import { Reveal } from "../components/site/Reveal";
import { BeaconMark, BeaconWatermark } from "../components/site/Beacon";
import { WEB3FORMS_ACCESS_KEY, CONTACT_EMAIL } from "@/lib/site-config";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Guardafui Works" },
      { name: "description", content: "Get in touch to get your small business online — websites, email, domains, and more." },
      { property: "og:title", content: "Contact — Guardafui Works" },
      { property: "og:description", content: "Let's get your business online. We reply within one business day." },
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
    const formData = new FormData(formEl);

    if (formData.get("botcheck")) {
      setStatus("success");
      formEl.reset();
      return;
    }

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "New inquiry from Guardafui Works website",
      from_name: "Guardafui Works Website",
      name: formData.get("name"),
      email: formData.get("email"),
      business: formData.get("business"),
      need: formData.get("need"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) {
        setStatus("success");
        formEl.reset();
      } else {
        setStatus("error");
        setErrorMsg(`Something went wrong. Please try again, or email us directly at ${CONTACT_EMAIL}.`);
      }
    } catch {
      setStatus("error");
      setErrorMsg(`Couldn't send your message. Please try again, or email us directly at ${CONTACT_EMAIL}.`);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-sand py-24 md:py-32">
        <div className="container-prose max-w-3xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber mb-4">Contact</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-5xl md:text-6xl font-serif leading-[1.05] mb-6">
              Let's get your business <em className="text-amber not-italic">online.</em>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-lg text-charcoal/75 leading-relaxed max-w-xl mx-auto">
              Tell us a little about your business and what you need. We'll come back with a clear,
              fixed-price plan — usually within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-prose grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            {status === "success" ? (
              <div className="bg-sand border border-amber/40 rounded-3xl p-10 md:p-14 text-center shadow-card">
                <div className="w-16 h-16 rounded-full bg-amber mx-auto flex items-center justify-center mb-6 shadow-amber">
                  <CheckCircle2 className="text-navy-deep" size={28} />
                </div>
                <h3 className="text-3xl font-serif mb-3">Thanks!</h3>
                <p className="text-charcoal/75 leading-relaxed max-w-md mx-auto">
                  We'll get back to you within one business day. In a hurry? Email us at{" "}
                  <a className="text-navy underline underline-offset-2" href={`mailto:${CONTACT_EMAIL}`}>
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-7 text-sm font-semibold text-navy underline underline-offset-4 hover:text-amber transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="bg-white border border-border rounded-3xl p-8 md:p-10 shadow-card space-y-6"
              >
                {/* Honeypot */}
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid md:grid-cols-2 gap-6">
                  <Field label="Name" name="name" required placeholder="Your full name" />
                  <Field label="Email" name="email" type="email" required placeholder="you@example.com" />
                </div>
                <Field label="Business Name" name="business" placeholder="Optional" />

                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    What do you need? <span className="text-amber">*</span>
                  </label>
                  <select
                    name="need"
                    required
                    defaultValue=""
                    className="w-full bg-white border border-border rounded-xl px-4 py-3.5 text-charcoal focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber transition-all hover:border-charcoal/30"
                  >
                    <option value="" disabled>Select one…</option>
                    <option>Website</option>
                    <option>Email & Domain</option>
                    <option>Full Setup</option>
                    <option>Cloud Hosting</option>
                    <option>Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    Message <span className="text-amber">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us a little about your business and what you're hoping to set up."
                    className="w-full bg-white border border-border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber transition-all resize-none hover:border-charcoal/30"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-start gap-3 text-sm text-red-800 bg-red-50 border border-red-200 rounded-xl p-4 animate-fade-in">
                    <AlertCircle size={18} className="flex-shrink-0 mt-0.5 text-red-600" />
                    <span className="leading-relaxed">{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2 bg-amber text-navy-deep font-semibold px-7 py-4 rounded-full hover:shadow-amber transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      Send Message <ArrowRight size={18} />
                    </>
                  )}
                </button>

                <p className="text-xs text-charcoal/55 text-center">
                  We'll only use your details to reply to your inquiry.
                </p>
              </form>
            )}
          </Reveal>

          {/* Info card */}
          <Reveal className="lg:col-span-2 lg:sticky lg:top-28" delay={120}>
            <div className="relative overflow-hidden bg-navy text-white rounded-3xl p-8 md:p-10 shadow-card">
              {/* Watermark accent */}
              <div className="pointer-events-none absolute -right-20 -bottom-20 text-amber opacity-60">
                <BeaconWatermark className="w-80 h-80" />
              </div>

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-amber/15 flex items-center justify-center mb-6">
                  <BeaconMark className="w-6 h-6 text-amber" />
                </div>

                <h2 className="text-2xl md:text-3xl font-serif text-white mb-3 leading-tight">
                  Prefer to reach out directly?
                </h2>
                <p className="text-white/70 leading-relaxed mb-8">
                  Drop us a line and we'll get the conversation started. No pressure, no jargon — just
                  straight answers from a real IT professional.
                </p>

                <div className="space-y-5">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-amber font-semibold mb-2">
                      Email
                    </p>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="inline-flex items-center gap-2.5 text-white hover:text-amber transition-colors font-medium group"
                    >
                      <span className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-amber/20 flex items-center justify-center transition-colors">
                        <Mail size={15} />
                      </span>
                      {CONTACT_EMAIL}
                    </a>
                  </div>

                  <div className="pt-5 border-t border-white/10">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-amber font-semibold mb-2">
                      Response Time
                    </p>
                    <div className="inline-flex items-center gap-2.5 text-white/90">
                      <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                        <Clock size={15} />
                      </span>
                      We reply within one business day.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-navy mb-2">
        {label}
        {required && <span className="text-amber"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-white border border-border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber transition-all hover:border-charcoal/30 placeholder:text-charcoal/40"
      />
    </div>
  );
}
