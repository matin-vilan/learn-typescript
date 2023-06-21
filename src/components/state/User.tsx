import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({ name: "Vishwas", email: "matin@gmail.com " });
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <div>User name is {user.name} </div>
      <div>User email is {user.email}</div>
    </div>
  );
};
export default LoggedIn;
