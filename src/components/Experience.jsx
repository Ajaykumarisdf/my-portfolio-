import portfolioData from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function Experience() {
    const { experience } = portfolioData;

    return (
        <section className="section" id="experience">
            <div className="container">
                <ScrollReveal>
                    <div className="section-header">
                        <span className="section-icon">💼</span>
                        <h2 className="section-title">Experience</h2>
                        <p className="section-subtitle">
                            My professional journey in cloud infrastructure and DevOps
                        </p>
                    </div>
                </ScrollReveal>

                <div className="timeline">
                    {experience.map((exp, i) => (
                        <ScrollReveal
                            key={i}
                            className={i % 2 === 0 ? 'reveal-left' : 'reveal-right'}
                            delay={i * 150}
                        >
                            <div className="timeline-item">
                                <div className={`timeline-dot${exp.current ? ' current' : ''}`}></div>
                                <div className="glass-card timeline-content">
                                    <span className="timeline-period">{exp.period}</span>
                                    <h3 className="timeline-role">{exp.role}</h3>
                                    <p className="timeline-company">{exp.company}</p>
                                    <p className="timeline-location">📍 {exp.location}</p>
                                    <ul className="timeline-bullets">
                                        {exp.bullets.map((bullet, j) => (
                                            <li key={j}>{bullet}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
