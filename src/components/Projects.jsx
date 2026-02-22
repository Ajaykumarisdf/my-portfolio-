import { FaRocket, FaGithub } from 'react-icons/fa';
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

                                    {/* Architecture Diagram Overlay on hover */}
                                    {project.archFlow && (
                                        <div className="project-arch-overlay">
                                            <div className="project-arch-diagram">
                                                <h4>⚙ Architecture</h4>
                                                <div className="arch-flow">
                                                    {project.archFlow.map((node, j) => (
                                                        <span key={j}>
                                                            <span className="arch-node">{node}</span>
                                                            {j < project.archFlow.length - 1 && <span className="arch-arrow"> → </span>}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="project-body">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>

                                    <div className="project-tech">
                                        {project.tech.map((t) => (
                                            <span key={t} className="tag">{t}</span>
                                        ))}
                                    </div>

                                    <ul className="project-bullets">
                                        {project.bullets.map((b, j) => (
                                            <li key={j}>{b}</li>
                                        ))}
                                    </ul>

                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-secondary"
                                            style={{ marginTop: '20px', display: 'inline-flex', fontSize: '0.9rem', padding: '10px 24px' }}
                                        >
                                            <FaGithub /> View on GitHub
                                        </a>
                                    )}

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
