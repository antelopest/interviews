import type React from "react";
import { type FormLogin } from "./form-card";
import SubmitButton from "./submit-button";

type LoginFormProps = {
  form: FormLogin;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
}

const LoginForm = (loginFormProps: LoginFormProps) => {
  const { form, onChange, onSubmit } = loginFormProps;

  return (
    <form onSubmit={onSubmit}>

      <label htmlFor="email">
        <input id="email" type="email" name="email" placeholder="email" value={form.email} onChange={onChange}></input>
      </label>


      <label htmlFor="password">
        <input id="password" type="password" name="password" placeholder="password" value={form.password} onChange={onChange}></input>
      </label>

      <SubmitButton>Login</SubmitButton>
    </form>
  );
}

export default LoginForm;