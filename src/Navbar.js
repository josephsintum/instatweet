import { Button } from "@mui/material";
import Link from "../src/Link";
import { css } from "@emotion/css"
const Navbar = () => {
  return (
    <div className="nav-left">
      <h1><a href="/">InstaTweet</a></h1>
      <div className="nav-login-buttons">
        <Link href="/login" noLinkStyle className={css`text-decoration: none`}>
          <Button>Log In</Button>
        </Link>
        <Link href="/signup" noLinkStyle className={css`text-decoration: none`}>
          <Button>Sign Up</Button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;


<Link href="/signup" noLinkStyle className={css`text-decoration: none`}>
  <Button variant="outlined">Sign Up</Button>
</Link>