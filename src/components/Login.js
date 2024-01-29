import React from 'react';
import './login.css';
import { FaUser,FaLock  } from "react-icons/fa";

export function LoginForm() {
  return (
    <div className="back">
    <div className="wrapper">
        <from action="">
            <h1>Connectez-vous</h1>
            <div className="input-box">       
                <input
                    type="email"
                    placeholder="Email"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <FaUser className="icon"/>
            </div>
            <div className="input-box">       
                <input
                    type="password"
                    placeholder="Mot de passe"
                    // value={mdp}
                    // onChange={(e) => setMdp(e.target.value)}
                    required
                />
                <FaLock className="icon"/>
            </div>
            <div className="remember-forgot">       
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forgot password</a>
            </div>
            <button type="submit">Se connecter</button>
            <div className="register-link">
                <p>Don't have an account? <a href="#">Register</a></p>
            </div>
        </from>
    </div>
    </div>
    )
}

export default LoginForm;