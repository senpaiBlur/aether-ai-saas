import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
    return (
        <section className="section hero-section" style={{ paddingTop: '10rem', paddingBottom: '5rem', background: 'radial-gradient(circle at 50% -20%, var(--secondary), transparent 60%)' }}>
            <div className="container">
                <div className="hero-content" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ display: 'inline-block', padding: '0.5rem 1.5rem', borderRadius: '9999px', background: 'rgba(108, 92, 231, 0.1)', color: 'var(--primary)', fontWeight: '600', fontSize: '0.875rem', marginBottom: '2rem' }}
                    >
                        Introducing Aether 2.0
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="title-xl"
                        style={{ marginBottom: '2rem' }}
                    >
                        Intelligence, <span className="text-gradient">Refined.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="subtitle"
                        style={{ margin: '0 auto 3rem' }}
                    >
                        Experience the next generation of AI productivity. Aether AI combines high-performance models with a premium, minimalist interface designed for elite teams.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}
                    >
                        <button className="px-8 py-4 bg-charcoal text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-primary transition-all shadow-premium active:scale-95">
                            Start Building Free <ArrowRight size={20} />
                        </button>
                        <button className="px-8 py-4 glass text-charcoal rounded-2xl font-bold flex items-center gap-2 hover:bg-off-white transition-all active:scale-95">
                            <Play size={20} fill="currentColor" /> Watch Video
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="hero-image-container"
                    style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}
                >
                    <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '80%', height: '80%', background: 'var(--primary-glow)', filter: 'blur(100px)', borderRadius: '50%', zIndex: -1 }}></div>
                    <img
                        src="/aether_hero_dashboard_1771782379168.png"
                        alt="Aether AI Dashboard"
                        style={{ width: '100%', borderRadius: '2.5rem', boxShadow: '0 50px 100px -20px rgba(0,0,0,0.2), 0 30px 60px -30px rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.5)' }}
                    />
                </motion.div>
            </div>
        </section >
    );
};

export default Hero;
