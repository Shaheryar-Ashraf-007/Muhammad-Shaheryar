"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 700);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] transition-opacity duration-700">
      <div className="relative flex h-28 w-28 items-center justify-center">
        {/* Outer glow */}
        <div className="absolute inset-0 animate-pulse rounded-full bg-blue-500/10 blur-3xl" />

        {/* Rotating ring */}
        <div className="absolute inset-0 animate-spin rounded-full border-[3px] border-transparent border-t-blue-500 border-r-purple-500" />

        {/* Second rotating ring */}
        <div
          className="absolute inset-3 animate-spin rounded-full border border-white/10 border-b-blue-400"
          style={{ animationDuration: "1.5s", animationDirection: "reverse" }}
        />

        {/* Center */}
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/[0.04] shadow-[0_0_40px_rgba(59,130,246,0.25)] backdrop-blur-md">
          <div className="h-2.5 w-2.5 animate-ping rounded-full bg-blue-400" />
          <div className="absolute h-2.5 w-2.5 rounded-full bg-blue-400" />
        </div>
      </div>
    </div>
  );
}
