import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./footer.css";

export function Footer() {
  return (
    <div className="footer">
      <div className="f-info">
        <section className="f-social-medias">
          <div className="f-logo-text">
            <Link style={{ display: "flex" }} to="/">
              <div className="f-logo">
                <img src={logo} alt="logo"></img>
              </div>
              <div className="f-text">
                <p>DreamAura</p>
              </div>
            </Link>
          </div>
          <div className="f-about-text">
            <p>
            DreamAura: Where reality meets dreams, crafting spaces that enchant and inspire.
            </p>
          </div>
          <div className="f-smedia">
            <ul>
              <li>
                <a href="https://www.facebook.com/">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="f-pages">
          <p>Pages</p>
          <ul>
            <li>
              <Link to={`/aboutus`}>About Us</Link>
            </li>
            <li>
              <Link to={`/projects`}>Our Projects</Link>
            </li>
            <li>
              <Link to={`/team`}>Our Team</Link>
            </li>
            <li>
              <Link to={`/contact`}>Contact Us</Link>
            </li>
            <li>
              <Link to={`/services`}>Services</Link>
            </li>
          </ul>
        </section>
        <section className="f-services">
          <p>Services</p>
          <ul>
            <li>
              <Link to={`/serviceSingle`}>Kitchen</Link>
            </li>
            <li>
              <Link to={`/serviceSingle`}>Living Area</Link>
            </li>
            <li>
              <Link to={`/serviceSingle`}>Bathroom</Link>
            </li>
            <li>
              <Link to={`/serviceSingle`}>Dinning Hall</Link>
            </li>
            <li>
              <Link to={`/serviceSingle`}>Bedroom</Link>
            </li>
          </ul>
        </section>
        <section className="f-contact">
    <p>Contact</p>
    <p>1234 Elm Street, Springfield, USA</p>
    <p>
        <a href="mailto:poojabansal1307@gmail.com">poojabansal1307@gmail.com</a>
    </p>
    <p>+(987) 654-3210</p>
</section>

      </div>
      <div className="terms">
        <ul>
          <ol>
            <Link to={`/terms`}>&bull; Terms & Conditions</Link>
          </ol>
          <ol>
            <Link to={`/privacy-policy`}>&bull; Privacy Policy</Link>
          </ol>
          <ol>
            <Link to={`/cookies-policy`}>&bull; Cookies Policy</Link>
          </ol>
          <ol>
            <Link to={`/faq`}>&bull; FAQ</Link>
          </ol>
        </ul>
      </div>
      <div className="f-copyright">
        <p>Copyright © DesignAura | Designed by PoojaBansal</p>
      </div>
    </div>
  );
}
