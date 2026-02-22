import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass shadow-sm' : 'py-6 bg-transparent'}`}>
            <div className="container flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-lavender flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-xl">A</span>
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-charcoal">Aether AI</span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <a href="#features" className="text-sm font-semibold hover:text-primary transition-colors">Features</a>
                    <a href="#solutions" className="text-sm font-semibold hover:text-primary transition-colors">Solutions</a>
                    <a href="#pricing" className="text-sm font-semibold hover:text-primary transition-colors">Pricing</a>
                    <a href="#about" className="text-sm font-semibold hover:text-primary transition-colors">About</a>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <button className="px-6 py-2.5 text-sm font-semibold text-charcoal hover:text-primary">Log in</button>
                    <button className="px-6 py-2.5 text-sm font-semibold text-white bg-charcoal rounded-full hover:bg-primary transition-all shadow-md active:scale-95">
                        Get Started
                    </button>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 glass shadow-xl p-6 md:hidden flex flex-col gap-6"
                >
                    <a href="#features" className="text-lg font-semibold" onClick={() => setMobileMenuOpen(false)}>Features</a>
                    <a href="#solutions" className="text-lg font-semibold" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
                    <a href="#pricing" className="text-lg font-semibold" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
                    <button className="w-full py-4 text-center font-bold bg-charcoal text-white rounded-2xl">Get Started</button>
                </motion.div>
            )}

            {/* Inline styles for utility classes since I didn't use Tailwind */}
            <style dangerouslySetInnerHTML={{
                __html: `
        .flex { display: flex; }
        .items-center { align-items: center; }
        .justify-between { justify-content: space-between; }
        .justify-center { justify-content: center; }
        .gap-2 { gap: 0.5rem; }
        .gap-4 { gap: 1rem; }
        .gap-6 { gap: 1.5rem; }
        .gap-8 { gap: 2rem; }
        .flex-col { flex-direction: column; }
        .fixed { position: fixed; }
        .absolute { position: absolute; }
        .top-0 { top: 0; }
        .left-0 { left: 0; }
        .right-0 { right: 0; }
        .top-full { top: 100%; }
        .z-50 { z-index: 50; }
        .w-10 { width: 2.5rem; }
        .h-10 { height: 2.5rem; }
        .w-full { width: 100%; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .py-2.5 { padding-top: 0.625rem; padding-bottom: 0.625rem; }
        .px-8 { padding-left: 2rem; padding-right: 2rem; }
        .p-6 { padding: 1.5rem; }
        .hidden { display: none; }
        @media (min-width: 768px) { .md\\:flex { display: flex; } .md\\:hidden { display: none; } }
        .font-bold { font-weight: 700; }
        .font-semibold { font-weight: 600; }
        .text-sm { font-size: 0.875rem; }
        .text-lg { font-size: 1.125rem; }
        .text-xl { font-size: 1.25rem; }
        .text-2xl { font-size: 1.5rem; }
        .tracking-tight { letter-spacing: -0.025em; }
        .rounded-xl { border-radius: 0.75rem; }
        .rounded-full { border-radius: 9999px; }
        .rounded-2xl { border-radius: 1rem; }
        .bg-transparent { background: transparent; }
        .bg-charcoal { background: var(--charcoal); }
        .text-white { color: #fff; }
        .text-charcoal { color: var(--charcoal); }
        .shadow-sm { box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
        .shadow-md { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
        .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
        .shadow-xl { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); }
        .transition-all { transition-property: all; }
        .duration-300 { transition-duration: 300ms; }
        .hover\\:text-primary:hover { color: var(--primary); }
        .hover\\:bg-primary:hover { background: var(--primary); }
        .active\\:scale-95:active { transform: scale(0.95); }
        .bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--primary), var(--lavender)); }
      `}} />
        </nav>
    );
};

export default Header;
