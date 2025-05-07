import { useState } from "react";
import Input from "./input";

export default function LoginState() {
  const initialValues = { email: "", password: "" };
  const [values, setValues] = useState(initialValues);

  const [isEdited, setIsEdited] = useState({ email: false, password: false });
  const emailIsInValid = isEdited.email && !values.email.includes("@");
  const passwordIsInValid = isEdited.password && values.password.length < 5;

  function handleSubmit(e) {
    e.preventDefault();
    setValues(initialValues);
  }

  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });

    setIsEdited((prev) => ({
      ...prev,
      [name]: false,
    }));
  }

  function handleInputBlur(e) {
    const name = e.target.name;
    setIsEdited((prev) => ({
      ...prev,
      [name]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="header">
        <h1>Login</h1>
        <p>Please enter your login and password!</p>
      </div>
      <Input
        type="email"
        name="email"
        labelText="Email"
        id="email"
        error={emailIsInValid && "Enter email invalid"}
        value={values.email}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      <Input
        type="password"
        name="password"
        labelText="Password"
        id="password"
        error={passwordIsInValid && "Parola 5 karakterden az olamaz."}
        value={values.password}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />

      <div className="mb-3">
        <button className="btn btn-outline-warning me-2">Submit</button>
        <button className="btn btn-outline-light">Reset</button>
      </div>
    </form>
  );
}
