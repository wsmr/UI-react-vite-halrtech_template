import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="card h-full flex flex-col">
      <div className="flex justify-center mb-6">
        <img src={icon} alt={title} className="w-16 h-16" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#f5f5f0]">
      <div className="section-container">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Everything You Need. </span>
          <span className="text-[#00bfff]">Delivered Day 1.</span>
        </h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          We've built the systems, tech, and brand foundations — you focus on what matters: recruiting, closing, and earning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <FeatureCard 
            icon="/assets/admin.png"
            title="Admin Resources"
            description="Complete back-office support from day one."
          />
          
          <FeatureCard 
            icon="/assets/tech.png"
            title="Technology Stack"
            description="Enterprise-grade tools and platforms."
          />
          
          <FeatureCard 
            icon="/assets/branding.png"
            title="Branding & Marketing"
            description="Professional brand identity from launch."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon="/assets/phone.png"
            title="Client Acquisition"
            description="Tools and support to win clients."
          />
          
          <FeatureCard 
            icon="/assets/rocket.png"
            title="Launch Support"
            description="Seamless business setup and launch."
          />
          
          <FeatureCard 
            icon="/assets/handshake.png"
            title="Stakeholder Partner"
            description="Built by recruiters, for recruiters."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
