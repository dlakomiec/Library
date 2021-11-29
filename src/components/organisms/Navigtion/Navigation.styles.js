import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* position: absolute; */
  position: fixed;
  height: 100vh;
  width: 220px;
  background-color: #edf6f9;
`;

export const StyledLink = styled(NavLink).attrs({
  activeClassName: 'active-link',
})`
  text-decoration: none;
  color: black;
  margin: 20px 0;
  width: 120px;
  &:hover {
    text-decoration: none;
  }
  &:visited {
    color: black;
  }
  &.active-link {
    border-bottom: black 1px solid;
    padding-bottom: 5px;
  }
`;
