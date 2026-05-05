import LoginFormControlled from "./login-form-controlled";
import LoginFormUncontrolled from "./login-form-uncontrolled";

const App = () => {
  return (
    <>
      <h2>Controlled form component:</h2>

      <LoginFormControlled />


      <h3>Uncontolled form component:</h3>
      <LoginFormUncontrolled />
    </>
  );
}

export default App;