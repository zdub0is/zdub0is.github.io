import Corners from "./Corners";
import '../assets/css/About.css';
import cornerFrame from '../assets/img/corner-frame.png';
function About() {
  return (
    <>
    
      <Corners imageUrl={cornerFrame} alt="corner" corners={[true, false, false, true]} />
      <div className="pirata about-hero">About</div>
      <div className="hook">My name's Zeke, I am an adaptive learner and an even better problem solver.</div>
    </>
  );
}

export default About;