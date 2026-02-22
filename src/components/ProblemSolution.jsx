import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const ProblemSolution = () => {
    return (
        <section id="solutions" className="section">
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h2 className="title-lg" style={{ marginBottom: '2rem' }}>Stop settling for <span style={{ color: 'var(--graphite)', textDecoration: 'line-through' }}>clunky</span> AI tools.</h2>
                        <p className="subtitle" style={{ marginBottom: '3rem' }}>Traditional AI platforms are bloated, slow, and lack the premium feel your team deserves. We built Aether to fix that.</p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <AlertCircle className="text-graphite" size={24} style={{ opacity: 0.5 }} />
                                <p>Messy interfaces that slow down productivity</p>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <AlertCircle className="text-graphite" size={24} style={{ opacity: 0.5 }} />
                                <p>Inconsistent results and high latency</p>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <AlertCircle className="text-graphite" size={24} style={{ opacity: 0.5 }} />
                                <p>Lack of enterprise-grade security controls</p>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass"
                        style={{ padding: '4rem', borderRadius: '3rem', border: '2px solid var(--primary)', position: 'relative' }}
                    >
                        <div style={{ position: 'absolute', top: '-20px', right: '40px', background: 'var(--primary)', color: 'white', padding: '0.5rem 1.5rem', borderRadius: 'full', fontWeight: 'bold', fontSize: '0.875rem' }}>THE AETHER WAY</div>
                        <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>The Future of Work</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ background: 'var(--primary)', borderRadius: '50%', padding: '4px' }}>
                                    <CheckCircle2 color="white" size={20} />
                                </div>
                                <span style={{ fontWeight: '600' }}>Minimalist, hyper-fast interface</span>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ background: 'var(--primary)', borderRadius: '50%', padding: '4px' }}>
                                    <CheckCircle2 color="white" size={20} />
                                </div>
                                <span style={{ fontWeight: '600' }}>99.9% consistency and low latency</span>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ background: 'var(--primary)', borderRadius: '50%', padding: '4px' }}>
                                    <CheckCircle2 color="white" size={20} />
                                </div>
                                <span style={{ fontWeight: '600' }}>End-to-end military-grade encryption</span>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ background: 'var(--primary)', borderRadius: '50%', padding: '4px' }}>
                                    <CheckCircle2 color="white" size={20} />
                                </div>
                                <span style={{ fontWeight: '600' }}>Custom neural model fine-tuning</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
