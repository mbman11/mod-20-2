import Heading from "../UI/Heading";
import Footer from "../UI/Footer";


export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Heading />

      <div className='about-section'>
        <img src="/images/ProfilePic.png" id="profile-img"></img>
        <h1>Hi, Im Max Behrmann</h1>
        <p>
          I am a coder. Thats me. I do this.I started out by taking a UX/UI design course.I realized that if I knew how to code effectively I could have a well rounded baseline for a web development career.
        </p>
      </div>

      <div className="button-section">
        <a href="#education">
          <button id="arrow-btn">Arrow</button>
        </a>
      </div>

      <div id="education">
        <h2>Education</h2>
        <div className='about-section'>
          <img src="/images/utah badge.png" id="UXbadge"></img>
          <h3>UX/UI Bootcamp University of Utah</h3>
          <p>
            6 month program. I designed applications with user research and learned the basics of design principles. I really enjoyed this course because I got to interview people and test designs. It was interesting to see the user experience improve when implementing design improvements. Designing for all devices was big part of this course.
          </p>
        </div>
        <div className='about-section'>
          <img src="/images/utah badge.png" id="UXbadge"></img>
          <h3>Full Stack Development Bootcamp <br></br>University of Utah</h3>
          <p>
            6 month program. I designed applications with user research and learned the basics of design principles. I really enjoyed this course because I got to interview people and test designs. It was interesting to see the user experience improve when implementing design improvements. Designing for all devices was big part of this course.
          </p>
        </div>

      <div className="button-section">
        <a href="#portfolio">
          <button id="projects-btn">Projects</button>
        </a>
      </div>
      </div>
    

      <Footer />
    </div>
  );
}
