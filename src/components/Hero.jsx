import { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaDownload, FaProjectDiagram } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';
import Confetti from './Confetti';
import { trackResumeDownload } from '../utils/analytics';

export default function Hero() {
    const { personal, typingTitles = [], resumeLink, about } = portfolioData;
    const [titleIndex, setTitleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayText, setDisplayText] = useState('');
    const [confettiKey, setConfettiKey] = useState(0);

    useEffect(() => {
        if (!typingTitles.length) return;
        const currentTitle = typingTitles[titleIndex];
        let timeout;
        if (!isDeleting && charIndex <= currentTitle.length) {
            timeout = setTimeout(() => { setDisplayText(currentTitle.slice(0, charIndex)); setCharIndex(charIndex + 1); }, 80);
        } else if (!isDeleting && charIndex > currentTitle.length) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && charIndex > 0) {
            timeout = setTimeout(() => { setDisplayText(currentTitle.slice(0, charIndex - 1)); setCharIndex(charIndex - 1); }, 40);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setTitleIndex((titleIndex + 1) % typingTitles.length);
        }
        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, titleIndex, typingTitles]);

    const handleResumeClick = () => {
        setConfettiKey((k) => k + 1);
        trackResumeDownload();
    };

    return (
        <section className="hero" id="hero">
            <Confetti trigger={confettiKey} />
            <div className="container">
                <div className="hero-split">
                    <div className="hero-left">
                        <div className="hero-badge">
                            <span>☁️</span> Available for opportunities
                        </div>
                        <h1 className="hero-name">
                            Hi, I'm<br />
                            <span className="gradient-text">{personal.name}</span>
                        </h1>
                        <p className="hero-title">
                            {typingTitles.length ? (
                                <><span>{displayText}</span><span className="typing-cursor">|</span></>
                            ) : personal.title}
                        </p>
                        <p className="hero-description">{personal.tagline}</p>
                        <div className="hero-meta">
                            <span><FaMapMarkerAlt /> {personal.location}</span>
                            <a href={`mailto:${personal.email}`}><FaEnvelope /> {personal.email}</a>
                        </div>
                        <div className="hero-buttons">
                            {resumeLink && (
                                <a href={resumeLink} download className="btn btn-primary" onClick={handleResumeClick}>
                                    <FaDownload /> Resume
                                </a>
                            )}
                            <a href="#projects" className="btn btn-secondary"><FaProjectDiagram /> Projects</a>
                        </div>
                    </div>
                    <div className="hero-right">
                        {personal.profileImage ? (
                            <img src={personal.profileImage} alt={personal.name} className="hero-profile-img" />
                        ) : (
                            <div className="hero-graphic">
                                <span>☁️</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* About Me — right below hero */}
                <div className="glass-card about-horizontal hero-about">
                    {about.map((p, i) => <p key={i}>{p}</p>)}
                </div>
            </div>
        </section>
    );
}
