import "./project.css";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { ProjectCard } from "./projectCard";
import { useEffect, useState } from "react";
import projects from "./projects.json";

export function Project() {
  const [data, setData] = useState('');
  const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage, setpostPerPage] = useState(8);

  const  projectsData = projects;

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  const handleChange = (e) => {
    const pClassList = e.target.parentElement;
    if (e.target.classList.contains("notakenCategory")) {
      for (let i = 0; i < pClassList.childNodes.length; i++) {
        if (pClassList.childNodes[i].className === "p-ctg takenCategory") {
          pClassList.childNodes[i].className = "p-ctg notakenCategory";
        }
      }
      e.target.classList.remove("notakenCategory");
      e.target.classList.add("takenCategory");
    } else if (e.target.classList.contains("taken")) {
      for (let i = 0; i < pClassList.childNodes.length; i++) {
        if (pClassList.childNodes[i].className === "p-ctg takenCategory") {
          pClassList.childNodes[i].className = "p-ctg notakenCategory";
        }
      }
    }
  };

  // Dynamically import project images
  const importImages = async () => {
    const images = await Promise.all([
      import("../images/project/project1.jpg"),
      import("../images/project/project2.jpg"),
      import("../images/project/project3.jpg"),
      import("../images/project/project4.jpg"),
      import("../images/project/project5.jpg"),
      import("../images/project/project6.jpg"),
      import("../images/project/project7.jpg"),
      import("../images/project/project8.jpg"),
    ]);
    return images.map(image => image.default);
  };

  const [projectImages, setProjectImages] = useState([]);
  useEffect(() => {
    importImages().then(images => setProjectImages(images));
  }, []);

  return (
    <div className="project">
      <div className="project-header">
        <h1>
          Our Projects<p>Home / Project</p>
        </h1>
      </div>
      <div className="project-categories">
        <ul>
          <ol className="p-ctg notakenCategory" onClick={handleChange}>
            Bedroom
          </ol>
          <ol className="p-ctg notakenCategory" onClick={handleChange}>
            Bathroom
          </ol>
          <ol className="p-ctg notakenCategory" onClick={handleChange}>
            Kitchen
          </ol>
          <ol className="p-ctg notakenCategory" onClick={handleChange}>
            Living Area
          </ol>
        </ul>
      </div>
      <div className="our-projects">
        {projectsData !== undefined && !!projectsData.projects.length 
        && projectsData.projects.map((pro, ind)=>{
          return (
            <ProjectCard props={pro} key={ind} image={projectImages[ind]}/> // Pass the corresponding image
          )
        })}
      </div>
    </div>
  );
}
