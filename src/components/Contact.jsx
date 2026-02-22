import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
    const { personal, profiles } = portfolioData;

    return (
        <section className="section" id="contact">
            <div className="container">
                <ScrollReveal>
                    <div className="section-header">
                        <span className="section-icon">📬</span>
                        <h2 className="section-title">Get in Touch</h2>
                        <p className="section-subtitle">
                            Feel free to reach out for collaborations or just a friendly hello!
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                    <div className="contact-grid">
                        <a
                            href={`mailto:${personal.email}`}
                            className="glass-card contact-card"
                            style={{ textDecoration: 'none' }}
                        >
                            <div
                                className="contact-icon"
                                style={{ background: 'rgba(0, 212, 255, 0.1)', color: 'var(--accent-blue)' }}
                            >
                                <FaEnvelope />
                            </div>
                            <div>
                                <p className="contact-label">Email</p>
                                <p className="contact-value">{personal.email}</p>
                            </div>
                        </a>

                        <a
                            href={`tel:${personal.phone}`}
                            className="glass-card contact-card"
                            style={{ textDecoration: 'none' }}
                        >
                            <div
                                className="contact-icon"
                                style={{ background: 'rgba(123, 47, 247, 0.1)', color: 'var(--accent-purple)' }}
                            >
                                <FaPhone />
                            </div>
                            <div>
                                <p className="contact-label">Phone</p>
                                <p className="contact-value">{personal.phone}</p>
                            </div>
                        </a>

                        <div className="glass-card contact-card">
                            <div
                                className="contact-icon"
                                style={{ background: 'rgba(0, 229, 160, 0.1)', color: 'var(--accent-green)' }}
                            >
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <p className="contact-label">Location</p>
                                <p className="contact-value">{personal.location}</p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Social Links */}
                <ScrollReveal delay={200}>
                    <div className="social-links">
                        <a
                            href={profiles.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link linkedin"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn />
                        </a>
                        {profiles.github.map((url, i) => (
                            <a
                                key={i}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link github"
                                aria-label={`GitHub ${i + 1}`}
                            >
                                <FaGithub />
                            </a>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
