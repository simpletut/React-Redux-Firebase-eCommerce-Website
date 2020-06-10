
import { useAuth } from './../customHooks';

const WithAuth = props => useAuth(props) && props.children;

export default WithAuth;