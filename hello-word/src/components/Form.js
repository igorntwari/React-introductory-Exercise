import React, { useState } from 'react';

export default function Form() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
      });
    
      function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    
      function handleGreetClick() {
        alert(`Hello ${formData.firstName} ${formData.lastName}!`);
      }

  return (
    <div>
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleGreetClick}>
          Greet Me
        </button>
      </form>
    </div>
  );
}
