import { styled } from "styled-components";
import { colors } from "../helpers/variables";

const HeaderContainer = styled.div`
    background-color: ${colors.dark};
    color: ${colors.white};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
`;

export const Header = () => {
    return (
        <>
          <HeaderContainer>
  <h1>Anna Karlsen</h1>
  <h2>Portfolio</h2>
</HeaderContainer>

        </>
    )
};

