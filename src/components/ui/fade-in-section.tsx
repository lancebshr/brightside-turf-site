"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, useEffect, useRef, useState } from "react";

type FadeInSectionProps = HTMLAttributes<HTMLDivElement> & {
  delay?: number;
};

export function FadeInSection({
  className,
  children,
  delay = 0,
  ...props
}: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0 translate-y-6 transition-all duration-700 ease-out",
        visible && "opacity-100 translate-y-0",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
}
