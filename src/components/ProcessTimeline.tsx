import React from 'react';

interface ProcessStepProps {
  title: string;
  description: string;
  color: string;
}

const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      title: "Apply to Partner",
      description: "Take the first step toward building your own recruitment business.",
      color: "from-[#e040fb] to-[#a64dff]"
    },
    {
      title: "Personal Onboarding",
      description: "Launch with full back-office, branding, and technology infrastructure.",
      color: "from-[#a64dff] to-[#7b68ee]"
    },
    {
      title: "Operate From Day One",
      description: "Start recruiting and billing clients immediately.",
      color: "from-[#7b68ee] to-[#00bfff]"
    },
    {
      title: "Scale Your Desk",
      description: "Grow faster with enterprise-grade tools and partnerships.",
      color: "from-[#00bfff] to-[#4caf50]"
    },
    {
      title: "Build a Lasting Business",
      description: "Establish a brand and operation that's truly yours.",
      color: "from-[#4caf50] to-[#e040fb]"
    }
  ];

  return (
    <section className="py-16">
      <div className="section-container">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Built by Recruiters, </span>
          <span className="text-[#00bfff]">For Recruiters</span>
        </h2>
        <p className="text-center text-lg mb-16 max-w-3xl mx-auto">
          After years of building successful desks, we created the system we wish existed — one that puts recruiters in full control of their brand and future.
        </p>

        <div className="relative">
          {/* Timeline path - would be SVG in production */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#e040fb] via-[#00bfff] to-[#4caf50] transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.color} mb-4 md:mb-8 flex items-center justify-center`}>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <h3 className={`text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${step.color}`}>
                  {step.title}
                </h3>
                <p className="text-center text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex space-x-2">
            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
              ←
            </button>
            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
