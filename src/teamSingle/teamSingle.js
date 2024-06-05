import "./teamSingle.css";
import photo from "../images/team/member5.png";
import { GiWorld } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import data from "../team/team_members.json";
import { useState } from "react";
import { OtherSingleCard } from "./otherSingleCard";
import { OtherSingleCardName } from "./otherSingleCardName";

export function TeamSingle() {

    const [show, setShow] = useState(true)
    const handleChange=()=>{
      console.log('clicked');
      setShow(!show)
    }
  return (
    <div className="teamSingle">
      <div className="single-header">
        <h1>
          Professional Single<p>Home / Team Single</p>
        </h1>
      </div>
      <div className="personal-detail">
        <div className="personal-img">
          <img src={photo} alt="player"></img>
        </div>
        <div className="p-d-content">
          <div className="p-d-info">
            <h1>John Smith</h1>
            <p className="job">Designer</p>
            <p className="subcontent">
            John Smith is an esteemed interior designer known for his innovative approach and meticulous attention to detail, crafting bespoke spaces that reflect his clients' unique lifestyles with precision and care.
            </p>
          </div>
          <div className="icons">
            <p>
              <span className="icon">
                <HiOutlineMail />
              </span>
              <a href="mailto: info@yourdomain.com">info@yourdomain.com</a>
            </p>
            <p>
              <span className="icon">
                <BsTelephone />
              </span>
              +1 (378) 400-1234
            </p>
            <p>
              <span className="icon">
                <GiWorld />
              </span>
              <a href="www.yourdomain.com">www.yourdomain.com</a>
            </p>
          </div>
          <div className="single-smedias">
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
        </div>
      </div>
      <div className="biography">
        <div className="bio">
          <h1>Short Biography</h1>
          <p>
          With a focus on creating functional yet aesthetically pleasing spaces, our interior designer brings passion and expertise to each project. Drawing inspiration from various sources, they craft environments that tell unique stories and reflect the personalities of their inhabitants. Their commitment to excellence and collaborative approach ensures that every design exceeds client expectations, leaving a lasting impression on all who experience it.
          </p>
        </div>
        <div className="bio-skill">
          <div className="skill">
            <h3>Simplicity and Functionality</h3>
            <p>
            Embracing simplicity in interior design involves stripping away unnecessary elements to create spaces that are uncluttered and visually appealing. By focusing on clean lines, minimalistic furnishings, and neutral color palettes, simplicity fosters a sense of tranquility and harmony within a space. <br />
            <br />Functionality is paramount in interior design, ensuring that every element serves a purpose and enhances the usability of the space. Designing with functionality in mind involves careful consideration of layout, furniture placement, and storage solutions to optimize usability and flow. By prioritizing functionality, interior designers create spaces that not only look beautiful but also meet the practical needs of their occupants.
            </p>
          </div>
          <div className="questions">
            <h3>Question and Answer</h3>
            <p>For inquiries or questions, feel free to reach out to me using the contact information provided below.</p>
          </div>
        </div>
      </div>
      
      <div className="single-contact">
        <h1>Contact Me</h1>
        <div className="nameEmail">
            <input name="fulname" type="text" placeholder="Name" required />
            <input name="email" type="text" placeholder="Email" required />
        </div>
        <div className="single-mail-content">
        <textarea name="emailContent" type="text" placeholder="Sent your message" required />
        </div>
        <div className="single-mail-send">
            <div className="saving">
            <input type="checkbox" name="remember-mail"/>
            <label>Save my name, email, and website in this browser for the next time I comment.</label>
            </div>
            <div className="send-button">
            <button>
                Send Now
                <BsArrowRight style={{ marginLeft: "5px" }} color="#CDA274" />
            </button>
            </div>
        </div>
      </div>
    </div>
  );
}
