import "./blogDetails.css";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { BsArrowRight, BsSearch } from "react-icons/bs";
import photo1 from "../images/blogContent1.png";
import photo2 from "../images/blogContent2.png";
import { Link } from "react-router-dom";

export function BlogDetails() {

  const handleChange=(e)=>{
    const pClassList = e.target.parentElement;
    if(e.target.classList.contains("nonselected")){
    for (let i=0; i<pClassList.childNodes.length;i++){
      if(pClassList.childNodes[i].className === ("blogD-tag selected")){
        pClassList.childNodes[i].className = "blogD-tag nonselected"
      }
    }
          e.target.classList.remove("nonselected")
      e.target.classList.add("selected")
    }
    else if(e.target.classList.contains("selected")) {
      for (let i=0; i<pClassList.childNodes.length;i++){
        if(pClassList.childNodes[i].className === ("blogD-tag selected")){
          pClassList.childNodes[i].className = "blogD-tag nonselected"
        }
      }
    }
  }

  return (
    <div className="blogDetails">
      <div className="blogD-header"></div>
      <div className="blogDetailsAll">
        <div className="blog-content">
          <h1>"Blueprints to Brilliance: Crafting Solutions for Building Construction Work"</h1>
          <div className="bc-photo">
            <img src={photo1} alt="blog"></img>
          </div>
          <div className="datePath">
            <p className="date">26 December 2022</p>
            <p className="path">Interior / Design / Home / Decore</p>
          </div>
          <div className="bc-text t1">
            <p>
            From minimalist chic to rustic charm, interior design encompasses a myriad of styles and themes, each with its own unique characteristics and appeal. Whether you're drawn to the sleek lines of modern design or the timeless elegance of traditional decor, there's a style to suit every taste and preference. By selecting the right combination of furniture, accessories, and finishes, designers can bring these styles to life, transforming ordinary spaces into extraordinary retreats.
              <br />
              <br />
              One of the fundamental aspects of interior design is spatial planning. It involves carefully mapping out the layout of a room to optimize its functionality and flow. Whether it's a cozy living room, a spacious kitchen, or a tranquil bedroom, each space requires thoughtful consideration to ensure that it meets the needs of its occupants while maintaining a sense of harmony.
            </p>
          </div>
          <div className="blogD-quotes">
            <div className="blogD-q-content">
              <h1>“</h1>
              <p className="blogD-q-comment">
                The details are not the details. They make the design.
              </p>
            </div>
          </div>

          <div className="bc-text t2">
            <h1>Design sprints are great</h1>
            <p>
            Design sprints offer a structured and efficient approach to problem-solving, condensing the product development process into a focused five-day sprint. By fostering collaboration, accelerating decision-making, and prioritizing user needs, design sprints are invaluable for driving innovation and delivering impactful solutions to market.
              <ul>
                <li>
                Design sprints streamline the ideation process, ensuring that teams explore a wide range of ideas and converge on the most promising concepts efficiently.
                </li>
                <li>
                They prioritize user feedback, enabling teams to validate assumptions early in the process and iterate on solutions iteratively.
                </li>
                <li>
                Design sprints foster cross-functional collaboration, bringing together diverse perspectives and expertise to tackle complex challenges effectively.
                </li>
              </ul>
            </p>
          </div>
          <div className="bc-photo">
            <img src={photo2} alt="blog"></img>
          </div>

          <div className="bc-text t3">
            <p>
            In conclusion, design sprints stand as a beacon of efficiency and innovation in the realm of problem-solving, offering a structured framework that accelerates decision-making, prioritizes user feedback, and fosters collaboration among diverse teams. Embracing the principles of design sprints empowers organizations to drive impactful solutions to market swiftly and effectively, ultimately propelling them toward success in an ever-evolving landscape.
            </p>
          </div>

          <div className="blogD-share">
            <div className="bd-tags">
              <div className="bd-main-tag">
                <p className="tag">Tags</p>
              </div>
              <div className="bd-other-tags">
                <p className="one">Kitchen</p>
                <p className="two">Bedroom</p>
              </div>
            </div>
            <div className="bd-smedias">
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
          <div className="blog-leave-reply">
            <p>Leave a Reply</p>
            <div className="nameEmail">
              <input name="fullname" placeholder="Name" />
              <input name="mail" placeholder="Email" />
            </div>
            <div className="sitePhone">
              <input name="site" placeholder="Subject" />
              <input name="phone" placeholder="Phone" />
            </div>
            <div className="interested">
              <textarea
                name="interested"
                placeholder="Hello, I am interested in.."
              />
            </div>
            <div className="blogD-saving-send">
              <div className="blogD-saving">
                <input type="checkbox" name="remember-mail" />
                <label>
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </div>
              <div className="send">
                <button>
                  Send Now
                  <BsArrowRight style={{ marginLeft: "5px" }} color="#CDA274" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="blogD-sidebar">
          <div className="search-box">
            {/* <input type="search" name="seacrh" placeholder="Search" />
            <button>
              <BsSearch />
            </button> */}
          </div>
          <div className="latest-news">
            <h2>Latest News</h2>
            <div className="news">
              <Link to={`/blog-details`}><p className="news-title">We Focus On Comfort And Gorgeous</p></Link>
              <p className="news-date">28/02/2023</p>
            </div>
            <div className="news">
            <Link to={`/blog-details`}><p className="news-title">We Focus On Comfort And Gorgeous</p></Link>
              <p className="news-date">28/02/2023</p>
            </div>
            <div className="news">
            <Link to={`/blog-details`}><p className="news-title">We Focus On Comfort And Gorgeous</p></Link>
              <p className="news-date">28/02/2023</p>
            </div>
          </div>
          <div className="blogD-categories">
            <h2>Categories</h2>
            <ul>
              <ol>Decoration</ol>
              <ol>Door Windows</ol>
              <ol>Home Land</ol>
              <ol>Roof Installation</ol>
            </ul>
          </div>
          <div className="blogD-alltags">
            <h2>Tags</h2>
            <div className="blogD-tags">
              <p
                className="blogD-tag nonselected"
                  onClick={handleChange}
              >
                Kitchen
              </p>
              <p className="blogD-tag nonselected"   onClick={handleChange}
              >Bedroom</p>
              <p className="blogD-tag nonselected" onClick={handleChange}>Building</p>
              <p className="blogD-tag nonselected" onClick={handleChange}>Architecture</p>
              <p className="blogD-tag nonselected" onClick={handleChange}>Kitchen Planing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
