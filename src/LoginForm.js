import { Button, TextInput } from "carbon-components-react";
import styled from "styled-components";

const Padding = styled.div`
  padding: 20px;
`;

const LoginForm = () => {
  return (
    <Padding>
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
    </Padding>
  );
};

export default LoginForm;
