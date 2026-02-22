import { useState, useEffect } from 'react';
import portfolioData from '../data/portfolioData';

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);

            // Determine active section
            const sections = navItems.map((item) => item.href.slice(1));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.getBoundingClientRect().top <= 150) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
            <div className="container">
                <a href="#" className="nav-logo">
                    {'<'}{portfolioData.personal.name.split(' ')[0]} {'/>'}
                </a>

                <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className={activeSection === item.href.slice(1) ? 'active' : ''}
                                onClick={handleClick}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    className={`hamburger${menuOpen ? ' open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}
