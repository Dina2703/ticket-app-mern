import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { toast } from "react-toastify";

function Login() {
  const [formDate, setFormDate] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formDate;

  const onChange = (e) => {
    setFormDate((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please login to get support</p>
      </section>
      <section>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              id="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
              required
            />
            <input
              className="form-control"
              type="password"
              id="password"
              value={password}
              placeholder="Enter password"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
