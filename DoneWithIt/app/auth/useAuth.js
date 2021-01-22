import jwtDecode from 'jwt-decode';
import { useContext } from 'react';
import AuthContext from './context';
import storage from './storage';

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logOut = () => {
    setUser(null);
    storage.removeToken();
  };

  const logIn = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
  };
  return { user, logOut, logIn };
};
