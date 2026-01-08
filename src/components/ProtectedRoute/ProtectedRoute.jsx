import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { getToken } from "../../utils/token";

function ProtectedRoute({ children, anonymous = false }) {
  const { userData, isSignedIn } = useContext(CurrentUserContext);

  const token = getToken();

  const location = useLocation();
  const from = location.state?.from || "/";

  if (token && userData === null && !isSignedIn) {
    return null;
  }

  if (anonymous && isSignedIn) {
    return <Navigate to={from} />;
  }

  if (!anonymous && (!isSignedIn || !token)) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
}

export default ProtectedRoute;
