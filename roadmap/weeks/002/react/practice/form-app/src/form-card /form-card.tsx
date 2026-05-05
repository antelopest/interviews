import React, { useState } from 'React';

import Card from './card';
import LoginForm from './login-form';

export type FormLogin = {
  email: string;
  password: string;
}

const FormCard = () => {
  const [form, setForm] = useState<FormLogin>({ email: "", password: "" });

  const submit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(form);
  };

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  return (
    <Card title="Login">
      <LoginForm form={form} onChange={change} onSubmit={submit} />
    </Card>
  );
}

export default FormCard;