import React, { useState } from 'react';
import Sign from './Sign';
import Log from './Log';

const Authn = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-left">
          {isLogin ? <Log/> : <Sign/>}
          <div className="toggle-btn">
            <button onClick={() => setIsLogin(true)} className={isLogin ? 'active' : ''}>Login</button>
            <button onClick={() => setIsLogin(false)} className={!isLogin ? 'active' : ''}>Sign Up</button>
          </div>
        </div>
        <div className="auth-right">
          <h2>How it works?</h2>
          <p>Create your free search profile and let us know your wishes for the perfect apartment.</p>
          <button className="play-btn">▶</button>
        </div>
      </div>
    </div>
  );
};

export default Authn;
