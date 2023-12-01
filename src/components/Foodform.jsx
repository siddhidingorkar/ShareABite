import React, { useState } from 'react';
import './Food.css'; // Import your CSS file

const CheckboxForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expiry, setExpiry] = useState(''); // Add this line

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission based on the selected option
    if (selectedOption === 'option1') {
      // Open a new form for Option 1
      console.log('Option 1 selected. Open a new form with Item Name, Quantity, and Expiring In.');
    } else if (selectedOption === 'option2') {
      // Open a new form for Option 2
      console.log('Option 2 selected. Open a new form with Item Name and Quantity.');
    } else {
      // Handle other options
      console.log('Selected Option:', selectedOption);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkbox-form">
      <div className="radio-row">
        <label>
          Cooked Food
          <input
            type="radio"
            name="options"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={() => handleOptionChange('option1')}
          />
        </label>

        <label>
          Raw Food
          <input
            type="radio"
            name="options"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={() => handleOptionChange('option2')}
          />
        </label>
      </div>

      {selectedOption && (
        <div className="new-form">
          <label>
            Item Name:
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </label>

          <label>
            Quantity(kg):
            <input placeholder='0'
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </label>

          {selectedOption === 'option1' && (
            <label>
              Expiring In(hrs): 
              <input placeholder='0'
                type="number"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
            </label>
          )}
        </div>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default CheckboxForm;
