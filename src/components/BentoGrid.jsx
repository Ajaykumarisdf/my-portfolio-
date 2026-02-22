import { FaCloud, FaDocker, FaServer, FaShieldAlt, FaCode } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';
import AnimatedCounter from './AnimatedCounter';

const iconMap = {
    FaCloud, FaDocker, FaServer, FaShieldAlt, FaCode,
};

export default function BentoGrid() {
    const { about, skills, experience, projects } = portfolioData;

    const yearsExp = (() => {
        const earliest = new Date('2023-12-01');
        return Math.max(1, Math.floor((Date.now() - earliest) / (1000 * 60 * 60 * 24 * 365)));
    })();

    return (
        <section className="section bento-section" id="about">
            <div className="container">
                {/* ── Stats Row (TOP) ── */}
                <ScrollReveal>
                    <div className="stats-row">
                        <div className="glass-card stat-card-top">
                            <div className="stat-top-number"><AnimatedCounter target={yearsExp} suffix="+" /></div>
                            <div className="stat-top-label">Years Experience</div>
                        </div>
                        <div className="glass-card stat-card-top">
                            <div className="stat-top-number"><AnimatedCounter target={experience.length} /></div>
                            <div className="stat-top-label">Companies</div>
                        </div>
                        <div className="glass-card stat-card-top">
                            <div className="stat-top-number"><AnimatedCounter target={projects.length} suffix="+" /></div>
                            <div className="stat-top-label">Projects</div>
                        </div>
                        <div className="glass-card stat-card-top">
                            <div className="stat-top-number"><AnimatedCounter target={5} /></div>
                            <div className="stat-top-label">Certifications</div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ── Skills (Horizontal scroll cards, like experience) ── */}
                <ScrollReveal>
                    <div className="section-header" style={{ marginTop: '48px' }}>
                        <h2 className="section-title">Skills</h2>
                    </div>
                </ScrollReveal>
                <div className="skills-scroll-row">
                    {skills.map((cat, i) => {
                        const Icon = iconMap[cat.icon] || FaCloud;
                        return (
                            <ScrollReveal key={cat.category} delay={i * 80}>
                                <div className="glass-card skill-scroll-card">
                                    <div className="skill-scroll-header">
                                        <div className="skill-scroll-icon" style={{ background: `${cat.color}15`, color: cat.color }}>
                                            <Icon />
                                        </div>
                                        <h4>{cat.category}</h4>
                                    </div>
                                    <div className="skill-items">
                                        {cat.items.map((s) => (
                                            <span key={s} className="skill-pill has-tooltip" data-tooltip="Hands-on experience" style={{ background: `${cat.color}10`, color: cat.color, border: `1px solid ${cat.color}25` }}>
                                                {s}
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
