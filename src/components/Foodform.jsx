import React, { useState } from 'react';
import './Food.css';

const CheckboxForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expiry, setExpiry] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if compulsory fields are filled
    

    // Handle form submission based on the selected option
    if (selectedOption === 'option1') {
      if (!itemName || !quantity || (selectedOption === 'option1' && !expiry)) {
        console.log('Please fill in all compulsory fields.');
        return;
      }
      console.log('Option 1 selected. Open a new form with Item Name, Quantity, and Expiring In.');
    } else if (selectedOption === 'option2') {
      console.log('Option 2 selected. Open a new form with Item Name and Quantity.');
      // Add the logic to open the link for option2
      window.location.href = 'https://donate.stripe.com/test_dR62azadK0kcbhm144';
    } else {
      console.log('Selected Option:', selectedOption);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkbox-form">
      <div className="radio-row">
        <label>
          Food
          <input
            type="radio"
            name="options"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={() => handleOptionChange('option1')}
          />
        </label>

        <label>
          Money
          <input
            type="radio"
            name="options"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={() => handleOptionChange('option2')}
          />
        </label>
      </div>

      {selectedOption === 'option1' && (
        <div className="new-form">
          <label>
            Item Name:
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
            />
          </label>

          <label>
            Quantity(kg):
            <input
              placeholder="0"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </label>

          <label>
            Expiring In(hrs):
            <input
              placeholder="0"
              type="number"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              required
            />
          </label>
        </div>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default CheckboxForm;
