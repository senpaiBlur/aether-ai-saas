import React from 'react';
import { Twitter, Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ padding: '6rem 0 3rem', background: 'white', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '6rem' }}>
                    <div style={{ gridColumn: 'span 2' }}>
                        <div className="flex items-center gap-2" style={{ marginBottom: '1.5rem' }}>
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-lavender flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-xl">A</span>
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-charcoal">Aether AI</span>
                        </div>
                        <p style={{ color: 'var(--graphite)', maxWidth: '300px', fontSize: '0.875rem' }}>
                            Redefining artificial intelligence with a focus on premium design and high-performance workflows.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>Product</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--graphite)', fontSize: '0.875rem' }}>
                            <li><a href="#" className="hover:text-primary">Features</a></li>
                            <li><a href="#" className="hover:text-primary">Integrations</a></li>
                            <li><a href="#" className="hover:text-primary">Enterprise</a></li>
                            <li><a href="#" className="hover:text-primary">Pricing</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>Company</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--graphite)', fontSize: '0.875rem' }}>
                            <li><a href="#" className="hover:text-primary">About Us</a></li>
                            <li><a href="#" className="hover:text-primary">Careers</a></li>
                            <li><a href="#" className="hover:text-primary">Blog</a></li>
                            <li><a href="#" className="hover:text-primary">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>Legal</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--graphite)', fontSize: '0.875rem' }}>
                            <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-primary">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                    <p style={{ color: 'var(--graphite)', fontSize: '0.875rem' }}>
                        © 2026 Aether Technologies Inc. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--graphite)' }}>
                        <a href="#" className="hover:text-primary"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-primary"><Github size={20} /></a>
                        <a href="#" className="hover:text-primary"><Linkedin size={20} /></a>
                        <a href="#" className="hover:text-primary"><Instagram size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
