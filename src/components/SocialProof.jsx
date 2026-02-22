import React from 'react';

const SocialProof = () => {
    const logos = ['VELOCITY', 'ORBIT', 'AURORA', 'ZENITH', 'NEXUS', 'PULSE'];

    return (
        <section style={{ padding: '4rem 0', background: 'white', borderY: '1px solid rgba(0,0,0,0.05)' }}>
            <div className="container">
                <p style={{ textAlign: 'center', color: 'var(--graphite)', fontSize: '0.875rem', fontWeight: '600', letterSpacing: '0.1em', marginBottom: '3rem' }}>
                    TRUSTED BY THE WORLD'S MOST INNOVATIVE TEAMS
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '5rem', opacity: 0.5, filter: 'grayscale(100%)' }}>
                    {logos.map(logo => (
                        <span key={logo} style={{ fontSize: '1.5rem', fontWeight: '800', fontStyle: 'italic', letterSpacing: '-0.05em' }}>{logo}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
