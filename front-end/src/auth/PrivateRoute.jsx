import { Route, Redirect } from 'react-router-dom';

export const PrivateRoutes = props => {
  const user = null;

  if (!user) return <Redirect to="/login" />

  return <Route {...props} />
}