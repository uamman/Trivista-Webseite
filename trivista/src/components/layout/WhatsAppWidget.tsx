"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { WHATSAPP } from "@/lib/constants";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-6 bottom-6 z-50">
      {/* Chat Popup */}
      {isOpen && (
        <div className="mb-4 w-72 overflow-hidden rounded-2xl bg-white shadow-2xl">
          {/* Header */}
          <div className="bg-[#075E54] px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white text-sm font-semibold">
                  UA
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{WHATSAPP.name}</p>
                  <p className="text-xs text-white/70">{WHATSAPP.role}</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 transition-colors hover:text-white"
                aria-label="Schliessen"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Message */}
          <div className="bg-[#ECE5DD] p-4">
            <div className="rounded-lg bg-white p-3 shadow-sm">
              <p className="text-sm text-gray-700">
                Guten Tag! Ich bin {WHATSAPP.name}, Ihr {WHATSAPP.role}. Wie kann
                ich Ihnen beim Projekt Trivista weiterhelfen?
              </p>
              <p className="mt-1 text-right text-xs text-gray-400">
                {new Date().getHours()}:{String(new Date().getMinutes()).padStart(2, "0")}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="p-4">
            <a
              href={WHATSAPP.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-full bg-[#25D366] py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#1da851]"
            >
              Chat starten
            </a>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
        aria-label="WhatsApp Chat öffnen"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
}
