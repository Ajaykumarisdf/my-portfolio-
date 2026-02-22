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
        title: "Infra,Cloud & DevOps Engineer",
        tagline:
            "Building scalable cloud infrastructure, high-availability systems, and automated deployments.",
        location: "Chennai, India",
        email: "ajaykumartrainee@gmail.com",
        phone: "+91 8825910458",
        // Add your profile photo to public/images/ and update the path below
        profileImage: "/images/profile.jpeg"
    },

    // ── About Me ───────────────────────────────────────────────
    about: [
        "Cloud & Infrastructure Engineer with hands-on experience in AWS and GCP, specializing in multi-cloud environments",
        "Skilled in VPC architecture, cloud migration, high-availability design, containerized deployments, monitoring, and cloud security.",
        "Passionate about building scalable, secure, and reliable infrastructure with DevOps best practices.",
        "Continuously learning and adapting to new technologies to deliver high-quality solutions."
    ],

    // ── Skills ─────────────────────────────────────────────────
    skills: [
        {
            category: "Cloud Platforms",
            icon: "FaCloud",
            color: "#00d4ff",
            items: [
                "AWS (EC2, VPC, ALB, ASG, EFS, IAM, CloudWatch, CloudTrail, GuardDuty, S3, Route 53, RDS, EKS, ECS, Lambda, CloudFront, Cost Optimization)",
                "GCP (Compute Engine, Firewall, DNS, Load Balancing)",
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
                "Nginx",
                "Portainer",
                "Git & GitHub",
            ],
        },
        {
            category: "Automation / IaC",
            icon: "FaCode",
            color: "#ffaa00",
            items: [
                "Terraform (Infrastructure as Code)",
                "Ansible (Configuration Management)",
                "GitHub Actions (CI/CD)",
                "Jenkins",
                "GitHub Container Registry (GHCR)",
                "Repository & Registry Management",
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
                "Prometheus",
                "Grafana",
                "OpenLens",
                "Nmap",
                "ISO 27001, GDPR, PCI DSS basics",
            ],
        },
    ],

    // ── Experience ─────────────────────────────────────────────
    experience: [
        {
            role: "Cloud & Infrastructure Engineer",
            company: "Pixint",
            location: "Chennai",
            period: "Sep 2025 – Present",
            current: true,
            bullets: [
                "Architected multi-AZ VPC with public/private subnets, NAT Gateways, and security groups for secure production workloads.",
                "Configured AWS ALB + Auto Scaling Groups achieving 99.9% uptime for web applications.",
                "Provisioned infrastructure using Terraform, reducing manual deployment time by 70%.",
                "Automated server configuration and app deployments with Ansible playbooks across multiple EC2 instances.",
                "Set up EFS shared storage for seamless file access across auto-scaled instances.",
                "Implemented monitoring with Prometheus + Grafana dashboards for real-time CPU, memory, and disk metrics.",
                "Managed SSL certificates, DNS records (Route 53), and HTTPS termination at the load balancer.",
                "Performed automated backups and disaster recovery testing for site data.",
                "Optimized AWS costs through right-sizing instances, Reserved Instances analysis, and S3 lifecycle policies.",
            ],
        },
        {
            role: "Infrastructure Engineer (Trainee)",
            company: "Lmnas Cloud Solutions",
            location: "Tranquebar",
            period: "July 2024 – Aug 2025",
            current: false,
            bullets: [
                "Deployed production ERPNext (Frappe) on multi-node K3s clusters in GCP serving 100+ users.",
                "Built custom Docker images and managed container lifecycle with Portainer and CLI tools.",
                "Configured Helm charts with custom values for multi-region Kubernetes scheduling.",
                "Set up NFS persistent volumes with structured directory management for stateful workloads.",
                "Managed external MariaDB and Redis services for database and caching layers.",
                "Implemented readiness/liveness probes and resource limits ensuring zero-downtime deployments.",
                "Applied node affinity and pod anti-affinity rules for region-aware high-availability.",
                "Set up CI/CD pipelines with GitHub Actions for automated Docker builds and registry pushes (GHCR).",
                "Monitored cluster health using OpenLens, kubectl, and custom alerting scripts.",
            ],
        },
        {
            role: "Splunk / SOC Trainee",
            company: "Positka",
            location: "Chennai",
            period: "Dec 2023 – Mar 2024",
            current: false,
            bullets: [
                "Deployed and configured Splunk Enterprise for centralized log ingestion from multiple sources.",
                "Created real-time security dashboards for SOC L1 monitoring and incident triage.",
                "Built correlation rules and alerts for detecting brute force, privilege escalation, and anomalous traffic.",
                "Performed security incident analysis using Splunk SPL queries and Nmap reconnaissance.",
                "Documented SOC runbooks aligned with ISO 27001 and GDPR compliance requirements.",
            ],
        },
    ],

    // ── Projects ───────────────────────────────────────────────
    // image: place screenshots in public/images/ and reference path below
    projects: [
        {
            title: "ERPNext Hosting on Kubernetes (GCP)",
            description:
                "Production-grade ERPNext deployment on K3s with custom Docker images, Helm charts, Traefik ingress, and automated Let's Encrypt SSL.",
            tech: ["K3s", "Docker", "Helm", "Traefik", "Let's Encrypt", "MariaDB", "Redis", "NFS", "GCP"],
            image: null, // e.g. "/images/erpnext-screenshot.png"
            github: "https://github.com/ajaykumarrgn/lens-k3s",
            bullets: [
                "Deployed ERPNext using custom Docker images on K3s, serving 100+ users in production.",
                "Configured Helm charts with custom values for multi-region pod scheduling.",
                "Implemented NFS with structured volume management for persistent data across pods.",
                "Automated SSL with Traefik + Let's Encrypt for zero-touch certificate renewal.",
                "Connected external MariaDB and Redis for high-performance database and caching.",
            ],
            archFlow: ["User", "Traefik", "K3s Ingress", "ERPNext Pods", "MariaDB", "Redis", "NFS Storage"],
        },
        {
            title: "Kubernetes High Availability Web App",
            description:
                "Multi-node K3s cluster on AWS hosting a full-stack web app with automated health checks, load balancing, and monitoring.",
            tech: ["K3s", "AWS EC2", "Nginx", "Node.js", "MySQL", "Traefik", "NFS", "Prometheus"],
            image: "/images/k8s_ha_architecture_diagram_1771154288694.png",
            github: "https://github.com/Ajaykumarisdf/k8s-ha-website",
            bullets: [
                "K3s cluster: 1 Master + 2 Worker nodes on AWS EC2 with automated node recovery.",
                "Frontend: Nginx (3 replicas) with load balancing, Backend: Node.js API (2 replicas).",
                "Database: MySQL 8.0 with Persistent Volume (NFS) and automated backups.",
                "Ingress: Traefik LoadBalancer with SSL termination.",
                "Monitoring: Prometheus metrics server, health probes, and Grafana dashboards.",
            ],
            liveImage: "/images/High-availablity -k8s website.png",
            archFlow: ["Client", "Traefik LB", "Nginx (x3)", "Node.js API", "MySQL", "NFS PV", "Prometheus"],
        },
        {
            title: "AWS ALB + ASG Multi-AZ Architecture",
            description:
                "Production-ready Multi-AZ architecture with ALB, Auto Scaling, and secure VPC for fault-tolerant web hosting.",
            tech: ["AWS ALB", "AWS ASG", "EC2", "VPC", "Route 53", "CloudWatch", "Terraform"],
            image: "/images/aws_alb_asg_architecture_1770884437583.png",
            github: "https://github.com/Ajaykumarisdf/alb-asg-demo",
            bullets: [
                "Designed multi-AZ architecture with public ALB and private EC2 instances for security.",
                "Implemented target-tracking Auto Scaling policies with CloudWatch alarms.",
                "Created secure VPC with public/private subnets, NAT Gateway, and NACLs.",
                "Configured Route 53 DNS with health checks for automatic failover.",
                "Provisioned entire infrastructure using Terraform with modular, reusable code.",
            ],
            archFlow: ["Route 53", "ALB", "ASG", "EC2 (AZ-1)", "EC2 (AZ-2)", "CloudWatch"],
        },
        {
            title: "Infrastructure Automation with Terraform & Ansible",
            description:
                "End-to-end infrastructure provisioning and configuration management pipeline using Terraform for IaC and Ansible for server automation.",
            tech: ["Terraform", "Ansible", "AWS", "GitHub Actions", "Shell Scripting"],
            image: null,
            github: null, // Push learn-terraform-aws-project & learn-ansible-project to GitHub and add the link here
            bullets: [
                "Wrote Terraform modules for VPC, EC2, ALB, ASG, and IAM with reusable variables.",
                "Created Ansible playbooks for automated Nginx, Docker, and monitoring agent setup.",
                "Built GitHub Actions CI/CD pipeline for terraform plan/apply with manual approval gates.",
                "Implemented state management with S3 backend and DynamoDB locking for team collaboration.",
                "Automated security hardening: firewall rules, SSH key rotation, and fail2ban setup.",
            ],
            archFlow: ["GitHub", "Actions CI/CD", "Terraform", "AWS VPC", "Ansible", "EC2 Fleet"],
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
    // To use your personal Credly badge links, just replace the url below
    certifications: [
        {
            name: "AWS reStart Graduate – 2023",
            url: "https://www.credly.com/badges/545a2022-2ebc-48fd-80e5-3eefae7a5517/linked_in_profile",
            brand: "AWS", color: "#ff9900",
        },
        {
            name: "ISC2 Candidate – 2023",
            url: "https://www.credly.com/badges/9638c331-1373-460a-ae75-d8e956fcabe7/linked_in?t=s4zitk",
            brand: "ISC²", color: "#00a651",
        },
        {
            name: "Splunk Engineer – 2023",
            url: "https://app.letsdefend.io/my-rewards/detail/46a34386-60d9-43b1-9b4e-c7d671ca537b",
            brand: "Splunk", color: "#e20082",
        },
        {
            name: "Amazon Cloud Quest Projects",
            url: "https://www.credly.com/badges/ad0a14ff-cb08-49eb-94ac-2d0376274a87/linked_in_profile",
            brand: "AWS", color: "#ff9900",
        },
        {
            name: "HashiCorp Terraform Associate (Learning)",
            url: "https://www.hashicorp.com/certifications/terraform-associate",
            brand: "HCP", color: "#7b42bc",
        },
    ],

    // ── Areas of Interest ──────────────────────────────────────
    interests: [
        "Cloud Infrastructure",
        "DevOps Engineering",
        "Infrastructure as Code (IaC)",
        "Site Reliability Engineering (SRE)",
        "Container Orchestration",
        "CI/CD Pipelines",
        "System Administration",
        "Cloud Security",
        "Monitoring & Observability",
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

    // ── Resume ────────────────────────────────────────────────
    // Place your resume PDF in public/ and set path here
    resumeLink: "/resume.pdf", // e.g. "/Ajaykumar_R_Resume.pdf"

    // ── Typing Animation Titles ───────────────────────────────
    typingTitles: [
        "Cloud Engineer",
        "DevOps Engineer",
        "Infrastructure Engineer",
        "SRE",
        "System Administrator",
    ],

    // ── Tech Stack Marquee ────────────────────────────────────
    techStack: [
        "AWS", "GCP", "Docker", "Kubernetes", "Terraform",
        "Ansible", "Nginx", "Traefik", "Helm", "GitHub Actions",
        "Jenkins", "Prometheus", "Grafana", "Splunk", "Linux",
        "MySQL", "MariaDB", "Redis", "NFS", "Shell Scripting",
    ],

    // ── Blog / Articles (from LinkedIn posts) ─────────────────
    // Add more posts by copying the object format below
    blog: [
        {
            title: "Budget-Friendly High Availability: Full Stack Web App with K3s & EC2",
            summary: "Built and deployed a HA Full-Stack Web App using lightweight K3s and standard EC2 instances — no expensive managed services. K3s cluster with 3 nodes, Nginx frontend (3 replicas), Node.js API (2 replicas), and MySQL on NFS persistent storage.",
            tags: ["DevOps", "Kubernetes", "K3s", "Cost Optimization", "NFS"],
            date: "2025",
            url: "https://www.linkedin.com/posts/ajaykumar-r-5a7951218_devops-kubernetes-k3s-activity-7428764156142559232-wNhM",
        },
        {
            title: "Deploying Auto-Scaling AWS Infrastructure with IaC",
            summary: "Deployed a production-grade, self-healing, auto-scaling cloud infrastructure on AWS — fully automated as Infrastructure as Code. Features ALB, ASG, NAT Gateways, private subnets, and zero-downtime deployments with health checks.",
            tags: ["AWS", "Cloud Computing", "DevOps", "IaC", "Automation"],
            date: "2025",
            url: "https://www.linkedin.com/posts/ajaykumar-r-5a7951218_aws-cloudcomputing-devops-activity-7428078426353491968-6zpB",
        },
    ],
};

export default portfolioData;
