import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Briefcase, Rocket } from 'lucide-react';

const UseCase = ({ icon: Icon, title, description, benefits }) => (
    <div style={{ padding: '2.5rem', background: 'white', borderRadius: '2rem', flex: 1, minWidth: '300px', boxShadow: 'var(--shadow-soft)' }}>
        <Icon size={32} className="text-primary" style={{ marginBottom: '1.5rem' }} />
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h3>
        <p style={{ color: 'var(--graphite)', marginBottom: '1.5rem' }}>{description}</p>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {benefits.map((b, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem', fontWeight: '600' }}>
                    <span style={{ color: 'var(--primary)' }}>•</span> {b}
                </li>
            ))}
        </ul>
    </div>
);

const UseCases = () => {
    return (
        <section className="section">
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', gap: '2rem', flexWrap: 'wrap' }}>
                    <div>
                        <h2 className="title-lg">Designed for <span className="text-gradient">Impact.</span></h2>
                        <p className="subtitle" style={{ marginTop: '1rem' }}>Aether AI adapts to your unique challenges across every department.</p>
                    </div>
                    <button className="px-8 py-4 glass text-charcoal rounded-2xl font-bold hover:bg-off-white transition-all">
                        See all use cases
                    </button>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem' }}>
                    <UseCase
                        icon={Code}
                        title="Engineering"
                        description="Automate code reviews, detect vulnerabilities, and architect complex systems with AI guidance."
                        benefits={['3x faster shipping cycles', '70% reduction in bugs', 'Automated documentation']}
                    />
                    <UseCase
                        icon={Palette}
                        title="Design"
                        description="Generate design systems, iterate on UI patterns, and maintain brand consistency across all products."
                        benefits={['Seamless asset generation', 'Style-guide enforcement', 'Accessibility auditing']}
                    />
                    <UseCase
                        icon={Briefcase}
                        title="Executive"
                        description="Strategic decision support with data-backed insights and automated reporting for stakeholders."
                        benefits={['Real-time health reports', 'Strategic forecasting', 'Competitive analysis']}
                    />
                </div>
            </div>
        </section>
    );
};

export default UseCases;
