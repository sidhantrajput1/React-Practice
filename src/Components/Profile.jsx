import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {

  const { user } = useContext(UserContext);

  if (!user) {
    return <div>Please Login</div>
  }

  return (
    <div>
        <h1>Welcome {user}</h1>
    </div>
  )
}

export default Profile;
