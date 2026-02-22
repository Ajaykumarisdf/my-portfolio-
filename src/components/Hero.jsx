import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaArrowDown, FaProjectDiagram } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';

export default function Hero() {
    const { personal } = portfolioData;

    return (
        <section className="hero" id="hero">
            <div className="hero-content">
                <div className="hero-badge">
                    <span>☁️</span>
                    Available for opportunities
                </div>

                <h1 className="hero-name">
                    Hi, I'm <br />
                    <span className="gradient-text">{personal.name}</span>
                </h1>

                <p className="hero-title">{personal.title}</p>

                <p className="hero-description">{personal.tagline}</p>

                <div className="hero-info">
                    <span className="hero-info-item">
                        <FaMapMarkerAlt /> {personal.location}
                    </span>
                    <a href={`mailto:${personal.email}`} className="hero-info-item" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <FaEnvelope /> {personal.email}
                    </a>
                    <a href={`tel:${personal.phone}`} className="hero-info-item" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <FaPhone /> {personal.phone}
                    </a>
                </div>

                <div className="hero-buttons">
                    <a href="#contact" className="btn btn-primary">
                        <FaEnvelope /> Get in Touch
                    </a>
                    <a href="#projects" className="btn btn-secondary">
                        <FaProjectDiagram /> View Projects
                    </a>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <span></span>
            </div>
        </section>
    );
}
