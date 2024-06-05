import "./contact.css";
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { GiWorld } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone, BsArrowRight } from "react-icons/bs";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export function Contact() {
  const [email,setEmail] = useState("");
    const [toName, setToName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    emailjs.sendForm('service_7f5qe7x', 'template_w5zhrfp', e.target, 'qD0OchSQvhfpD4NW8')
      .then((result) => {
        console.log('Email sent successfully:', result);
        alert('Email sent successfully');
      }, (error) => {
        console.error('Error sending email:', error);
        alert('Failed to send email');
      });
  };
  return (
    <div className="contact">
      <div className="contact-header">
        <h1>
          Contact Us<p>Home / Contact</p>
        </h1>
      </div>
      <div className="contact-content">
        <h2>We love meeting new people and helping them.</h2>
        <div className="contact-form">
          <div className="contact-form-info">
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
            <div className="contact-smedias">
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
          <div className="contact-form-fill">
            <form onSubmit={handleSubmit}>
            <div className="nameEmail">
              <input type="text" name="to_name" id = "to_name" placeholder="Name" required />
              <input type="email" name="email" id='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required  />
            </div>

            <div className="subjectPhone">
            <input type="tel" name="phone" placeholder="Phone" />
            </div>
            <div className="interested">
            <textarea name="message" placeholder="Hello, I am interested in.." required></textarea>
            </div>
            <div className="send">
              <button>
                Send Now
                <BsArrowRight style={{ marginLeft: "5px", marginBottom:"-2px" }} color="#CDA274" />
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97236.62360572393!2d49.78474799369314!3d40.394571267599446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBaku!5e0!3m2!1sen!2saz!4v1677357758009!5m2!1sen!2saz"
          title="map"
          style={{
            frameborder: "0",
            allowfullscreen: "",
            ariaHidden: "false",
            tabindex: "0",
            width: "800px",
            height: "350px",
          }}
        ></iframe>
      </div>
    </div>
  );
}

// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';

// export function Contact() {




//   const [email,setEmail] = useState("");



//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(e.target.email.value);
//     emailjs.sendForm('service_7f5qe7x', 'template_w5zhrfp', e.target, 'qD0OchSQvhfpD4NW8')
//       .then((result) => {
//         console.log('Email sent successfully:', result);
//         alert('Email sent successfully');
//       }, (error) => {
//         console.error('Error sending email:', error);
//         alert('Failed to send email');
//       });
//   };

//   return (
//     <div className="contact">
//       <div className="contact-content">
//         <h2>We love meeting new people and helping them.</h2>
//         <form onSubmit={handleSubmit}>
//           <input type="text" name="to_name" id = "to_name" placeholder="Name" required />
//           <input type="email" name="email" id='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required  />
//           <input type="tel" name="phone" placeholder="Phone" />
//           <textarea name="message" placeholder="Hello, I am interested in.." required></textarea>
//           <button type="submit">Send Now</button>
//         </form>
//       </div>
//     </div>
//   );
// }

