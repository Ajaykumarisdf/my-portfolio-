import { FaLinkedinIn, FaExternalLinkAlt } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function Blog() {
    const { blog = [] } = portfolioData;

    if (!blog.length) return null;

    return (
        <section className="section" id="blog">
            <div className="container">
                <ScrollReveal>
                    <div className="section-header">
                        <span className="section-icon">📝</span>
                        <h2 className="section-title">Blog & Articles</h2>
                        <p className="section-subtitle">
                            Sharing my learnings and project experiences with the community
                        </p>
                    </div>
                </ScrollReveal>

                <div className="blog-grid">
                    {blog.map((post, i) => (
                        <ScrollReveal key={i} delay={i * 120}>
                            <a
                                href={post.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-card blog-card"
                            >
                                <div className="blog-card-header">
                                    <FaLinkedinIn className="blog-platform-icon" />
                                    <span className="blog-date">{post.date}</span>
                                </div>
                                <h3 className="blog-title">{post.title}</h3>
                                <p className="blog-summary">{post.summary}</p>
                                <div className="blog-tags">
                                    {post.tags.map((tag) => (
                                        <span key={tag} className="tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <span className="blog-read-more">
                                    Read on LinkedIn <FaExternalLinkAlt />
                                </span>
                            </a>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
