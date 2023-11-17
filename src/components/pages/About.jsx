import Heading from "../UI/Heading";
import Footer from "../UI/Footer";
import image from "../../images/ProfilePic.jpeg"


export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Heading />

      <div className='about-section'>
        <img src={image}></img>
        <p>
          I am a coder. Thats me. I do this.
        </p>
      </div>

      <Footer />
    </div>
  );
}
