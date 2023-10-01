import { createContext } from "react";

const UserContext = createContext({
    user:{
        name:"ravi",
        email:"ravi@email.com"
    }
});

export default UserContext;