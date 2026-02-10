"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { WHATSAPP, PARTNERS } from "@/lib/constants";

export default function KontaktPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with server action or form service
    setSubmitted(true);
  };

  const rhycasa = PARTNERS[0];

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[50vh] items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        <div className="relative z-10 px-6 text-center">
          <p className="mb-4 text-sm tracking-[0.4em] text-secondary uppercase">
            Trivista
          </p>
          <h1 className="text-4xl font-light tracking-wide text-white md:text-6xl">
            Kontakt
          </h1>
          <div className="mx-auto mt-6 h-px w-24 bg-secondary" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-16 md:grid-cols-2">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-2xl font-light text-primary">
                Sprechen Sie mit uns
              </h2>
              <p className="mb-8 leading-relaxed text-text-light">
                Haben Sie Fragen zum Projekt Trivista? Wir beraten Sie gerne
                persönlich und unverbindlich.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                    <MapPin className="text-secondary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-primary">{rhycasa.name}</p>
                    <p className="text-sm text-text-light">{rhycasa.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                    <Phone className="text-secondary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-primary">{WHATSAPP.name}</p>
                    <p className="text-sm text-text-light">{WHATSAPP.role}</p>
                    <a
                      href={`tel:${WHATSAPP.number}`}
                      className="text-sm text-secondary hover:underline"
                    >
                      +41 71 763 75 00
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                    <Mail className="text-secondary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-primary">E-Mail</p>
                    <a
                      href="mailto:info@rhycasa.ch"
                      className="text-sm text-secondary hover:underline"
                    >
                      info@rhycasa.ch
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={WHATSAPP.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1da851]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Per WhatsApp kontaktieren
              </a>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center rounded-sm bg-surface p-12 text-center">
                  <CheckCircle className="mb-4 text-green-500" size={48} />
                  <h3 className="mb-2 text-xl font-medium text-primary">
                    Vielen Dank!
                  </h3>
                  <p className="text-text-light">
                    Ihre Nachricht wurde gesendet. Wir melden uns in Kürze bei
                    Ihnen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-primary"
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full rounded-sm border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-secondary focus:outline-none"
                      placeholder="Ihr vollständiger Name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-primary"
                    >
                      E-Mail *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full rounded-sm border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-secondary focus:outline-none"
                      placeholder="ihre@email.ch"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-primary"
                    >
                      Telefon
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      className="w-full rounded-sm border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-secondary focus:outline-none"
                      placeholder="+41 xx xxx xx xx"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-primary"
                    >
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full resize-none rounded-sm border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-secondary focus:outline-none"
                      placeholder="Ihre Nachricht an uns..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-sm bg-secondary px-8 py-3 text-sm font-medium tracking-widest text-white uppercase transition-colors hover:bg-secondary-light"
                  >
                    <Send size={16} />
                    Nachricht senden
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
