import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 220px;
  background-color: #edf6f9;
`;

export const Bottom = styled.div`
  position: fixed;

  width: 100%;
  height: 40px;
  background-color: pink;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #edf6f9;
  div {
    display: flex;
    align-items: center;
  }
  h2 {
    padding: 0;
    margin-left: 50px;
  }
`;

export const SignOutButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.red};
  border: none;
  border-radius: 20px;
  color: white;
  padding: 4px;
  font-weight: bold;
  height: 30px;
  text-transform: uppercase;
  margin-right: 20px;
`;

export const StyledLink = styled(NavLink).attrs({
  activeClassName: 'active-link',
})`
  text-decoration: none;
  color: black;
  margin: 20px 0;
  width: 150px;
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
