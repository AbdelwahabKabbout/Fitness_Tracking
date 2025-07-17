import "./Login.css";
const Login = () => {
  return (
    <div>
      <h2>Login Page</h2>
      <form className="LoginForm">
        <label className="usernameLabel">UserName</label>
        <input type="text" className="Input" />
        <label className="passwordLabel">Password</label>
        <input type="password" className="Input" />
        <button type="submit" className="LoginButton">
          Login
        </button>
        <p className="RegisterPrompt">
          Don't have an account? <a href="/">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
