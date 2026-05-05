import FormCard from "./form-card /form-card";
import LoginFormControlled from "./login-form-controlled";
import LoginFormUncontrolled from "./login-form-uncontrolled";

const App = () => {
  return (
    <>
      <h2>Controlled form component:</h2>

      <LoginFormControlled />

      <hr />


      <h3>Uncontolled form component:</h3>
      <LoginFormUncontrolled />

      <hr />

      <h3>Composition</h3>

      <h4>Card</h4>
      <FormCard></FormCard>

      <hr />
    </>
  );
}

export default App;