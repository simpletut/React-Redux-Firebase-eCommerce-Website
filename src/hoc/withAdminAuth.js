import { useAdminAuth } from './../customHooks';

const WithAdminAuth = props => useAdminAuth(props) && props.children;

export default WithAdminAuth;