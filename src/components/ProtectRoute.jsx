/* eslint-disable react-hooks/exhaustive-deps */
import { useUserContext } from "../context/UserContext";

const ProtectRoute = ({ children }) => {
  const { localDataLoaded, user } = useUserContext();

  let component = null;
  if (user) {
    component = children;
  } else {
    component = localDataLoaded;
  }

  return component;
};

export default ProtectRoute;
