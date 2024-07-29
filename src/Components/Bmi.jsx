import React, { useState } from 'react';
import './Bmi.css'; 

function Bmi() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculate = () => {
    const bmiHeight = parseFloat(height) / 100;
    const bmiWeight = parseFloat(weight);
    if (!(bmiHeight > 0 && bmiWeight > 0)) {
      alert("Enter valid measurements");
      return;
    }
    const calculatedBmi = bmiWeight / (bmiHeight * bmiHeight);
    setBmi(calculatedBmi.toFixed(2));
    setMessage(getBmiMessage(calculatedBmi));
  };

  const getBmiMessage = (bmi) => {
    if (bmi < 18.5) return "Patla";
    if (bmi >= 18.5 && bmi < 24.9) return "Bara Baar Hai Tu";
    if (bmi >= 25 && bmi < 29.9) return "Mota";
    if (bmi >= 30) return "Bhai Gym Ja";
    return "";
  };

  return (
    <div className="bmi-container">
      <img 
        src="https://i.pinimg.com/736x/ed/5d/94/ed5d94e6a507b26f6aa7d494488e9f09.jpg" 
        className="bmi-image" 
        alt="BMI Calculator"
      />
      <div className="bmi-content">
        <h1 className="bmi-title">BMI CALCULATOR</h1>
        <label htmlFor="weight">Weight (kg)</label>
        <input 
          type="number" 
          id="weight" 
          className="bmi-input" 
          placeholder="Enter Your Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <label htmlFor="height">Height (cm)</label>
        <input 
          type="number" 
          id="height" 
          className="bmi-input" 
          placeholder="Enter Your Height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button className="bmi-button" onClick={calculate}>Submit</button>
      {bmi && (
        <div className="bmi-result">
          <h2>Your BMI is: {bmi}</h2>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default Bmi;
