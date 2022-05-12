import { useSelector } from 'react-redux';
import { Link, Container, Nav } from './Navigation.styled';
import { AuthNav } from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { getIsLoggedIn } from 'redux/authSlice';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Nav>
      <Container>
        <Link to="/">Contacts</Link>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </Nav>
  );
};
