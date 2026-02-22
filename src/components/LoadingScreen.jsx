import { useState, useEffect } from 'react';

export default function LoadingScreen() {
    const [visible, setVisible] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => setFadeOut(true), 1200);
        const timer2 = setTimeout(() => setVisible(false), 1800);
        return () => { clearTimeout(timer1); clearTimeout(timer2); };
    }, []);

    if (!visible) return null;

    return (
        <div className={`loading-screen${fadeOut ? ' fade-out' : ''}`}>
            <div className="loading-content">
                <div className="loading-logo">
                    <span className="loading-bracket">{'<'}</span>
                    <span className="loading-name">AR</span>
                    <span className="loading-bracket">{'/>'}</span>
                </div>
                <div className="loading-bar">
                    <div className="loading-bar-fill"></div>
                </div>
                <p className="loading-text">Loading portfolio...</p>
            </div>
        </div>
    );
}
