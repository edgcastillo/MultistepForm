import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "../theme/theme";

const GlobalStyles = createGlobalStyle`
  html {
    font-family: 'Roboto';
  }
`;

const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme.colors}>
        <Container>{children}</Container>
      </ThemeProvider>
    </>
  );
};

export default Layout;
