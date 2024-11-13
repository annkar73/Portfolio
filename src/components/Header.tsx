import { styled } from "styled-components";
import { colors } from "../helpers/variables";
import { Button } from "./Button";

const HeaderContainer = styled.div`
  background-color: ${colors.dark};
  color: ${colors.white};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  margin-bottom: 50px;
`;

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <h1>Anna Karlsen</h1>
        <Button>Testknapp</Button>
      </HeaderContainer>
    </>
  );
};
