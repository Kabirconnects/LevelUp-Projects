import React from "react";
import { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {

  const { user } = useContext(UserContext);

  if(!user) return <div>Plese Login</div>

  return (
     <div>
        welcome {user.userName}
     </div>
  );
}

export default Profile;
