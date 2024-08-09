import { Link, Outlet, useParams } from "react-router-dom";
import DefaultProfile from "./DefaultProfile";
import Spinach from "./Spinach";
import Popeye from "./Popeye";

const Profile = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <h2><Link to="/">Go Home</Link></h2>
      <hr />
      {name === "spinach" ? (
        <Spinach />
      ) : (
        <DefaultProfile />
      )}
      <h3>The profile visited is above --^</h3>
      <hr />
      <nav>
        <h2><Link to="">Profile page</Link></h2>
        <h2><Link to="popeye">POPEYE LINK TO PROFILE</Link></h2>
        <h2><Link to="spinach">SPINACH LINK TO PROFILE</Link></h2>
      </nav>
    </div>
  );
};

export default Profile;
