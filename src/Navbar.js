import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <div className="nav-left">
      <h1>InstaTweet</h1>
      <div className="nav-login-buttons">
        <Button>Log In</Button>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
}

export default Navbar;