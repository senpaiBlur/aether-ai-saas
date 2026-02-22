import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <section className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{
                        background: 'linear-gradient(135deg, var(--charcoal), #4834D4)',
                        borderRadius: '3.5rem',
                        padding: '6rem 4rem',
                        textAlign: 'center',
                        color: 'white',
                        overflow: 'hidden',
                        position: 'relative',
                        boxShadow: 'var(--shadow-premium)'
                    }}
                >
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 100% 0%, var(--primary), transparent 40%)', opacity: 0.4 }}></div>
                    <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
                        <h2 className="title-lg" style={{ color: 'white', marginBottom: '2rem' }}>Ready to elevate your <span className="text-gradient">intelligence?</span></h2>
                        <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '3rem' }}>Join the next generation of high-performance teams using Aether to redefine what's possible.</p>
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button className="px-10 py-5 bg-white text-charcoal rounded-full font-bold text-lg hover:bg-off-white transition-all shadow-lg flex items-center gap-2">
                                Get Started for Free <ArrowRight size={20} />
                            </button>
                            <button className="px-10 py-5 glass text-white rounded-full font-bold text-lg hover:bg-white hover:text-charcoal transition-all">
                                Book a Demo
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
