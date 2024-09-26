import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    contact_number: '',
    organization: '',
    platform: 'No',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send('service_8xcnj1u', 'template_u14ky4o', formData, 'p2sJ8DeOkPKM7iZtI')
      .then(
        () => {
          setMessage('Your message has been sent successfully!');
        },
        () => {
          setMessage('Your message has been sent successfully!');
        }
      );
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Join the Waitlist</h2>
      <form onSubmit={sendEmail} style={styles.form}>
        <label style={styles.label}>
          Name:
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          Email:
          <input
            type="email"
            name="reply_to"
            value={formData.reply_to}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          Contact:
          <input
            type="text"
            name="contact_number"
            value={formData.contact_number}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          Organization Name:
          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          Are you using any other mental health platform currently?
          <select
            name="platform"
            value={formData.platform}
            onChange={handleChange}
            required
            style={styles.input}
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </label>

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>

      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '2rem',
    fontFamily: "'Roboto', sans-serif",
  },
  heading: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '2rem',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    backgroundColor: '#f9f9f9',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1rem',
    color: '#555',
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '1rem',
    marginTop: '0.5rem',
    fontFamily: "'Roboto', sans-serif",
  },
  button: {
    padding: '12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  message: {
    marginTop: '1rem',
    textAlign: 'center',
    color: '#28a745',
  },
};

// Add the following in the index.html file of your React app
/*
  
*/

export default Form;