import twitterLogo from "../images/twitter.png";
import facebookLogo from "../images/facebook.png";
import instagramLogo from "../images/instagram.png";
import githubLogo from "../images/github.png";

function Footer() {
  return (
    <div className="footer">
      <img src={twitterLogo} alt="Twitter Logo" />
      <img src={facebookLogo} alt="Facebook Logo" />
      <img src={instagramLogo} alt="Instagram Logo" />
      <img src={githubLogo} alt="Github Logo" />
    </div>
  );
}

export default Footer;
