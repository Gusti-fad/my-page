"use client";

import { div } from "framer-motion/client";

const images = [
  "/icons/logo/G.svg",
  "/icons/logo/U.svg",
  "/icons/logo/S.svg",
  "/icons/logo/T.svg",
  "/icons/logo/I.svg",
];

export default function FlipImages({ intro }: { intro?: boolean }) {
  return (
    <div>
      <div className={`flex items-center justify-center duration-1000 ${intro ? "gap-3" : "gap-0"}`}>
        {images.map((src, i) => (
          <div 
          className={`
            h-20 md:h-32
            transition-all duration-1000
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${intro ? "scale-150 translate-y-[100%]" : "scale-100 translate-y-0 -mx-0.5"}
          `} 
          key={i}
          >
            <img
              src={src}
              alt=""
              className="h-full"
              data-aos="flip-up" 
              data-aos-delay={i * 150}
            />
          </div>
          
        ))}
      </div>
    </div>
  );
}