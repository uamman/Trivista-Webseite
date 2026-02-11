"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP } from "@/lib/constants";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [replyText, setReplyText] = useState("");

  // When popup opens, simulate typing then message appearing
  useEffect(() => {
    if (!isOpen) {
      setShowMessage(false);
      setShowTyping(false);
      return;
    }

    // Show typing indicator after short delay
    const typingTimer = setTimeout(() => setShowTyping(true), 400);
    // Replace typing with actual message
    const messageTimer = setTimeout(() => {
      setShowTyping(false);
      setShowMessage(true);
    }, 1800);

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(messageTimer);
    };
  }, [isOpen]);

  const now = new Date();
  const timeStr = `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}`;

  return (
    <div className="fixed right-4 bottom-4 z-50 md:right-6 md:bottom-6">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="mb-4 w-[320px] max-w-[calc(100vw-3rem)] origin-bottom-right overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="bg-[#075E54] px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-white/20">
                    <Image
                      src="/images/contact/ueli-ammann.webp"
                      alt={WHATSAPP.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{WHATSAPP.name}</p>
                    <p className="text-xs text-[#25D366]">online</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Schliessen"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Chat Area */}
            <div
              className="relative min-h-[140px] p-4"
              style={{
                backgroundColor: "#ECE5DD",
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8c0b4' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              }}
            >
              {/* Typing indicator */}
              <AnimatePresence>
                {showTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="mb-2 flex items-start"
                  >
                    <div className="rounded-lg rounded-tl-none bg-white px-4 py-3 shadow-sm">
                      <div className="flex gap-1">
                        <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: "0ms" }} />
                        <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: "150ms" }} />
                        <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Message bubble */}
              <AnimatePresence>
                {showMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="flex items-start"
                  >
                    <div className="max-w-[85%] rounded-lg rounded-tl-none bg-white px-3 py-2 shadow-sm">
                      <p className="text-[13px] leading-relaxed text-gray-800">
                        Guten Tag! Ich bin {WHATSAPP.name}, Ihr {WHATSAPP.role}. Wie kann ich Ihnen beim Projekt Trivista weiterhelfen?
                      </p>
                      <div className="mt-1 flex items-center justify-end gap-1">
                        <span className="text-[11px] text-gray-400">{timeStr}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Reply bar */}
            <div className="flex items-center gap-2 border-t border-gray-200 bg-[#F0F0F0] px-3 py-2">
              <input
                type="text"
                placeholder="Nachricht eingeben..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                className="flex-1 rounded-full bg-white px-4 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && replyText.trim()) {
                    window.open(
                      `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(replyText)}`,
                      "_blank"
                    );
                  }
                }}
              />
              <a
                href={replyText.trim()
                  ? `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(replyText)}`
                  : WHATSAPP.url
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition-colors hover:bg-[#1da851]"
              >
                <Send size={18} className="translate-x-[1px]" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <div className="relative">
        {/* Pulse ring - behind the button */}
        {!isOpen && (
          <span className="absolute -inset-2 animate-[pulse_3s_ease-in-out_infinite] rounded-full bg-[#25D366]/25" />
        )}

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_15px_rgba(37,211,102,0.4)]"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="WhatsApp Chat öffnen"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-white"
              >
                <X size={26} />
              </motion.span>
            ) : (
              <motion.span
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <svg viewBox="0 0 32 32" width="28" height="28" fill="#FFFFFF">
                  <path d="M16.004 3.2C8.918 3.2 3.2 8.694 3.2 15.5c0 2.252.624 4.368 1.71 6.196L3.2 28.8l7.39-1.67A12.66 12.66 0 0016.004 28.8C23.09 28.8 28.8 23.306 28.8 16.5S23.09 3.2 16.004 3.2zm0 2.4c5.83 0 10.396 4.454 10.396 9.9s-4.566 9.9-10.396 9.9a10.27 10.27 0 01-4.89-1.23l-.35-.19-3.63.82.86-3.5-.22-.37a9.65 9.65 0 01-1.57-5.33c0-5.546 4.566-10 10.396-10zm-4.6 5.4c-.2 0-.52.074-.792.37-.272.296-1.04 1.016-1.04 2.478s1.064 2.876 1.212 3.074c.148.198 2.092 3.19 5.068 4.476.708.306 1.26.488 1.69.624.71.226 1.356.194 1.866.118.57-.084 1.752-.716 2-1.408.248-.692.248-1.284.174-1.408-.074-.124-.272-.198-.57-.346-.298-.148-1.756-.866-2.028-.966-.272-.098-.47-.148-.668.148-.198.296-.768.966-.942 1.164-.174.198-.348.222-.646.074-.298-.148-1.258-.464-2.396-1.476-.886-.788-1.484-1.762-1.658-2.06-.174-.296-.018-.456.13-.604.134-.132.298-.346.448-.52.148-.174.198-.296.298-.494.098-.198.05-.372-.026-.52-.074-.148-.668-1.61-.916-2.204-.24-.578-.486-.5-.668-.51l-.57-.008a1.09 1.09 0 00-.792.372z" />
                </svg>
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
