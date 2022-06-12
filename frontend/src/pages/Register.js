import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
//hook useSelector to select from our global state(from redux), useDispatch to dispatch our actions, such as 'register'
import { useSelector, useDispatch } from "react-redux";
import { register } from "../features/auth/authSlice";

function Register() {
  const [formDate, setFormDate] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formDate;

  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const onChange = (e) => {
    setFormDate((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              id="name"
              value={name}
              placeholder="Enter your name"
              onChange={onChange}
              required
            />
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
            <input
              className="form-control"
              type="password"
              id="password2"
              value={password2}
              placeholder="Confirm password"
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

export default Register;
