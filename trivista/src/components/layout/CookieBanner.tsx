"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";
import {
  hasConsent,
  hasAnalyticsConsent,
  setConsent,
  removeAnalyticsCookies,
} from "@/lib/cookieConsent";

const GA_ID = "G-3ZRJFMW3L4";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    if (!hasConsent()) {
      setShowBanner(true);
    } else if (hasAnalyticsConsent()) {
      setAnalyticsEnabled(true);
    }
  }, []);

  function handleAccept() {
    setConsent(true);
    setAnalyticsEnabled(true);
    setShowBanner(false);
  }

  function handleReject() {
    setConsent(false);
    removeAnalyticsCookies();
    setShowBanner(false);
  }

  return (
    <>
      {/* GA4 scripts – only loaded after explicit consent */}
      {analyticsEnabled && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {/* Cookie Banner */}
      {showBanner && (
        <div
          role="dialog"
          aria-label="Cookie-Einstellungen"
          className="fixed inset-x-0 bottom-0 z-[9999] p-4 sm:p-6"
        >
          <div className="mx-auto max-w-3xl rounded-[10px] border border-[#E0E0E0] bg-white p-5 shadow-[0px_10px_20px_rgba(0,0,0,0.15)] sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
              {/* Text */}
              <div className="flex-1 text-sm leading-relaxed text-[#696969]">
                <p className="mb-1 text-base font-bold text-[#26413C]">
                  Cookie-Einstellungen
                </p>
                <p>
                  Wir verwenden notwendige Cookies, um die Funktion unserer
                  Website sicherzustellen. Zusätzlich setzen wir Analyse-Cookies
                  (Google Analytics) ein, um unser Angebot zu verbessern. Sie
                  können selbst entscheiden, ob Sie diese zulassen möchten.
                  Weitere Informationen finden Sie in unserer{" "}
                  <Link
                    href="/datenschutzerklaerung"
                    className="underline transition-colors hover:text-[#26413C]"
                  >
                    Datenschutzerklärung
                  </Link>
                  .
                </p>
              </div>

              {/* Buttons */}
              <div className="flex shrink-0 flex-col gap-2 sm:flex-col">
                <button
                  onClick={handleAccept}
                  className="rounded-[30px] bg-[#26413C] px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#1a2e2a]"
                >
                  Alle akzeptieren
                </button>
                <button
                  onClick={handleReject}
                  className="rounded-[30px] border border-[#26413C] bg-transparent px-6 py-2.5 text-sm font-bold text-[#26413C] transition-colors hover:bg-[#26413C]/5"
                >
                  Nur notwendige
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
