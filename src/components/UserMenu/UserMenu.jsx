import { useSelector } from 'react-redux';
import { getUsername } from 'redux/authSlice';
import { useLogoutMutation } from 'redux/authAPI';
import defaultAvatar from './default-avatar.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const [logOut] = useLogoutMutation();
  const name = useSelector(getUsername);
  const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Добро пожаловать, {name}</span>
      <button type="button" onClick={() => logOut()}>
        Выйти
      </button>
    </div>
  );
}
