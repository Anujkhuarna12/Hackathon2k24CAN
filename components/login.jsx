import { useState } from "react";
import "./login.css";
function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    // Code to handle login goes here
    props.toggle();
  }

  return (
    <div className="popup">
      <div className="popup-inner">
        <h1>Welcome Back</h1>
        <p>Please login to your account</p>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Password"
              required
            />
          </div>

          <button type="submit">Login</button>
        </form>

        <div className="bottom-text">
          <p>
            Don't have an account? <a href="#">Sign Up</a>
          </p>
          <p>
            <a href="#">Forgot password?</a>
          </p>
        </div>
        <button onClick={props.toggle}>Close</button>
      </div>
    </div>
  );
}
export default Login;
