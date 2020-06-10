import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { checkUserIsAdmin } from './../Utils';

const mapState = ({ user }) => ({
  currentUser: user.currentUser
});

const useAdminAuth = props => {
  const { currentUser } = useSelector(mapState);
  const history = useHistory();

  useEffect(() => {
    if (!checkUserIsAdmin(currentUser)) {
      history.push('/login');
    }

  }, [currentUser]);

  return currentUser;
}

export default useAdminAuth;