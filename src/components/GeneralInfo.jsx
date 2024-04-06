import { useState } from 'react';
import '../styles/GeneralInfo.css';

function GeneralInfo() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [zipCode, setZipCode] = useState('');
  return (
    <form action="">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor="phone">Phone:</label>
      <input
        type="tel"
        id="phone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />
      <label htmlFor="zipCode">Zip Code:</label>
      <input
        type="text"
        id="zipCode"
        value={zipCode}
        onChange={e => setZipCode(e.target.value)}
      />
    </form>
  );
}

export default GeneralInfo;
