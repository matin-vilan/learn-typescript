import { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    userContext.setUser({ name: "matin", email: "matin@gmail.com" });
  };
  const handleLogout = () => {
    userContext.setUser(null);
  };
  return (
    <div>
      <button>Login</button>
      <button>Logout</button>
      <div onClick={handleLogin}>User name is: {userContext.user?.name}</div>
      <div onClick={handleLogout}>User email is: {userContext.user?.email}</div>
    </div>
  );
};

export default User;
