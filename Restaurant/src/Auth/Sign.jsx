import React from 'react';

const Sign = () => {
  return (
    <div className="form-container">
      <h2>Create a new account</h2>
      <form>
        <label>Username</label>
        <input type="text" placeholder="Username" />
        <label>Email Address</label>
        <input type="email" placeholder="Email" />
        <label>Password</label>
        <input type="password" placeholder="Password" />
        <button type="submit" className="primary-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default Sign;
