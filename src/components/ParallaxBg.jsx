import { useEffect } from 'react';

export default function ParallaxBg() {
    useEffect(() => {
        const blobs = document.querySelectorAll('.animated-bg .blob');
        if (!blobs.length) return;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            blobs.forEach((blob, i) => {
                const speed = 0.03 + i * 0.015;
                const direction = i % 2 === 0 ? 1 : -1;
                blob.style.transform = `translateY(${scrollY * speed * direction}px)`;
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return null;
}
