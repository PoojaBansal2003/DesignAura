import "./projectDetails.css";
import Table from "react-bootstrap/Table";
import photo from "../images/zoomImg.jpg";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'


export function ProjectDetails() {
  return (
    <div className="projectDetails">
      <div className="pDetails-header"></div>
      <div className="details">
        <div className="d-client-info">
          <Table>
            <tbody>
              <tr>
                <td>Client</td>
                <td>Your client name</td>
              </tr>
              <tr>
                <td>Category</td>
                <td>Interiors</td>
              </tr>
              <tr>
                <td>Tags</td>
                <td>Interior, Home</td>
              </tr>
              <tr>
                <td>Date</td>
                <td>23.02.2023</td>
              </tr>
              <tr>
                <td>Link</td>
                <td>Link example.com</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="d-project-info">
          <h2>Minimal Look Bedrooms</h2>
          <p>
          Minimalist bedrooms epitomize the essence of simplicity and tranquility, offering a serene retreat from the chaos of daily life. Characterized by clean lines, neutral color palettes, and uncluttered spaces, these rooms focus on functionality and form. Furniture is carefully chosen for its utility and aesthetic harmony, often incorporating sleek designs and natural materials. The absence of excess decor allows for an airy, open feel, enhancing the room's calming atmosphere.
            <br />
            <br />
            By emphasizing quality over quantity, minimalist bedrooms create a harmonious environment that promotes relaxation and restful sleep. The minimalist approach encourages the thoughtful selection of each piece, ensuring that everything in the room serves a purpose. This design philosophy not only reduces visual noise but also fosters a sense of peace and order, making minimalist bedrooms the perfect sanctuary for modern living.
          </p>
        </div>
      </div>
      <div className="zoomRoom">
      <InnerImageZoom src={photo} />
      </div>
    </div>
  );
}
