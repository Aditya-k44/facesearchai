import React, { useState } from 'react';
import Wrapper from '../styles/Wrapper';
import BuyPlanForm from '../components/BuyPlanForm';
import '../css/Token.css';

const Token = () => {
  const [showForm, setShowForm] = useState(false);

  
  const toggleForm = () => {
    setShowForm((prevState) => !prevState);
  };

  
  const handleTokenPurchase = async () => {
    const userDetails = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      totalAmount: 1000,
    };

    try {
      const response = await fetch('http://localhost:5000/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails),
      });

      const data = await response.json();

      if (response.ok) {
        const stripe = window.Stripe('your-publishable-key-here'); // Replace with your Stripe publishable key
        await stripe.redirectToCheckout({ sessionId: data.id });
      } else {
        alert('Error creating payment session!');
      }
    } catch (error) {
      console.error('Error during token purchase:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <Wrapper>
      <div className="token-content">
        <h2 className="token-heading">Buy Tokens</h2>
        <p className="token-description">
          Buy AI tokens to use FacesearchAI's advanced features.
        </p>

        <button onClick={toggleForm} className="token-button">
          Buy Plans
        </button>

        {showForm && <BuyPlanForm onClose={toggleForm} />}

        <button onClick={handleTokenPurchase} className="token-button">
          Proceed to Payment
        </button>
      </div>
    </Wrapper>
  );
};

export default Token;
