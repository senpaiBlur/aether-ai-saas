import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <ProblemSolution />
        <Features />
        <HowItWorks />
        <UseCases />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
