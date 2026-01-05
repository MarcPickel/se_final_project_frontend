import "./Footer.css";

import logo from "../../assets/msfr__logo_big.svg";
import linkedin from "../../assets/linkedin-icon.svg";

function Footer() {
  function toTop() {
    window.scrollTo(0, 0);
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer__columns">
          <img
            className="footer__logo"
            src={logo}
            alt="Man's Search For Reading"
            onClick={toTop}
          />
          <div className="footer__column">
            <p className="footer__title">Man's Search For Reading</p>
            <p className="footer__address">Sioux Falls, SD</p>
            <p className="footer__email">marcpc@att.net</p>
            <p className="footer__phone">(906) 322-8501</p>
            <div className="footer__social-links">
              <img src={linkedin} alt="LinkedIn" />
              <a
                href="https://www.linkedin.com/in/marc-pickelman"
                target="_blank"
                className="footer__link footer__link_social"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="footer__column">
            <p className="footer__title">Explore SJA</p>
            <a
              href="https://www.stjosephclassicalacademy.org/"
              target="_blank"
              className="footer__link"
            >
              Saint Joseph Academy
            </a>
            <a
              href="https://www.stjosephclassicalacademy.org/montessori.html"
              target="_blank"
              className="footer__link"
            >
              SJA Montesorri
            </a>
            <a
              href="https://www.stjosephclassicalacademy.org/hybrid.html"
              target="_blank"
              className="footer__link"
            >
              SJA K-8 Academy
            </a>
            <a
              href="https://www.stjosephclassicalacademy.org/chesterton.html"
              target="_blank"
              className="footer__link"
            >
              SJA Chesterton Academy
            </a>
            <a
              href="https://www.stjosephclassicalacademy.org/apply-now.html"
              target="_blank"
              className="footer__link"
            >
              SJA Enrollment
            </a>
            <a
              href="https://www.stjosephclassicalacademy.org/parents.html"
              target="_blank"
              className="footer__link"
            >
              SJA Parents
            </a>
            <a
              href="https://www.stjosephclassicalacademy.org/events.html"
              target="_blank"
              className="footer__link"
            >
              SJA Events
            </a>
          </div>
          <div className="footer__column">
            <p className="footer__title">Resources for Men</p>
            <a
              href="https://seascs.net/documents/2017/10/John%20Senior%20The%20Thousand%20Good%20Books%20List.pdf"
              target="_blank"
              className="footer__link"
            >
              John Senior's 1000 Good Books
            </a>
            <a
              href="https://pintswithaquinas.com/"
              target="_blank"
              className="footer__link"
            >
              Pints with Aquinas
            </a>
            <a
              href="https://peterkreeft.com/"
              target="_blank"
              className="footer__link"
            >
              Peter Kreeft
            </a>
            <a
              href="https://anthonyesolen.substack.com/"
              target="_blank"
              className="footer__link"
            >
              Anthony Esolen
            </a>
            <a
              href="https://jpearce.co/"
              target="_blank"
              className="footer__link"
            >
              Joseph Pearce
            </a>
            <a
              href="https://www.youtube.com/@ExCathedraFBIV"
              target="_blank"
              className="footer__link"
            >
              Ex Cathedra
            </a>
            <a
              href="https://championshrine.org/"
              target="_blank"
              className="footer__link"
            >
              Our Lady of Champion
            </a>
          </div>
        </div>
        <p className="footer__copyright">
          © 2025-2026 Marc Pickelman. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
