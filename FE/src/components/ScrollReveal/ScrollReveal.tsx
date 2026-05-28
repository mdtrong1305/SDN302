import React, { useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
    children: React.ReactNode;
    animationClass: string; // e.g. "animate__fadeInUp", "animate__fadeInRight"
    duration?: string;      // e.g. "animate__fast", "animate__slow"
    delay?: string;         // e.g. "animate__delay-1s"
    className?: string;     // custom container classes
    threshold?: number;     // visibility trigger threshold
};

export default function ScrollReveal({
    children,
    animationClass,
    duration = "",
    delay = "",
    className = "",
    threshold = 0.1,
}: ScrollRevealProps) {
    const [hasIntersected, setHasIntersected] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasIntersected(true);
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.disconnect();
            }
        };
    }, [threshold]);

    return (
        <div
            ref={ref}
            className={`${className} ${
                hasIntersected
                    ? `animate__animated ${animationClass} ${duration} ${delay}`
                    : "opacity-0"
            }`}
        >
            {children}
        </div>
    );
}
