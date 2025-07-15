import '../styles/globals.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
    useEffect(() => {
        // Smooth scrolling for anchor links
        const handleClick = (e) => {
            if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
                e.preventDefault();
                const targetId = e.target.getAttribute('href').slice(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    return <Component {...pageProps} />;
}