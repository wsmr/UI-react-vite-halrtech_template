import React, { useState } from 'react';

interface CalculatorProps {
  defaultCurrency: string;
}

const Calculator: React.FC<CalculatorProps> = ({ defaultCurrency }) => {
  const [currency, setCurrency] = useState(defaultCurrency);
  const [fee, setFee] = useState('');
  const [placements, setPlacements] = useState('');
  const [salary, setSalary] = useState('');
  const [commission, setCommission] = useState('');
  const [taxRate, setTaxRate] = useState('');

  const handleCalculate = () => {
    // Calculation logic would go here in a real implementation
    console.log('Calculating with values:', { currency, fee, placements, salary, commission, taxRate });
  };

  return (
    <section className="py-16 bg-[#f5f5f0]">
      <div className="section-container">
        <div className="card max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">
            <span className="gradient-text">Transform Your Recruitment Income</span>
          </h2>
          <p className="text-center text-lg mb-12">
            See how our 80% commission model could transform your earnings potential
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block mb-2 font-medium">🌍 Select Currency</label>
              <select 
                className="input-field"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option value="USD">USD ($) - Corp Tax: 21%</option>
                <option value="GBP">GBP (£) - Corp Tax: 19%</option>
                <option value="EUR">EUR (€) - Corp Tax: 25%</option>
                <option value="AUD">AUD (A$) - Corp Tax: 30%</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">💰 Average Fee Per Placement</label>
              <input 
                type="text" 
                className="input-field"
                placeholder="e.g. 25000"
                value={fee}
                onChange={(e) => setFee(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">🎯 Expected Placements per Year</label>
              <input 
                type="text" 
                className="input-field"
                placeholder="e.g. 12"
                value={placements}
                onChange={(e) => setPlacements(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">💵 Current Base Salary</label>
              <input 
                type="text" 
                className="input-field"
                placeholder="e.g. 50000"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">📊 Current Commission Rate (%)</label>
              <input 
                type="text" 
                className="input-field"
                placeholder="e.g. 20"
                value={commission}
                onChange={(e) => setCommission(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">📈 Personal Tax Rate (%)</label>
              <input 
                type="text" 
                className="input-field"
                placeholder="e.g. 30"
                value={taxRate}
                onChange={(e) => setTaxRate(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-8 text-center">
            <button 
              className="btn-primary"
              onClick={handleCalculate}
            >
              Calculate My Potential
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
