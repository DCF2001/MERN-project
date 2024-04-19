import React, { useState } from 'react';

export default function MyForm() {
  // State variables to store form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Here you can handle form submission logic, like sending the data to a server
    console.log('Form submitted');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <div>
      <h2>Contact Us</h2>
      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Name input */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required // Marked as required to ensure user input
          />
        </div>
        {/* Email input */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required // Marked as required to ensure user input
          />
        </div>
        {/* Message input */}
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required // Marked as required to ensure user input
          />
        </div>
        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
