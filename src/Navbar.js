import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <div className="nav-left">
      <h1><a href="/">InstaTweet</a></h1>
      <div className="nav-login-buttons">
        <Button>Log In</Button>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
}

export default Navbar;