import LoginForm from "./LoginForm";
import logo from "./cloudnatix-logo.png";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Box = styled.div`
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  height: 50vh;
  max-width: 500px;
  min-width: 300px;
  min-height: 300px;
  width: 50vw;
`;

const LogoContainer = styled.div`
  text-align: center;
`;

function App() {
  return (
    <AppContainer>
      <Box>
        <LogoContainer>
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            width={200}
            heigh={200}
          />
        </LogoContainer>

        <LoginForm />
      </Box>
    </AppContainer>
  );
}

export default App;
