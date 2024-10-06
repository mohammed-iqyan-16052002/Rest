import React from 'react';

const Log = () => {
  return (
    <div className="form-container">
      <h2>Welcome Back, Please login to your account.</h2>
      <button className="social-login fb">Login with Facebook</button>
      <button className="social-login xing">Login with Google</button>
      <div className="divider">- OR -</div>
      <form>
        <label>Email Address</label>
        <input type="email" placeholder="Email" />
        <label>Password</label>
        <input type="password" placeholder="Password" />
        <div className="actions">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="/">Forgot password</a>
        </div>
        <button type="submit" className="primary-btn">Login</button>
      </form>
    </div>
  );
};

export default Log;
