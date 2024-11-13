// src/components/Layout.tsx
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../helpers/variables';

const Header = styled.header`
  background-color: ${colors.dark};
  color: ${colors.white};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  margin-bottom: 50px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const StyledNavLink = styled(NavLink)`
  color: ${colors.white};
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }

  &.active {
    color: ${colors.accent}; /* Change this to your preferred active link color */
  }
`;
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header>
        <Nav>
          <StyledNavLink to="/">Hem</StyledNavLink>
          <StyledNavLink to='/projects'>Projekt</StyledNavLink>
          <StyledNavLink to="/about">Om mig</StyledNavLink>
          <StyledNavLink to="/contact">Kontakt</StyledNavLink>
        </Nav>
      </Header>
      <main>{children}</main>
    </div>
  );
};

export { Layout };
