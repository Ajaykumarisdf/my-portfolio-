import portfolioData from '../data/portfolioData';

export default function Footer() {
    const { personal, languages } = portfolioData;
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <p>
                    © {year} <a href="#">{personal.name}</a>. Built with ❤️ and React.
                </p>
                <p className="languages">
                    🗣 Languages: {languages.join(' • ')}
                </p>
            </div>
        </footer>
    );
}
