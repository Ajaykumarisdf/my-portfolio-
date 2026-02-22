import { FaCloud, FaDocker, FaServer, FaShieldAlt, FaCode } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

const iconMap = {
    FaCloud: FaCloud,
    FaDocker: FaDocker,
    FaServer: FaServer,
    FaShieldAlt: FaShieldAlt,
    FaCode: FaCode,
};

export default function Skills() {
    const { skills } = portfolioData;

    return (
        <section className="section" id="skills">
            <div className="container">
                <ScrollReveal>
                    <div className="section-header">
                        <span className="section-icon">🛠</span>
                        <h2 className="section-title">Skills & Technologies</h2>
                        <p className="section-subtitle">
                            Tools and technologies I work with daily to build and manage cloud infrastructure
                        </p>
                    </div>
                </ScrollReveal>

                <div className="skills-grid">
                    {skills.map((cat, i) => {
                        const Icon = iconMap[cat.icon] || FaCloud;
                        return (
                            <ScrollReveal key={cat.category} delay={i * 100}>
                                <div className="glass-card skill-category">
                                    <div className="skill-category-header">
                                        <div
                                            className="skill-category-icon"
                                            style={{
                                                background: `${cat.color}15`,
                                                color: cat.color,
                                            }}
                                        >
                                            <Icon />
                                        </div>
                                        <h3 className="skill-category-name">{cat.category}</h3>
                                    </div>
                                    <div className="skill-items">
                                        {cat.items.map((skill) => (
                                            <span
                                                key={skill}
                                                className="skill-pill"
                                                style={{
                                                    background: `${cat.color}12`,
                                                    color: cat.color,
                                                    border: `1px solid ${cat.color}25`,
                                                }}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
