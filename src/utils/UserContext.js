
import { createContext, useContext } from "react";


 const UserContext = createContext({
    userName: "defaultUser"
})

export default UserContext;