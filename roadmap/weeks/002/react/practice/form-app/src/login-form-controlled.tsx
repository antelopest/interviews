import type React from "react";
import { useState } from "react";

type FormState = {
  email: string;
  password: string;
}

const LoginFormControlled = () => {
  const [form, setForm] = useState<FormState>({
    email: "",
    password: ""
  });


  const submit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(form);
  }

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; и

    setForm((prev) => {
      return ({
        ...prev,
        [name]: value,
      });
    });
  }

  return (
    <form onSubmit={submit}>

      <label htmlFor="email">
        <input id="email" type="email" name="email" placeholder="email" value={form.email} onChange={change}></input>
      </label>


      <label htmlFor="password">
        <input id="password" type="password" name="password" placeholder="password" value={form.password} onChange={change}></input>
      </label>

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginFormControlled;