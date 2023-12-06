import React, { useState } from 'react';
import './Food.css';
import { useNavigate } from 'react-router-dom';

const CheckboxForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [category, setCategory] = useState('cooked');
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expiry, setExpiry] = useState('');
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [address, setAddress] = useState({
    State:'',
    city: '',
    zipcode: '',
    streetName: '',
    colonyName: '',
    flatNumber: '',
    apartmentName: '',
  });

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  

  const handleFoodFormSubmit = (event) => {
    event.preventDefault();

    // Check if compulsory fields are filled

    // Handle form submission based on the selected option
    if (selectedOption === 'option1') {
      if (!category || !itemName || !quantity || !expiry) {
        console.log('Please fill in all compulsory fields.');
        return;
      }
      console.log('Option 1 selected. Open the address form.');
      setShowAddressForm(true);
    } else if (selectedOption === 'option2') {
      window.location.href = 'https://donate.stripe.com/test_dR62azadK0kcbhm144';
    } else {
      console.log('Selected Option:', selectedOption);
    }
  };
  const navigate = useNavigate();
  const handleAddressFormSubmit = (event) => {
    event.preventDefault();
  
    // Check if compulsory fields are filled in the address form
    if (!address.city || !address.zipcode || !address.area) {
      console.log('Please fill in all compulsory address fields.');
      return;
    }
  
    // Handle address form submission logic
    console.log('Address Form Submitted:', address);
  
    // You can proceed with further handling or submission logic.
  
    // Redirect to the pickup confirmation page
    navigate('/pickup');
    // Reset the state, hide the forms
    setAddress({
      State:'',
      city: '',
      zipcode: '',
      area: '',
      colony: '',
      flatNumber: '',
      apartment: '',
    });
    setShowAddressForm(false);
  };
  const getCityOptions = () => {
    switch (address.state) {
      case 'Gujrat':
        return ['Ahmedabad', 'Surat'];
      case 'Haryana':
        return ['Panipat', 'Rohtak'];
      case 'Maharashtra':
        return ['Mumbai', 'Pune'];
      default:
        return [];
    }
  };

  return (
    <div>
      {!showAddressForm && (
        <form onSubmit={handleFoodFormSubmit} className="checkbox-form">
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
            Category :

            <select
              value= {category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="raw">Raw</option>
              <option value="cooked">Cooked</option>
            </select>
          </label>
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
      )}

{showAddressForm && (
  <div
    style={{
      position: 'fixed',
      marginTop: '12%',
      left: '50%',
      marginBottom: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '20px',
      width: '600px', // Increase width
      background: '#fff',
      opacity: '0.9',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '5px',
      color: '#000', // Set text color to black
    }}
  >
    <form onSubmit={handleAddressFormSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>Pickup Address</h2>

      {/* State and City in the same row */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label style={{ margin: '10px 0', color: '#000', flex: 1 }}>
          State  :
          <select
            value={address.state}
            onChange={(e) => setAddress((prev) => ({ ...prev, state: e.target.value }))}
            required
          >
            <option value="">Select State</option>
            <option value="Gujrat">Gujrat</option>
            <option value="Haryana">Haryana</option>
            <option value="Maharashtra">Maharashtra</option>
          </select>
        </label>

        <label style={{ margin: '10px 0', color: '#000', flex: 1, marginLeft: '20px' }}>
          City  :
          <select
            value={address.city}
            onChange={(e) => setAddress((prev) => ({ ...prev, city: e.target.value }))}
            required
          >
            <option value="">Select City</option>
            {getCityOptions().map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label style={{ margin: '10px 0', color: '#000' }}>
          Zipcode:
          <input
            type="number"
            pattern="[0-9]{6}"
            title="Zipcode must be 6 numeric characters"
            value={address.zipcode}
            onChange={(e) => setAddress((prev) => ({ ...prev, zipcode: e.target.value }))}
            required
          />
      </label>

      <label style={{ margin: '10px 0', color: '#000' }}>
        Area:
        <input
          type="text"
          value={address.area}
          onChange={(e) => setAddress((prev) => ({ ...prev, area: e.target.value }))}
          required
        />
      </label>

      <label style={{ margin: '10px 0', color: '#000' }}>
        Colony:
        <input
          type="text"
          value={address.colony}
          onChange={(e) => setAddress((prev) => ({ ...prev, colony: e.target.value }))}
        />
      </label>

 <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label style={{ margin: '10px 0', color: '#000', flex: 1 }}>
          Apartment:
          <input
            type="text"
            value={address.apartment}
            onChange={(e) => setAddress((prev) => ({ ...prev, apartment: e.target.value }))}
          />
        </label>

        <label style={{ margin: '10px 0', color: '#000', flex: 1, marginLeft: '20px' }}>
          Flat Number:
          <input
            type="text"
            value={address.flatNumber}
            onChange={(e) => setAddress((prev) => ({ ...prev, flatNumber: e.target.value }))}
          />
        </label>
      </div>

      <button
        type="submit"
        style={{
          background: '#4CAF50',
          color: '#fff',
          padding: '10px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Submit Address
      </button>
    </form>
  </div>
)}


    </div>
  );
  
};

export default CheckboxForm;
