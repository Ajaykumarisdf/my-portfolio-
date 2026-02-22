import { useState } from 'react';
import { FaMapMarkerAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function Experience() {
    const { experience } = portfolioData;
    const [expandedIdx, setExpandedIdx] = useState(null);
    const PREVIEW_COUNT = 4;

    const toggle = (i) => setExpandedIdx(expandedIdx === i ? null : i);

    return (
        <section className="section" id="experience">
            <div className="container">
                <ScrollReveal>
                    <div className="section-header">
                        <h2 className="section-title">Experience</h2>
                    </div>
                </ScrollReveal>

                <div className="exp-scroll-row">
                    {experience.map((job, i) => {
                        const isExpanded = expandedIdx === i;
                        const bulletsToShow = isExpanded ? job.bullets : job.bullets.slice(0, PREVIEW_COUNT);
                        const hasMore = job.bullets.length > PREVIEW_COUNT;

                        return (
                            <ScrollReveal key={i} delay={i * 100}>
                                <div className={`glass-card exp-card${job.current ? ' exp-current' : ''}`}>
                                    <div className="exp-card-top">
                                        <span className="exp-period">{job.period}</span>
                                        {job.current && <span className="exp-badge-current">Current</span>}
                                    </div>
                                    <h3 className="exp-role">{job.role}</h3>
                                    <p className="exp-company">{job.company}</p>
                                    <p className="exp-location"><FaMapMarkerAlt /> {job.location}</p>
                                    <ul className="exp-bullets">
                                        {bulletsToShow.map((b, j) => <li key={j}>{b}</li>)}
                                    </ul>
                                    {hasMore && (
                                        <button className="expand-btn" onClick={() => toggle(i)}>
                                            {isExpanded ? <><FaChevronUp /> Show Less</> : <><FaChevronDown /> +{job.bullets.length - PREVIEW_COUNT} More</>}
                                        </button>
                                    )}
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
