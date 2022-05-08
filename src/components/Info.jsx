import idImage from "../images/id-image.jpg";
import mailImg from "../images/mail.png";

function Info() {
  return (
    <div className="info">
      <img className="id-image" src={idImage} alt="Identity Image" />
      <div className="info-text">
        <h1>Laura Smith</h1>
        <p className="profession">Frontend Developer</p>
        <p className="website">
          <small>laurasmith.website</small>
        </p>
        <a href="#" className="email">
          <img src={mailImg} alt="Email" />
          Email
        </a>
      </div>
    </div>
  );
}

export default Info;
