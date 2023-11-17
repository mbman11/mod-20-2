import Heading from "../UI/Heading";
import Footer from "../UI/Footer";
// import Img from "/images/ProfilePic.jpeg"


// export function Img() {
//   return (
//     // <div id="profile-img">
//     // </div>
//     <img ></img>
//   )
// }

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Heading />

      <div className='about-section'>
        <img src="/images/ProfilePic.png"></img>
        <p>
          I am a coder. Thats me. I do this.
        </p>
      </div>

      <Footer />
    </div>
  );
}
