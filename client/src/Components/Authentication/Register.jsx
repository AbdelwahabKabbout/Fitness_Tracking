const Register = () => {
  return (
    <div>
      <h2>Register Page</h2>
      <form>
        <label className="UsernameLabel">UserName</label>
        <input type="text" className="Input" />

        <label className="EmailLabel">Email</label>
        <input type="email" className="Input" />

        <label className="PasswordLabel">Password</label>
        <input type="password" className="Input" />

        <label className="ConfirmPasswordLabel">Confirm Password</label>
        <input type="password" className="Input" />
      </form>
    </div>
  );
};

export default Register;
