import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  background-color: orange;
  padding: 1.2rem 4.8rem;
  background-color: var(--color-grey-0);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
