"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, Send, CheckCircle } from "lucide-react";
import { WHATSAPP } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function KontaktPage() {
  const [formState, setFormState] = useState({
    anrede: "",
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
    bemerkung: "Ich interessiere mich für eine 4½-Zimmer-Wohnung im Erdgeschoss. Bitte kontaktieren Sie mich für eine Besichtigung.",
    datenschutz: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          anrede: formState.anrede,
          vorname: formState.vorname,
          nachname: formState.nachname,
          email: formState.email,
          telefon: formState.telefon,
          bemerkung: formState.bemerkung,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-[10px] border border-border px-4 py-3 text-base text-text placeholder:text-text/50 transition-colors focus:border-primary focus:outline-none";

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[700px] items-center justify-center overflow-hidden bg-primary">
        <Image
          src="/images/hero/Rietblick.0022-scaled.jpg"
          alt="Trivista Kontakt"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 w-[80%] px-6 text-center">
          <p className="mb-4 text-[22px] font-light text-white [text-shadow:0px_0px_10px_rgba(38,65,60,0.21)]">
            Trivista &middot; Kontakt
          </p>
          <h1 className="text-[30px] font-bold leading-[48px] text-white [text-shadow:0px_0px_10px_rgba(38,65,60,0.21)] md:text-[60px] md:leading-[70px]">
            Kontakt
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-surface px-6 py-12 md:py-[70px]">
        <div className="mx-auto max-w-[1140px]">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <p className="mb-3 text-sm font-bold tracking-widest text-primary/60 uppercase">
              Kontakt
            </p>
            <h2 className="text-3xl font-normal text-text-dark md:text-[44px] md:leading-tight">
              Wir freuen uns auf Sie
            </h2>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-5">
            {/* Left: Contact Form – 3 cols */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="rounded-[10px] border border-border bg-white p-8 shadow-[0px_10px_10px_0px_rgba(0,0,0,0.04)] md:p-10">
                <h3 className="mb-6 text-[22px] font-normal text-text-dark">
                  Kontaktformular
                </h3>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <CheckCircle className="mb-4 text-accent" size={48} />
                    <h3 className="mb-2 text-[22px] font-normal text-text-dark">
                      Vielen Dank!
                    </h3>
                    <p className="text-base text-text">
                      Ihre Nachricht wurde gesendet. Wir melden uns in Kürze bei
                      Ihnen.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Anrede */}
                    <select
                      id="anrede"
                      value={formState.anrede}
                      onChange={(e) => setFormState({ ...formState, anrede: e.target.value })}
                      className={`${inputClass} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23696969%22%20d%3D%22M2%204l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat pr-10`}
                    >
                      <option value="">Anrede</option>
                      <option value="herr">Herr</option>
                      <option value="frau">Frau</option>
                    </select>

                    {/* Vorname + Nachname */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <input
                        id="vorname"
                        type="text"
                        required
                        placeholder="Vorname *"
                        value={formState.vorname}
                        onChange={(e) => setFormState({ ...formState, vorname: e.target.value })}
                        className={inputClass}
                      />
                      <input
                        id="nachname"
                        type="text"
                        required
                        placeholder="Familienname *"
                        value={formState.nachname}
                        onChange={(e) => setFormState({ ...formState, nachname: e.target.value })}
                        className={inputClass}
                      />
                    </div>

                    {/* E-Mail + Telefon */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="E-Mail *"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className={inputClass}
                      />
                      <input
                        id="telefon"
                        type="tel"
                        required
                        placeholder="Telefon *"
                        value={formState.telefon}
                        onChange={(e) => setFormState({ ...formState, telefon: e.target.value })}
                        className={inputClass}
                      />
                    </div>

                    {/* Bemerkung */}
                    <textarea
                      id="bemerkung"
                      rows={4}
                      placeholder="Bemerkung"
                      value={formState.bemerkung}
                      onChange={(e) => setFormState({ ...formState, bemerkung: e.target.value })}
                      className={`${inputClass} resize-none`}
                    />

                    {/* Datenschutz Checkbox */}
                    <div className="flex items-start gap-3">
                      <input
                        id="datenschutz"
                        type="checkbox"
                        required
                        checked={formState.datenschutz}
                        onChange={(e) => setFormState({ ...formState, datenschutz: e.target.checked })}
                        className="mt-1 h-4 w-4 shrink-0 rounded border-border text-primary accent-primary"
                      />
                      <label htmlFor="datenschutz" className="text-sm text-text">
                        Ich habe die{" "}
                        <Link href="/datenschutzerklaerung/" className="text-primary underline">
                          Datenschutzerklärung
                        </Link>{" "}
                        gelesen und akzeptiere die Hinweise.
                      </label>
                    </div>

                    {/* Error Message */}
                    {error && (
                      <div className="rounded-[10px] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {error}
                      </div>
                    )}

                    {/* Submit */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center gap-2 rounded-[30px] bg-primary px-8 py-3 text-base font-bold text-white transition-all hover:bg-transparent hover:text-primary hover:shadow-[inset_0_0_0_2px_#26413C] disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {loading ? "Wird gesendet..." : "Senden"}
                        {!loading && <Send size={16} />}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Right: Ansprechpartner – 2 cols */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-2"
            >
              <div className="rounded-[10px] border border-border bg-white p-8 shadow-[0px_10px_10px_0px_rgba(0,0,0,0.04)] md:p-10">
                <h3 className="mb-6 text-[22px] font-normal text-text-dark">
                  Ansprechpartner
                </h3>

                {/* Contact person */}
                <div className="flex items-center gap-5">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src="/images/contact/ueli-ammann.webp"
                      alt={WHATSAPP.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-text-dark">
                      {WHATSAPP.name}
                    </p>
                    <p className="text-sm text-text">{WHATSAPP.role}</p>
                  </div>
                </div>

                <div className="mt-6 space-y-3 border-t border-border pt-6">
                  <a
                    href={`tel:${WHATSAPP.number}`}
                    className="flex items-center gap-3 text-[15px] text-text transition-colors hover:text-primary"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/8">
                      <Phone size={14} className="text-primary" />
                    </span>
                    +41 71 763 75 00
                  </a>
                  <a
                    href="mailto:info@rhycasa.ch"
                    className="flex items-center gap-3 text-[15px] text-text transition-colors hover:text-primary"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/8">
                      <Mail size={14} className="text-primary" />
                    </span>
                    info@rhycasa.ch
                  </a>
                </div>

                {/* Rhycasa Divider */}
                <div className="mt-8 border-t border-border pt-8">
                  <div className="flex items-center gap-4">
                    <div className="relative h-9 w-28 shrink-0">
                      <Image
                        src="/images/logo/rhycasa-color.svg"
                        alt="Rhycasa AG"
                        fill
                        className="object-contain object-left"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="font-bold text-text-dark">Rhycasa AG</p>
                    <p className="text-sm text-text">Bahnhofstrasse 28</p>
                    <p className="text-sm text-text">9443 Widnau</p>
                  </div>

                  <div className="mt-5 flex gap-2">
                    <a
                      href="mailto:info@rhycasa.ch"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text transition-all hover:border-primary hover:text-primary"
                      aria-label="E-Mail"
                    >
                      <Mail size={14} />
                    </a>
                    <a
                      href="tel:+41717637500"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text transition-all hover:border-primary hover:text-primary"
                      aria-label="Telefon"
                    >
                      <Phone size={14} />
                    </a>
                    <a
                      href="https://rhycasa.ch"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text transition-all hover:border-primary hover:text-primary"
                      aria-label="Website"
                    >
                      <Globe size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-6 py-12 md:py-[70px]">
        <div className="mx-auto max-w-[1140px]">
          <div className="relative overflow-hidden rounded-[10px] bg-primary px-6 py-8 md:px-16 md:py-14">
            {/* Animated decorative circles */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.06, 0.03] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.05, 0.03] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white"
            />
            <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="mb-3 text-xs font-bold tracking-[0.2em] text-white/60 uppercase">
                  Wohnungsnavigator
                </p>
                <h2 className="text-2xl font-normal text-white md:text-[36px] md:leading-tight">
                  Finden und reservieren Sie<br className="hidden md:block" /> Ihre Traumwohnung
                </h2>
              </div>
              <Button href="/angebot/" variant="ghost">
                Zum Wohnungsnavigator
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
