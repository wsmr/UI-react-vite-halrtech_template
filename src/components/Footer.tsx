import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-white hover:text-[#00bfff] transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" className="text-white hover:text-[#00bfff] transition-colors">About Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-white hover:text-[#00bfff] transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="text-white hover:text-[#00bfff] transition-colors">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p>© Your Business Name</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
