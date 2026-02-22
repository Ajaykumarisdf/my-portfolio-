import { useEffect, useRef } from 'react';

export default function Confetti({ trigger }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!trigger) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const colors = ['#8b5cf6', '#06b6d4', '#34d399', '#f472b6', '#fbbf24', '#fb923c'];
        const particles = [];

        for (let i = 0; i < 120; i++) {
            particles.push({
                x: canvas.width / 2 + (Math.random() - 0.5) * 200,
                y: canvas.height / 3,
                vx: (Math.random() - 0.5) * 16,
                vy: Math.random() * -14 - 4,
                w: Math.random() * 8 + 4,
                h: Math.random() * 6 + 2,
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: Math.random() * 360,
                rotSpeed: (Math.random() - 0.5) * 12,
                gravity: 0.35,
                opacity: 1,
            });
        }

        let frame;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let alive = false;

            for (const p of particles) {
                p.vy += p.gravity;
                p.x += p.vx;
                p.y += p.vy;
                p.rotation += p.rotSpeed;
                p.opacity -= 0.008;

                if (p.opacity > 0) {
                    alive = true;
                    ctx.save();
                    ctx.translate(p.x, p.y);
                    ctx.rotate((p.rotation * Math.PI) / 180);
                    ctx.globalAlpha = p.opacity;
                    ctx.fillStyle = p.color;
                    ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
                    ctx.restore();
                }
            }

            if (alive) {
                frame = requestAnimationFrame(animate);
            }
        };

        animate();
        return () => cancelAnimationFrame(frame);
    }, [trigger]);

    return (
        <canvas
            ref={canvasRef}
            className="confetti-canvas"
            style={{
                position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                pointerEvents: 'none', zIndex: 9999,
            }}
        />
    );
}
