import { FaRocket } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function Projects() {
    const { projects } = portfolioData;

    return (
        <section className="section" id="projects">
            <div className="container">
                <ScrollReveal>
                    <div className="section-header">
                        <span className="section-icon">🚀</span>
                        <h2 className="section-title">Projects</h2>
                        <p className="section-subtitle">
                            Real-world infrastructure projects I've designed and deployed
                        </p>
                    </div>
                </ScrollReveal>

                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <ScrollReveal key={i} delay={i * 120}>
                            <div className="glass-card project-card">
                                <div className="project-image">
                                    {project.image ? (
                                        <img src={project.image} alt={project.title} />
                                    ) : (
                                        <div className="project-image-placeholder">
                                            <FaRocket />
                                        </div>
                                    )}
                                </div>

                                <div className="project-body">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>

                                    <div className="project-tech">
                                        {project.tech.map((t) => (
                                            <span key={t} className="tag">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <ul className="project-bullets">
                                        {project.bullets.map((b, j) => (
                                            <li key={j}>{b}</li>
                                        ))}
                                    </ul>

                                    {project.liveImage && (
                                        <div className="project-live-image">
                                            <img src={project.liveImage} alt={`${project.title} live`} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
