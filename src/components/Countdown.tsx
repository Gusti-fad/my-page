"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

const target = dayjs("2026-04-24T23:59:59");

export default function Countdown() {
  const [time, setTime] = useState(getTime());

  function getTime() {
    const now = dayjs();
    const diff = target.diff(now);

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor(diff / (1000 * 60 * 60)) % 24,
      minutes: Math.floor(diff / (1000 * 60)) % 60,
      seconds: Math.floor(diff / 1000) % 60,
    };
  }

  useEffect(() => {
    const i = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">

      {/* TEXT */}
      <p className="text-xs md:text-sm text-neutral-400 tracking-wide" data-aos="fade-up" data-aos-delay="1600">
        Estimated time until this world is ready
      </p>

      {/* COUNTDOWN */}
      <div className="flex gap-3 text-center text-2xl font-mono">
        <Box value={time.days} label="Days" data-aos="fade-right" data-aos-delay="1900"/>
        <Box value={time.hours} label="Hours" data-aos="fade-up" data-aos-delay="2100" />
        <Box value={time.minutes} label="Min" data-aos="fade-up" data-aos-delay="2100" />
        <Box value={time.seconds} label="Sec" data-aos="fade-left" data-aos-delay="1900"/>
      </div>

    </div>
  );
}

function Box({ value, label, ...props }: { value: number; label: string }) {
  return (
    <div className="bg-neutral-900 p-2 md:px-4 md:py-3 rounded-lg md:rounded-xl min-w-16 md:min-w-20" {...props}>
      <div className="text-xl md:text-3xl">{value}</div>
      <div className="text-xs text-neutral-400">{label}</div>
    </div>
  );
}
