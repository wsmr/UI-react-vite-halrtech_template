import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, description }) => {
  return (
    <section className="pt-24 pb-16">
      <div className="section-container">
        <div className="card max-w-4xl mx-auto text-center py-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">{title}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8">
            <span className="gradient-text">{subtitle}</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            {description}
          </p>
          
          <div className="flex justify-center mt-12">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
              <div 
                className="absolute inset-0 rounded-full border-8 border-t-[#a64dff] border-r-[#00bfff] border-b-[#e040fb] border-l-[#4caf50]"
                style={{ 
                  clipPath: 'polygon(0 0, 80% 0, 80% 100%, 0 100%)',
                  transform: 'rotate(-45deg)'
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-5xl font-bold gradient-text">80%</span>
                  <p className="text-sm mt-2">Commission</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
