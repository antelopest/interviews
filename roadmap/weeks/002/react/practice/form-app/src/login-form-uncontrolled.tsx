import type React from "react";
import { useRef } from "react";

const LoginFormUncontrolled = () => {

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (emailRef.current?.value && passwordRef.current?.value) {
      console.log({
        email: emailRef.current?.value,
        password: passwordRef.current?.value
      });
    }
  }

  return (
    <form onSubmit={submit}>

      <label htmlFor="email">
        <input ref={emailRef} id="email" type="email" name="email" placeholder="email"></input>
      </label>


      <label htmlFor="password">
        <input ref={passwordRef} id="password" type="password" name="password" placeholder="password"></input>
      </label>

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginFormUncontrolled;