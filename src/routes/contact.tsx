import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, CalendarCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "../components/site/Reveal";
import { CALENDLY_URL } from "../components/site/CTA";

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

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = Array.from(data.entries())
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
    const subject = encodeURIComponent(`New inquiry from ${data.get("name") || "site"}`);
    window.location.href = `mailto:hello@guardafuiworks.com?subject=${subject}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
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
                <a href="mailto:hello@guardafuiworks.com" className="text-white hover:text-amber inline-flex items-center gap-2">
                  <Mail size={16} /> hello@guardafuiworks.com
                </a>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal className="lg:col-span-3" delay={120}>
            {submitted ? (
              <div className="bg-sand border border-amber rounded-2xl p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-amber mx-auto flex items-center justify-center mb-5">
                  <CheckCircle2 className="text-navy-deep" size={26} />
                </div>
                <h3 className="text-2xl font-serif mb-2">Your message is ready to send.</h3>
                <p className="text-charcoal/75">
                  We've opened your email client with the details. If nothing appeared,
                  reach us directly at <a className="text-navy underline" href="mailto:hello@guardafuiworks.com">hello@guardafuiworks.com</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="bg-white border border-border rounded-2xl p-8 md:p-10 shadow-card space-y-5">
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
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-amber text-navy-deep font-semibold px-7 py-3.5 rounded-full hover:shadow-amber transition-all hover:-translate-y-0.5"
                >
                  Send Message <ArrowRight size={18} />
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
