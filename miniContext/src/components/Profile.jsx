import { useContext } from "react";
import UserContext from "../context/UserContext";
import './Profile';
const Profile = () =>{

    const { user } = useContext(UserContext);  
    //Using this user state variable we are accesssing the,The data or value .... from userContext
    //Which is set using setUser... function to the global state .. 
    if(!user) return <div className="data">Please Login !.</div>

    return (
        <div className="data">
            Welcome, {user.userName}
        
        </div>
    )
}

export default Profile;