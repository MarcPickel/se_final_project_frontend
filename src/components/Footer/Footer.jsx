import "./Footer.css";

import logo from "../../assets/msfr__logo_big.svg";
import linkedin from "../../assets/linkedin-icon.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__column">
        <div className="footer__logo-row">
          <img
            className="footer__logo"
            src={logo}
            alt="Man's Search For Reading"
          />
          <p className="footer__title">Man's Search For Reading</p>
        </div>
        <p className="footer__address">Sioux Falls, SD</p>
        <p className="footer__email">marcpc@att.net</p>
        <p className="footer__phone">(906) 322-8501</p>
        <div className="footer__social-links">
          <img
            className="footer__linkedin-icon"
            src={linkedin}
            alt="LinkedIn"
          />
          <p className="footer__social-link"></p>
        </div>
      </div>
      <div className="footer__column"></div>
      <div className="footer__column"></div>
      <div className="footer__column"></div>
    </footer>
  );
}

export default Footer;
