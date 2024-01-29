import React from 'react';
import './login.css';
import { FaUser,FaLock  } from "react-icons/fa";

export function LoginForm() {
    const [nameUser,setEmail]=useState("");
    const [passUser,setPass] = useState("");
    const history = useHistory();
    
    function saveId(userId) {
        localStorage.setItem('id', userId);
    }
    async function checkPersonne() {
        let item = { nameUser, passUser };
        try {
            let response = await fetch("https://backend-production-b756.up.railway.app/personne/checkPersonne", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item),
            });
            if (response.ok) {
                let responseBody = await response.json();
                if (responseBody === 0) {
                    console.warn('Invalid credentials');
                    alert('Invalid credentials. Please try again.');
                } else {
                    console.log('User ID:', responseBody);
                    saveId(responseBody);
                    history.push('/AppList');
                }
            } else {
                console.warn('Server responded with an error:', response.status);
            }
        } catch (error) {
            console.error('An error occurred during the fetch:', error);
        }
    }
  return (
    <div className="back">
    <div className="wrapper">
        <from action="">
            <h1>Connectez-vous</h1>
            <div className="input-box">       
                <input
                    type="email"
                    placeholder="Nom de l'utilisateur"
                    // value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <FaUser className="icon"/>
            </div>
            <div className="input-box">       
                <input
                    type="password"
                    placeholder="Mot de passe"
                    // value={mdp}
                    onChange={(e) => setPass(e.target.value)}
                    required
                />
                <FaLock className="icon"/>
            </div>
            <div className="remember-forgot">       
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forgot password</a>
            </div>
            <button type="submit" onClick={checkPersonne}>Se connecter</button>
            <div className="register-link">
                <p>Don't have an account? <a href="#">Register</a></p>
            </div>
        </from>
    </div>
    </div>
    )
}

export default LoginForm;