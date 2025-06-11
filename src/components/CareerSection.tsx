import React from 'react';

interface CareerOptionProps {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}

const CareerOption: React.FC<CareerOptionProps> = ({ icon, title, subtitle, description }) => {
  return (
    <div className="card h-full flex flex-col">
      <div className="flex justify-center mb-6">
        <img src={icon} alt={title} className="w-16 h-16" />
      </div>
      <h3 className="text-2xl font-bold mb-2">
        <span className="gradient-text">{title}</span>
        {subtitle && <span className="text-[#00bfff]"> {subtitle}</span>}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const CareerSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="section-container">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Your Career at a Crossroads</span>
        </h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          The next 12 months will define your recruiting career. Which path will you choose?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CareerOption 
            icon="/assets/building.png"
            title="Stay Where"
            subtitle="You Are"
            description="Lose another $100,000 this year by staying at 20% commission."
          />
          
          <CareerOption 
            icon="/assets/money.png"
            title="Go Independent"
            subtitle=""
            description="Start from zero — with zero income, zero brand, and all the risk."
          />
          
          <CareerOption 
            icon="/assets/rocket.png"
            title="Partner With"
            subtitle="Us"
            description="Keep 80% commission with instant market credibility."
          />
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
