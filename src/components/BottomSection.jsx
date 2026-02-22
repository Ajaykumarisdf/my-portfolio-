import { useState } from 'react';
import { FaLinkedinIn, FaExternalLinkAlt, FaCertificate, FaGraduationCap, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaWhatsapp, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';
import { trackWhatsAppClick, trackLinkClick } from '../utils/analytics';

export default function BottomSection() {
    const { blog = [], certifications, education, interests, personal, profiles } = portfolioData;
    const [blogExpanded, setBlogExpanded] = useState(false);
    const [certsExpanded, setCertsExpanded] = useState(false);

    const BLOG_PREVIEW = 2;
    const CERTS_PREVIEW = 3;

    const blogsToShow = blogExpanded ? blog : blog.slice(0, BLOG_PREVIEW);
    const certsToShow = certsExpanded ? certifications : certifications.slice(0, CERTS_PREVIEW);

    const whatsappNumber = '918825910458';
    const whatsappMsg = encodeURIComponent('Hi, I got your contact from your portfolio.');
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

    return (
        <section className="section bottom-section" id="bottom">
            <div className="container">
                <div className="bottom-grid">
                    {/* Blog column */}
                    {blog.length > 0 && (
                        <ScrollReveal>
                            <div className="glass-card bottom-card" id="blog">
                                <h3 className="bottom-card-title">📝 Blog & Articles</h3>
                                {blogsToShow.map((post, i) => (
                                    <a key={i} href={post.url} target="_blank" rel="noopener noreferrer" className="bottom-blog-item">
                                        <div className="bottom-blog-meta">
                                            <FaLinkedinIn className="bottom-blog-icon" />
                                            <span>{post.date}</span>
                                        </div>
                                        <h4>{post.title}</h4>
                                        <p>{post.summary.slice(0, 120)}...</p>
                                        <span className="bottom-blog-link">Read on LinkedIn <FaExternalLinkAlt /></span>
                                    </a>
                                ))}
                                {blog.length > BLOG_PREVIEW && (
                                    <button className="expand-btn" onClick={() => setBlogExpanded(!blogExpanded)}>
                                        {blogExpanded ? <><FaChevronUp /> Show Less</> : <><FaChevronDown /> +{blog.length - BLOG_PREVIEW} More</>}
                                    </button>
                                )}
                            </div>
                        </ScrollReveal>
                    )}

                    {/* Certifications + Education column */}
                    <ScrollReveal delay={100}>
                        <div className="glass-card bottom-card" id="education">
                            <h3 className="bottom-card-title">🎓 Education</h3>
                            {education.map((edu, i) => (
                                <div key={i} className="bottom-edu-item">
                                    <FaGraduationCap className="bottom-edu-icon" />
                                    <div>
                                        <strong>{edu.degree}</strong>
                                        <p>{edu.institution}</p>
                                        <span className="bottom-edu-period">{edu.period}</span>
                                        {edu.score && <span className="bottom-edu-score">{edu.score}</span>}
                                    </div>
                                </div>
                            ))}

                            <h3 className="bottom-card-title" style={{ marginTop: '24px' }}>📜 Certifications</h3>
                            <div className="bottom-certs">
                                {certsToShow.map((cert, i) => {
                                    const name = typeof cert === 'string' ? cert : cert.name;
                                    const url = typeof cert === 'string' ? null : cert.url;
                                    const brand = typeof cert === 'object' ? cert.brand : null;
                                    const color = typeof cert === 'object' ? cert.color : null;

                                    const badge = (
                                        <>
                                            {brand ? (
                                                <span className="cert-brand-logo" style={{ background: color, color: '#fff' }}>{brand}</span>
                                            ) : (
                                                <FaCertificate />
                                            )}
                                            {name}
                                        </>
                                    );

                                    return url ? (
                                        <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="bottom-cert-badge">
                                            {badge}
                                        </a>
                                    ) : (
                                        <span key={i} className="bottom-cert-badge">{badge}</span>
                                    );
                                })}
                            </div>
                            {certifications.length > CERTS_PREVIEW && (
                                <button className="expand-btn" onClick={() => setCertsExpanded(!certsExpanded)} style={{ marginTop: '10px' }}>
                                    {certsExpanded ? <><FaChevronUp /> Show Less</> : <><FaChevronDown /> +{certifications.length - CERTS_PREVIEW} More</>}
                                </button>
                            )}

                            <h3 className="bottom-card-title" style={{ marginTop: '24px' }}>💡 Interests</h3>
                            <div className="bottom-interests">
                                {interests.map((item, i) => (
                                    <span key={i} className="tag">{item}</span>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Contact column */}
                    <ScrollReveal delay={200}>
                        <div className="glass-card bottom-card" id="contact">
                            <h3 className="bottom-card-title">📬 Contact</h3>
                            <div className="bottom-contact-items">
                                <a href={`mailto:${personal.email}`} className="bottom-contact-row">
                                    <FaEnvelope /> {personal.email}
                                </a>
                                <a href={`tel:${personal.phone}`} className="bottom-contact-row">
                                    <FaPhone /> {personal.phone}
                                </a>
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bottom-contact-row bottom-whatsapp" onClick={trackWhatsAppClick}>
                                    <FaWhatsapp /> WhatsApp
                                </a>
                                <span className="bottom-contact-row">
                                    <FaMapMarkerAlt /> {personal.location}
                                </span>
                            </div>

                            <h4 className="bottom-social-title">Connect</h4>
                            <div className="bottom-socials">
                                <a href={profiles.linkedin} target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                                    <FaLinkedin />
                                </a>
                                {(Array.isArray(profiles.github) ? profiles.github : [profiles.github]).map((url, i) => (
                                    <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="social-link github">
                                        <FaGithub />
                                    </a>
                                ))}
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="social-link whatsapp">
                                    <FaWhatsapp />
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
