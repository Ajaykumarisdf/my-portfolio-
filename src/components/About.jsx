import { FaUserAstronaut } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';
import AnimatedCounter from './AnimatedCounter';

export default function About() {
    const { about, personal, experience } = portfolioData;

    // Calculate some dynamic stats
    const yearsExp = (() => {
        const earliest = new Date('2023-12-01');
        const now = new Date();
        return Math.floor((now - earliest) / (1000 * 60 * 60 * 24 * 365));
    })();

    return (
        <section className="section" id="about">
            <div className="container">
                <ScrollReveal>
                    <div className="section-header">
                        <span className="section-icon">👨‍💻</span>
                        <h2 className="section-title">About Me</h2>
                    </div>
                </ScrollReveal>

                <div className="about-grid">
                    <ScrollReveal className="reveal-left">
                        <div className="about-image-container">
                            <div className="about-image-placeholder">
                                {personal.profileImage ? (
                                    <img src={personal.profileImage} alt={personal.name} />
                                ) : (
                                    <FaUserAstronaut />
                                )}
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="reveal-right">
                        <div className="about-text">
                            {about.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>

                        <div className="about-stats">
                            <div className="stat-card">
                                <div className="stat-number">
                                    <AnimatedCounter target={yearsExp} suffix="+" />
                                </div>
                                <div className="stat-label">Years Experience</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">
                                    <AnimatedCounter target={experience.length} suffix="" />
                                </div>
                                <div className="stat-label">Companies</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">
                                    <AnimatedCounter target={portfolioData.projects.length} suffix="+" />
                                </div>
                                <div className="stat-label">Projects</div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
