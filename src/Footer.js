import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          InstaTweet
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
const Footer = () => {
    return ( 
        <>
        <div className="footer-section">
            <div className="footer-top-row">
            <a href="#">about</a>
            <a href="#">help</a>
            <a href="#">policy</a>
            <a href="/">home</a>
            <a href="#">Jobs</a>
            <a href="#">Locations</a>
            <a href="#">donate</a>
            <a href="#">developers</a>
            <a href="#">contacts</a>
            <a href="/signup">sign up</a>
            <a href="/login">log in</a>
            </div>
        </div>
        <Copyright sx={{ mt: 3, mb: 4 }} />
        </>
     );
}
 
export default Footer;