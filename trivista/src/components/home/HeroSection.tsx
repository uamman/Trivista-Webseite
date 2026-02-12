"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlaying = () => setVideoReady(true);
    video.addEventListener("playing", onPlaying, { once: true });

    // Retry play on first user interaction (some mobile browsers need it)
    const tryPlay = () => {
      video.play().catch(() => {});
    };

    // If autoplay didn't kick in yet, retry on first touch/scroll
    const onInteraction = () => {
      if (!videoReady) tryPlay();
      cleanup();
    };

    window.addEventListener("touchstart", onInteraction, { once: true, passive: true });
    window.addEventListener("scroll", onInteraction, { once: true, passive: true });

    const cleanup = () => {
      window.removeEventListener("touchstart", onInteraction);
      window.removeEventListener("scroll", onInteraction);
    };

    return () => {
      video.removeEventListener("playing", onPlaying);
      cleanup();
    };
  }, [videoReady]);

  return (
    <section className="relative flex min-h-[700px] items-center justify-center overflow-hidden bg-primary md:h-screen">
      {/* Preload video for faster start */}
      <link rel="preload" href="/video/aussicht-animation.mp4" as="video" type="video/mp4" />

      {/* Poster Image with Ken Burns zoom — visible until video loads */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src="/images/gallery/aussen/1.webp"
          alt="Trivista Kobelwald"
          fill
          priority
          sizes="100vw"
          className="animate-[kenburns_20s_ease-in-out_infinite_alternate] object-cover"
        />
      </div>

      {/* Video Background — fades in when ready */}
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/video/aussicht-animation.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 w-[80%] max-w-[1140px] px-6 text-center animate-[fadeUp_0.8s_ease-out_both]">
        <p className="mb-4 text-[22px] font-light text-white [text-shadow:0px_0px_10px_rgba(38,65,60,0.21)]">
          Trivista – Erhaben Wohnen
        </p>

        <h1 className="text-[30px] font-bold leading-[48px] text-white [text-shadow:0px_0px_10px_rgba(38,65,60,0.21)] md:text-[60px] md:leading-[70px]">
          Exklusive Neubauwohnungen in Kobelwald
        </h1>
      </div>
    </section>
  );
}
