import Input from "./Input";
import useInput from "../hooks/useInput";

export default function LoginState() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    isEdited: isEmailEdited,
  } = useInput("");

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    isEdited: isPasswordEdited,
  } = useInput("");

  const emailIsInValid = isEmailEdited && !emailValue.includes("@");
  const passwordIsInValid = isPasswordEdited && passwordValue.length < 5;

  function handleSubmit(e) {
    e.preventDefault();
    if (emailIsInValid || passwordIsInValid) return;
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
        value={emailValue}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
      />
      <Input
        type="password"
        name="password"
        labelText="Password"
        id="password"
        error={passwordIsInValid && "Parola 5 karakterden az olamaz."}
        value={passwordValue}
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlur}
      />

      <div className="mb-3">
        <button className="btn btn-outline-warning me-2">Submit</button>
        <button className="btn btn-outline-light">Reset</button>
      </div>
    </form>
  );
}
