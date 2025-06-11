import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import CareerSection from './components/CareerSection';
import FeaturesSection from './components/FeaturesSection';
import ProcessTimeline from './components/ProcessTimeline';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero 
          title="Join the Top 1% of Recruiters Worldwide in Earnings"
          subtitle="Earn 80% commissions. Build your brand. Work your way."
          description="Built exclusively for recruiters ready to own their future — powered by elite vendor partnerships."
        />
        <Calculator defaultCurrency="USD" />
        <CareerSection />
        <FeaturesSection />
        <ProcessTimeline />
        <FAQSection />
      </main>
      <Footer />
      
      {/* Chat Widget Button */}
      <button 
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#e040fb] text-white flex items-center justify-center shadow-lg hover:bg-[#a64dff] transition-colors z-50"
        aria-label="Select to open the chat widget"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
    </div>
  );
}

export default App;
