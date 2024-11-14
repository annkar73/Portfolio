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
  display: none;

  &.menu-open {
    display: flex;
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    background-color: ${colors.dark};
    padding: 20px;
    z-index: 999;
    height: auto;
    max-height: 100vh;
    overflow-y: auto;
  }

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    display: flex;
    position: static;
    height: auto;
    overflow: visible;
  }

  @media (min-width: ${breakpoints.desktop}) {
    gap: 30px;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${colors.white};
  text-decoration: none;
  padding: 10px 20px;

  &:hover {
    color: ${colors.accentHover};
  }

  &.active {
    color: ${colors.accent};
  }
`;

const Hamburger = styled.button<{ isMenuOpen: boolean }>`
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
  z-index: 1001;

  div {
    width: 25px;
    height: 3px;
    background-color: ${colors.white};
    border-radius: 10px;
    transition: transform 0.3s, opacity 0.3s;
  }

  /* Placera linjerna med mellanrum när menyn är stängd */
  div:nth-child(1) {
    transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(45deg) translate(5px, 11px)' : 'none')};
  }

  div:nth-child(2) {
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '1')};
    margin: 4px 0; /* Skapa mer utrymme mellan linjerna */
  }

  div:nth-child(3) {
    transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(-45deg) translate(5px, -11px)' : 'none')};
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;
const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <Header>
        {/* Hamburger menu */}
        <Hamburger onClick={toggleMenu} isMenuOpen={isMenuOpen}>
          <div></div>
          <div></div>
          <div></div>
        </Hamburger>

        {/* Navigation */}
        <Nav className={isMenuOpen ? 'menu-open' : ''}>
          <StyledNavLink to="/" onClick={closeMenu}>
            Hem
          </StyledNavLink>
          <StyledNavLink to="/projects" onClick={closeMenu}>
            Projekt
          </StyledNavLink>
          <StyledNavLink to="/about" onClick={closeMenu}>
            Om mig
          </StyledNavLink>
          <StyledNavLink to="/contact" onClick={closeMenu}>
            Kontakt
          </StyledNavLink>
        </Nav>
      </Header>

      <main>{children}</main>
    </div>
  );
};

export { Layout };
