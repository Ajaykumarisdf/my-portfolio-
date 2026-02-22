// ============================================================
// 📝 PORTFOLIO DATA - Edit this file to update your portfolio!
// ============================================================
// You only need to change values in this file.
// No React or coding knowledge needed.
// After editing, just push to GitHub and Vercel will auto-deploy.
// ============================================================

const portfolioData = {
    // ── Personal Info ──────────────────────────────────────────
    personal: {
        name: "Ajaykumar R",
        title: "Cloud & DevOps Engineer",
        tagline:
            "Building scalable cloud infrastructure, high-availability systems, and automated deployments.",
        location: "Chennai, India",
        email: "ajaykumarpmk@gmail.com",
        phone: "+91 8825910458",
        // Add your profile photo to public/images/ and update the path below
        profileImage: null, // e.g. "/images/profile.jpg"
    },

    // ── About Me ───────────────────────────────────────────────
    about: [
        "I am a Cloud and Infrastructure Engineer with hands-on experience in AWS, Kubernetes (K3s), Docker, and Linux system administration.",
        "I specialize in building highly available systems using Load Balancers, Auto Scaling Groups, and containerized deployments.",
        "I enjoy working on cloud infrastructure, automating deployments, improving system reliability, and optimizing performance.",
        "I am passionate about DevOps, SRE practices, and secure cloud environments.",
    ],

    // ── Skills ─────────────────────────────────────────────────
    // icon: use react-icons name (from https://react-icons.github.io/react-icons/)
    skills: [
        {
            category: "Cloud Platforms",
            icon: "FaCloud",
            color: "#00d4ff",
            items: [
                "AWS (EC2, VPC, ALB, ASG, EFS, IAM, CloudWatch, CloudTrail, GuardDuty, S3)",
                "GCP (Compute Engine, Firewall, DNS)",
            ],
        },
        {
            category: "DevOps & Containers",
            icon: "FaDocker",
            color: "#7b2ff7",
            items: [
                "Docker",
                "Kubernetes (K3s)",
                "Helm",
                "Traefik",
                "Portainer",
                "Git & GitHub",
                "GitHub Actions (CI/CD)",
            ],
        },
        {
            category: "System Administration",
            icon: "FaServer",
            color: "#00e5a0",
            items: [
                "Linux (Ubuntu/Debian)",
                "User & Service Management",
                "Networking (TCP/IP, DNS)",
                "NFS & EFS Management",
                "Backup & Restore Automation",
                "Shell Scripting",
                "SSL & HTTPS Configuration",
                "Storage & Disk Management",
            ],
        },
        {
            category: "Security & Monitoring",
            icon: "FaShieldAlt",
            color: "#ff6b6b",
            items: [
                "Splunk (Log ingestion, Dashboards, Correlation rules)",
                "SOC Monitoring (L1)",
                "Nmap",
                "ISO 27001, GDPR, PCI DSS basics",
            ],
        },
    ],

    // ── Experience ─────────────────────────────────────────────
    experience: [
        {
            role: "Cloud & System Admin",
            company: "Pixint",
            location: "Chennai",
            period: "Sep 2025 – Present",
            current: true,
            bullets: [
                "Configured AWS Load Balancer and Auto Scaling Groups for high availability.",
                "Launched and managed EC2 instances for web hosting.",
                "Configured EFS for shared storage across multiple instances.",
                "Performed backup and restoration of site data.",
                "Managed SSL certificate renewals.",
                "Designed secure VPC architecture.",
                "Performed system updates and performance monitoring.",
            ],
        },
        {
            role: "Infrastructure Trainee",
            company: "Lmnas Cloud Solutions",
            location: "Tranquebar",
            period: "July 2024 – Aug 2025",
            current: false,
            bullets: [
                "Deployed ERPNext (Frappe) on Kubernetes (K3s) clusters in GCP.",
                "Managed Docker-based custom app deployments.",
                "Configured NFS persistent storage.",
                "Used external MariaDB and Redis in Kubernetes.",
                "Implemented readiness and liveness probes.",
                "Applied node affinity for region-based deployments.",
                "Monitored cluster health and optimized performance.",
            ],
        },
        {
            role: "Splunk Trainee",
            company: "Positka",
            location: "Chennai",
            period: "Dec 2023 – Mar 2024",
            current: false,
            bullets: [
                "Assisted in deploying and configuring Splunk.",
                "Created dashboards for security monitoring.",
                "Built correlation rules for alerts.",
                "Supported security incident analysis.",
            ],
        },
    ],

    // ── Projects ───────────────────────────────────────────────
    // image: place screenshots in public/images/ and reference path below
    projects: [
        {
            title: "ERPNext Hosting on Kubernetes (GCP)",
            description:
                "Production-grade ERPNext deployment on K3s with custom Docker images, Helm charts, and automated SSL.",
            tech: ["K3s", "Docker", "Helm", "Traefik", "Let's Encrypt", "MariaDB", "Redis", "NFS"],
            image: null, // e.g. "/images/erpnext-screenshot.png"
            bullets: [
                "Deployed ERPNext using custom Docker images on K3s.",
                "Configured Helm values for multi-region scheduling.",
                "Used NFS with structured volume management.",
                "Secured application using Traefik + Let's Encrypt.",
                "Used external MariaDB and Redis services.",
            ],
        },
        {
            title: "Kubernetes High Availability Web App",
            description:
                "Multi-node K3s cluster hosting a full-stack web application with automated health checks and monitoring.",
            tech: ["K3s", "AWS EC2", "Nginx", "Node.js", "MySQL", "Traefik", "NFS"],
            image: "/images/k8s_ha_architecture_diagram_1771154288694.png",
            bullets: [
                "K3s cluster: 1 Master + 2 Worker nodes on AWS EC2.",
                "Frontend: Nginx (3 replicas), Backend: Node.js API (2 replicas).",
                "Database: MySQL 8.0 with Persistent Volume (NFS).",
                "Ingress: Traefik LoadBalancer.",
                "Monitoring: Metrics server & health probes.",
            ],
            liveImage: "/images/High-availablity -k8s website.png",
        },
        {
            title: "AWS ALB + ASG Deployment",
            description:
                "Multi-AZ highly available architecture with Application Load Balancer and Auto Scaling for fault tolerance.",
            tech: ["AWS ALB", "AWS ASG", "EC2", "VPC", "Multi-AZ"],
            image: "/images/aws_alb_asg_architecture_1770884437583.png",
            bullets: [
                "Created multi-AZ architecture for high availability.",
                "Configured Public ALB and Private EC2 instances.",
                "Implemented Auto Scaling policies.",
                "Designed secure VPC with public and private subnets.",
                "Ensured traffic distribution and fault tolerance.",
            ],
        },
    ],

    // ── Education ──────────────────────────────────────────────
    education: [
        {
            degree: "B.Tech – Information Security and Digital Forensics",
            institution: "Dr. M.G.R Educational and Research Institute (Deemed University)",
            period: "2019 – 2023",
            score: "70%",
        },
    ],

    // ── Certifications ─────────────────────────────────────────
    certifications: [
        "AWS reStart Graduate – 2023",
        "ISC2 Candidate – 2023",
        "Splunk Engineer – 2023",
        "Amazon Cloud Quest Projects",
    ],

    // ── Areas of Interest ──────────────────────────────────────
    interests: [
        "Cloud Infrastructure",
        "DevOps Engineering",
        "Site Reliability Engineering (SRE)",
        "System Administration",
        "Cybersecurity",
    ],

    // ── Social / Profiles ──────────────────────────────────────
    profiles: {
        linkedin: "https://www.linkedin.com/in/ajaykumar-r-5a7951218",
        github: [
            "https://github.com/Ajaykumarisdf",
            "https://github.com/ajaykumarrgn",
        ],
    },

    // ── Languages ──────────────────────────────────────────────
    languages: ["Tamil", "English"],
};

export default portfolioData;
