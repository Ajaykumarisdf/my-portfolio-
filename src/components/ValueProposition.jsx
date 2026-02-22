import ScrollReveal from './ScrollReveal';
import { FaCloudDownloadAlt, FaRocket, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const values = [
    {
        icon: <FaCloudDownloadAlt />,
        title: 'Reduce Cloud Costs',
        desc: 'Architect cost-optimized infrastructure using right-sizing, spot instances, and IaC automation to cut cloud spend by 30-50%.',
        color: '#06b6d4',
    },
    {
        icon: <FaRocket />,
        title: 'Automate Deployments',
        desc: 'Build zero-downtime CI/CD pipelines with GitHub Actions, Jenkins, and Kubernetes for faster, safer releases.',
        color: '#8b5cf6',
    },
    {
        icon: <FaShieldAlt />,
        title: 'Build HA Systems',
        desc: 'Design highly available, self-healing architectures using ALB, ASG, multi-AZ deployments, and container orchestration.',
        color: '#10b981',
    },
    {
        icon: <FaChartLine />,
        title: 'Monitor & Observe',
        desc: 'Implement full-stack observability with Prometheus, Grafana, Splunk, and custom alerting to catch issues before users do.',
        color: '#f59e0b',
    },
];

export default function ValueProposition() {
    return (
        <section className="section" id="value">
            <div className="container">
                <ScrollReveal>
                    <div className="section-header">
                        <h2 className="section-title">What I Can Do For You</h2>
                        <p className="section-subtitle">
                            Turning infrastructure challenges into scalable, automated solutions
                        </p>
                    </div>
                </ScrollReveal>

                <div className="value-grid">
                    {values.map((v, i) => (
                        <ScrollReveal key={i} delay={i * 100}>
                            <div className="glass-card value-card">
                                <div className="value-icon" style={{ background: `${v.color}12`, color: v.color }}>
                                    {v.icon}
                                </div>
                                <h3 className="value-title">{v.title}</h3>
                                <p className="value-desc">{v.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
