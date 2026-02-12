import { useEffect, useRef } from 'react';

export function useScrollReveal(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold, rootMargin: '0px 0px -60px 0px' }
        );

        const animatedElements = el.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((child) => observer.observe(child));

        return () => {
            animatedElements.forEach((child) => observer.unobserve(child));
        };
    }, [threshold]);

    return ref;
}
