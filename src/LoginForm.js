import { Button, TextInput } from "carbon-components-react";
import "./LoginForm.scss";

const LoginForm = () => {
  return (
    <div className="padding">
      <TextInput
        id="username"
        labelText="Username"
        type="text"
        name="username"
        helperText="Username"
        light={false}
        placeholder="Type username"
      />
      <TextInput.ControlledPasswordInput helperText="Password" />
      <Button type="submit">Submit</Button>
    </div>
  );
};

export default LoginForm;
