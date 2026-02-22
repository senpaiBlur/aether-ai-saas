import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PriceCard = ({ tier, price, features, popular, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className={`pricing-card ${popular ? 'popular' : ''}`}
        style={{
            flex: 1,
            minWidth: '300px',
            padding: '3.5rem',
            borderRadius: '2.5rem',
            background: popular ? 'var(--charcoal)' : 'white',
            color: popular ? 'white' : 'var(--charcoal)',
            position: 'relative',
            boxShadow: 'var(--shadow-premium)',
            border: popular ? 'none' : '1px solid rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
        }}
    >
        {popular && (
            <div style={{ position: 'absolute', top: '24px', right: '40px', background: 'var(--primary)', color: 'white', padding: '0.4rem 1.2rem', borderRadius: 'full', fontSize: '0.75rem', fontWeight: 'bold' }}>
                MOST POPULAR
            </div>
        )}
        <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>{tier}</h3>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                <span style={{ fontSize: '3.5rem', fontWeight: '800' }}>{price}</span>
                <span style={{ opacity: 0.6 }}>/month</span>
            </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {features.map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <Check size={20} className={popular ? 'text-lavender' : 'text-primary'} />
                    <span style={{ opacity: 0.8 }}>{f}</span>
                </div>
            ))}
        </div>

        <button className={`w-full py-4 rounded-2xl font-bold transition-all active:scale-95 ${popular ? 'bg-primary text-white hover:bg-lavender' : 'bg-charcoal text-white hover:bg-primary'}`} style={{ marginTop: 'auto' }}>
            Get Started
        </button>
    </motion.div>
);

const Pricing = () => {
    return (
        <section id="pricing" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <h2 className="title-lg" style={{ marginBottom: '1.5rem' }}>Premium Plans for <span className="text-gradient">Premium Teams.</span></h2>
                    <p className="subtitle" style={{ margin: '0 auto' }}>Choose the tier that matches your ambition. Scale seamlessly as you grow.</p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', maxWidth: '1100px', margin: '0 auto' }}>
                    <PriceCard
                        tier="Starter"
                        price="$49"
                        features={['5 Users included', 'Standard neural models', 'Basic analytics', 'Community support', '20GB storage']}
                        delay={0.1}
                    />
                    <PriceCard
                        tier="Professional"
                        price="$149"
                        features={['Unlimited Users', 'Advanced neural models', 'Real-time analytics', 'Priority support', '200GB storage', 'API Access']}
                        popular
                        delay={0.2}
                    />
                    <PriceCard
                        tier="Enterprise"
                        price="$499"
                        features={['Custom deployments', 'Fine-tuned models', 'Custom dashboards', 'Dedicated success manager', 'Unlimited storage', 'White-labeling']}
                        delay={0.3}
                    />
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
        .pricing-card.popular {
          transform: scale(1.05);
          z-index: 2;
        }
        @media (max-width: 768px) {
          .pricing-card.popular {
            transform: scale(1);
          }
        }
        .text-lavender { color: var(--lavender); }
        .text-primary { color: var(--primary); }
      `}} />
        </section>
    );
};

export default Pricing;
