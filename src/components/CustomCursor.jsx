import { useEffect, useRef } from 'react';

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const glowRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const glow = glowRef.current;

        const onMouseMove = (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
        };

        const onMouseDown = () => {
            cursor.classList.add('click');
            setTimeout(() => cursor.classList.remove('click'), 300);
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousedown', onMouseDown);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="custom-cursor" />
            <div ref={glowRef} className="cursor-glow" />
        </>
    );
}
