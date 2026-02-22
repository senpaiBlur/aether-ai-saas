import React from 'react';
import { motion } from 'framer-motion';

const Step = ({ number, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.5rem', flex: 1 }}
    >
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--off-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: '800', color: 'var(--primary)', boxShadow: 'var(--shadow-soft)', border: '1px solid rgba(108, 92, 231, 0.2)' }}>
            {number}
        </div>
        <h3 style={{ fontSize: '1.5rem' }}>{title}</h3>
        <p style={{ color: 'var(--graphite)', maxWidth: '280px' }}>{description}</p>
    </motion.div>
);

const HowItWorks = () => {
    return (
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <h2 className="title-lg" style={{ marginBottom: '1.5rem' }}>Simple by <span className="text-gradient">Design.</span></h2>
                    <p className="subtitle" style={{ margin: '0 auto' }}>Getting started with Aether takes less than 5 minutes. No complex training required.</p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', position: 'relative' }}>
                    <div className="hidden md:block" style={{ position: 'absolute', top: '40px', left: '15%', right: '15%', height: '2px', background: 'linear-gradient(to right, transparent, var(--primary), transparent)', opacity: 0.2, zIndex: 0 }}></div>

                    <Step
                        number="01"
                        title="Connect Workspace"
                        description="Sync your existing data sources and tools with one-click integrations."
                        delay={0.1}
                    />
                    <Step
                        number="02"
                        title="Select Model"
                        description="Choose from our suite of specialized high-performance AI models."
                        delay={0.2}
                    />
                    <Step
                        number="03"
                        title="Deploy Intelligence"
                        description="Activate Aether across your entire workflow and watch productivity soar."
                        delay={0.3}
                    />
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
