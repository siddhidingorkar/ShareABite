import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

// Form component
function Form() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleCheckboxChange = (option) => {
    setSelectedOption(option);
  };



  const handleDonateClick = () => {
    // Validate name and email before proceeding
   

    // Redirect based on the selected option
    switch (selectedOption) {
      case 'food':
        navigate('/food');
        break;
      case 'money':
        window.location.href = 'https://donate.stripe.com/test_dR62azadK0kcbhm144';
        break;
      default:
        // Handle the default case or show an error
        break;
    }
  };


  return (
    <form className="container">
      <div className="Header">
        <h1>Donate Here</h1>
      </div>



      {/* Use the CheckboxGroup component */}
      <div className="input-group">
  {/* Food checkbox */}
  <label>
    <input
      type="checkbox"
      checked={selectedOption === 'food'}
      onChange={() => handleCheckboxChange('food')}
    />
    Food
  </label>

  {/* Money checkbox */}
  <label>
    <input
      type="checkbox"
      checked={selectedOption === 'money'}
      onChange={() => handleCheckboxChange('money')}
    />
    Money
  </label>
</div>


      <div>
        <button type="button" onClick={handleDonateClick}>
          Donate
        </button>
      </div>
    </form>
  );
}

export default Form;
