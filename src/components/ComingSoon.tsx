"use client";

import { useEffect, useState } from "react";
import FlipImages from "./FlipImage";
import Countdown from "./Countdown";

export default function ComingSoon() {
  const [intro, setIntro] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setIntro(false);
    }, 1350);

    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-5">
      <div className="flex flex-col items-center justify-center">
        <FlipImages intro={intro} />
        <div
          className={`
            flex flex-col items-center
            transition-all duration-700 ease-out
            ${intro ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0 mt-5 md:mt-10"}
          `}
        >
          <div className="text-center max-w-xl">
            <h1 className="text-xl md:text-3xl font-bold tracking-wide" data-aos="fade-up" data-aos-delay="1200">
              Still building my world
            </h1>
            <p className="text-sm md:text-base text-neutral-400 mt-2 md:mt-4" data-aos="fade-up" data-aos-delay="1400">
              I&apos;m working on a new portfolio to showcase the things I&apos;ve built,
              the things I&apos;ve learned, and the things I&apos;m still figuring out.
            </p>
          </div>
          <div className="mt-5 md:mt-10">
            <Countdown />
          </div>
        </div>
      </div>
    </div>
  );
}