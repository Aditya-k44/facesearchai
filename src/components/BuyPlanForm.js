import React, { useState } from 'react';
import '../css/BuyPlanForm.css';

const BuyPlanForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    address: "",
    country: "",
    city: "",
    state: "",
    pincode: "",
    totalAmount: "1000",
  });

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const shipping_address = {
      first_name: formData.fname,
      last_name: formData.lname,
      address: formData.address,
      email: formData.email,
      country: formData.country,
      state: formData.state,
      city: formData.city,
      postcode: formData.pincode,
      phone_number: formData.mobile,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    var options = {
      key: "rzp_test_vv1FCZvuDRF6lQ",
      key_secret: "P4JAUwn4VdE6xDLJ6p2Zy8RQ",
      amount: parseInt(formData.totalAmount) * 100,
      currency: "INR",
      name: "Web Mastery",
      description: "for testing purpose",
      handler: function (response) {
        const paymentId = response.razorpay_payment_id;
        console.log("Payment ID:", paymentId, shipping_address);
        setFormData({
          fname: "",
          lname: "",
          email: "",
          mobile: "",
          address: "",
          country: "",
          city: "",
          state: "",
          pincode: "",
          totalAmount: "1000",
        });
      },
      theme: {
        color: "#07a291db",
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <button onClick={onClose} className="close-button">
          X
        </button>
        <h2 className="heading">Buy Tokens</h2>
        <p className="description">
          Buy AI tokens to use FacesearchAI's advanced features.
        </p>

        <form onSubmit={handleSubmit} className="form">
          <div className="input-group">
            <div className="input-field-container">
              <label htmlFor="fname" className="label">
                First Name
              </label>
              <input
                type="text"
                id="fname"
                name="fname"
                value={formData.fname}
                onChange={handleInputChange}
                className="input"
                required
              />
            </div>
            <div className="input-field-container">
              <label htmlFor="lname" className="label">
                Last Name
              </label>
              <input
                type="text"
                id="lname"
                name="lname"
                value={formData.lname}
                onChange={handleInputChange}
                className="input"
                required
              />
            </div>
          </div>

          <div className="input-group">
            <div className="input-field-container">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="input"
                required
              />
            </div>
            <div className="input-field-container">
              <label htmlFor="mobile" className="label">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                className="input"
                required
              />
            </div>
          </div>

          <div className="input-group">
            <div style={{ flex: 1, width: "100%" }}>
              <label htmlFor="address" className="label">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="textarea"
                required
              />
            </div>
          </div>

          <div className="input-group">
            <div className="input-field-container">
              <label htmlFor="country" className="label">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="input"
                required
              />
            </div>
            <div className="input-field-container">
              <label htmlFor="city" className="label">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="input"
                required
              />
            </div>
            <div className="input-field-container">
              <label htmlFor="state" className="label">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="input"
                required
              />
            </div>
            <div className="input-field-container">
              <label htmlFor="pincode" className="label">
                Pincode
              </label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                className="input"
                required
              />
            </div>
          </div>

          <div className="input-group">
            <div className="input-field-container">
              <label htmlFor="totalAmount" className="label">
                Total Amount (INR)
              </label>
              <input
                type="number"
                id="totalAmount"
                name="totalAmount"
                value={formData.totalAmount}
                onChange={handleInputChange}
                className="input"
                required
                readOnly
              />
            </div>
          </div>

          <button type="submit" className="button">
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BuyPlanForm;
