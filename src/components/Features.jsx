import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BarChart3, Shield, Zap, Globe, Layers } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, image, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="feature-card glass-dark"
        style={{ padding: '3rem', borderRadius: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', transition: 'var(--transition-smooth)', cursor: 'default' }}
    >
        <div className="icon-container" style={{ width: '60px', height: '60px', borderRadius: '1.25rem', background: 'var(--off-white)', display: 'flex', itemsCenter: 'center', justifyContent: 'center', shadow: 'var(--shadow-soft)' }}>
            <Icon className="text-primary" size={28} />
        </div>
        <h3 style={{ fontSize: '1.5rem' }}>{title}</h3>
        <p style={{ color: 'var(--graphite)' }}>{description}</p>
        {image && (
            <img src={image} alt={title} style={{ width: '100%', marginTop: 'auto', borderRadius: '1rem', boxShadow: 'var(--shadow-soft)' }} />
        )}
    </motion.div>
);

const Features = () => {
    return (
        <section id="features" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <h2 className="title-lg" style={{ marginBottom: '1.5rem' }}>Built for the <span className="text-gradient">high-status</span> workflow.</h2>
                    <p className="subtitle" style={{ margin: '0 auto' }}>Everything you need to scale your intelligence without the noise. Minimalist design, maximum power.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
                    <FeatureCard
                        icon={Zap}
                        title="Instant Processing"
                        description="Our neural architecture ensures sub-millisecond response times for even the most complex queries."
                        delay={0.1}
                    />
                    <FeatureCard
                        icon={BarChart3}
                        title="Deep Analytics"
                        description="Visualize your AI usage and performance with beautiful, high-fidelity dashboards."
                        image="/aether_analytics_feature_1771782467443.png"
                        delay={0.2}
                    />
                    <FeatureCard
                        icon={Shield}
                        title="Enterprise Security"
                        description="Bank-grade encryption and private data handling. Your data stays yours, always."
                        delay={0.3}
                    />
                    <FeatureCard
                        icon={Globe}
                        title="Seamless Integration"
                        description="Connect Aether to your entire stack with over 200+ native integrations and a powerful API."
                        image="/aether_integration_feature_1771782411362.png"
                        delay={0.4}
                    />
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
        .feature-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.8);
          box-shadow: var(--shadow-premium);
        }
        .icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
        }
      `}} />
        </section>
    );
};

export default Features;
