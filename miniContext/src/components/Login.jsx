import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import './Login.css';
const Login = () =>{
    const[userName, setUserName] = useState('');
    const[password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handleUserName = (e) =>{
        setUserName(e.target.value);         
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }

    const hadneleSubmit = (e) =>{
        e.preventDefault();
        setUser({userName, password}); 
        // Storing the data in variable, Which then pass to setUser, Which will update our global context
    }
    return(
        <>
        <div className="login-container">
        <h1>Login</h1>

        <input
            className="in-name"
            type="text"
            value={userName}
            placeholder="Enter the userName ..."
            onChange={handleUserName}

        />

        <input 
           className="in-pass"
           type="text"
           value={password}
           placeholder="Enter the Password..."
           onChange={handlePassword}

        />   
        </div>

        <button className="btn-btn" onClick={hadneleSubmit}>Submit</button>

        </>
    )
}
export default Login;