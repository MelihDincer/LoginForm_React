import { useState } from "react";

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
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={values.email}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
        {emailIsInValid && (
          <div className="invalid-feedback d-block">
            Email formatı geçerli değildir.
          </div>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={values.password}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
        {passwordIsInValid && (
          <div className="invalid-feedback d-block">
            Parola 5 karakterden az olamaz.
          </div>
        )}
      </div>
      <div className="mb-3">
        <button className="btn btn-outline-warning me-2">Submit</button>
        <button className="btn btn-outline-light">Reset</button>
      </div>
    </form>
  );
}
