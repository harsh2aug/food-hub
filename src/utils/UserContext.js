import { createContext } from "react";

const UserContext = createContext({
  user: { name: "Default User", email: "default@gmail.com" },
});
UserContext.displayName = "UserContext";
export default UserContext;
