import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors, breakpoints } from '../helpers/variables';

const Header = styled.header`
  display: flex;
  flex-direction: row;
  background-color: ${colors.dark};
  color: ${colors.white};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  z-index: 1000; /* Ensure header stays above other content */
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;

  /* Mobile-first: Initially hidden on mobile */
  flex-direction: column;
  display: none; /* Initially hidden on mobile */

  /* Mobile - when menu is open */
  &.menu-open {
    display: flex;
    position: absolute;
    top: 50px; /* Position menu below header */
    left: 0;
    right: 0;
    background-color: ${colors.dark};
    padding: 20px;
    z-index: 999; /* Ensure menu is above content */
    height: auto; /* Ensure menu expands to fit content */
    max-height: 100vh; /* Limit the height to viewport */
    overflow-y: auto; /* Scroll if links overflow */
  }

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row; /* Horizontal layout for tablet and desktop */
    display: flex; /* Always visible on tablet and desktop */
    position: static; /* Reset position for tablet and desktop */
    height: auto;
    overflow: visible;
  }

  @media (min-width: ${breakpoints.desktop}) {
    gap: 30px; /* Larger gap between links on desktop */
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${colors.white};
  text-decoration: none;
  padding: 10px 20px; /* Add some padding for better spacing */

  :hover {
    text-decoration: underline;
  }

  &.active {
    color: ${colors.accent};
  }
`;

const Hamburger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 30px;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%); 

  div {
    width: 25px;
    height: 3px;
    background-color: ${colors.white};
    border-radius: 10px;
  }

  /* Show hamburger only for mobile */
  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Header>
        {/* Hamburger menu */}
        <Hamburger onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </Hamburger>

        {/* Navigation */}
        <Nav className={isMenuOpen ? 'menu-open' : ''}>
          <StyledNavLink to="/">Hem</StyledNavLink>
          <StyledNavLink to="/projects">Projekt</StyledNavLink>
          <StyledNavLink to="/about">Om mig</StyledNavLink>
          <StyledNavLink to="/contact">Kontakt</StyledNavLink>
        </Nav>
      </Header>

      <main>{children}</main>
    </div>
  );
};

export { Layout };
