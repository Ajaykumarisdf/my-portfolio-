import portfolioData from '../data/portfolioData';

export default function TechMarquee() {
    const { techStack = [] } = portfolioData;

    if (!techStack.length) return null;

    // Double the items for seamless infinite scroll
    const items = [...techStack, ...techStack];

    return (
        <div className="marquee-section">
            <div className="marquee-track">
                {items.map((tech, i) => (
                    <span key={i} className="marquee-item">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}
