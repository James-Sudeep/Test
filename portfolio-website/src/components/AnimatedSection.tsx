import React from 'react';
import './animations.css';

interface AnimatedSectionProps {
  title: string;
  children: React.ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ title, children }) => {
  return (
    <section className="animated-section">
      <h2 className="section-title">{title}</h2>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

export default AnimatedSection;