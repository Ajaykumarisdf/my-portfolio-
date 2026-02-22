import { FaGraduationCap, FaCertificate, FaLightbulb } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function Education() {
    const { education, certifications, interests } = portfolioData;

    return (
        <section className="section" id="education">
            <div className="container">
                <ScrollReveal>
                    <div className="section-header">
                        <span className="section-icon">🎓</span>
                        <h2 className="section-title">Education & Certifications</h2>
                    </div>
                </ScrollReveal>

                {/* Education Cards */}
                <div className="education-grid">
                    {education.map((edu, i) => (
                        <ScrollReveal key={i} delay={i * 100}>
                            <div className="glass-card education-card">
                                <div className="education-icon">
                                    <FaGraduationCap style={{ color: 'var(--accent-blue)' }} />
                                </div>
                                <h3 className="education-degree">{edu.degree}</h3>
                                <p className="education-institution">{edu.institution}</p>
                                <p className="education-period">{edu.period}</p>
                                {edu.score && (
                                    <span className="education-score">Score: {edu.score}</span>
                                )}
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Certifications */}
                <ScrollReveal delay={200}>
                    <div style={{ textAlign: 'center', marginTop: '60px' }}>
                        <h3 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            marginBottom: '8px',
                        }}>
                            📜 Certifications
                        </h3>
                    </div>
                    <div className="cert-grid">
                        {certifications.map((cert, i) => {
                            const name = typeof cert === 'string' ? cert : cert.name;
                            const url = typeof cert === 'string' ? null : cert.url;

                            if (url) {
                                return (
                                    <a
                                        key={i}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cert-badge"
                                        style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                                    >
                                        <FaCertificate />
                                        {name}
                                    </a>
                                );
                            }

                            return (
                                <div key={i} className="cert-badge">
                                    <FaCertificate />
                                    {name}
                                </div>
                            );
                        })}
                    </div>
                </ScrollReveal>

                {/* Interests */}
                <ScrollReveal delay={300}>
                    <div style={{ textAlign: 'center', marginTop: '60px' }}>
                        <h3 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            marginBottom: '8px',
                        }}>
                            💡 Areas of Interest
                        </h3>
                    </div>
                    <div className="interests-grid">
                        {interests.map((interest, i) => (
                            <span key={i} className="interest-tag">
                                {interest}
                            </span>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
