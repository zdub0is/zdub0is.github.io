import Corners from "./Corners";
import '../assets/css/About.css';
import cornerFrame from '../assets/img/corner-frame.png';
import ToHomeArrow from "./ToHomeArrow";
import { useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate();
  return (
    <>
    
      <Corners imageUrl={cornerFrame} alt="corner" corners={[true, false, false, true]} />
      <ToHomeArrow />
      <div className="pirata about-hero">About</div>
      <div className="hook">My name's Zeke, I am an adaptive learner and an even better problem solver.</div>
      <div className="about-content">
      <p>Ever since I first laid my fingers on a keyboard, I've been captivated by computers and their endless possibilities. Over the years, I've explored, broken, and fixed countless computers, honing my skills and fueling my passion for technology. My journey has taken me through unexpected experiences, from dropping out of college to assist my elders, working in customer service, serving as a Library Aide in corrections, and finally becoming a teaching assistant for the incredible organization, Persevere.</p>
      <br />
      <p>Computers have always come naturally to me, and I've rapidly acquired a diverse skill set extending beyond web development. My expertise includes Python, computer troubleshooting, business writing, spreadsheets, and graphic design. With a natural aptitude for technology and an insatiable curiosity, I have consistently demonstrated my ability to quickly grasp and master new skills, adapting seamlessly to the ever-evolving world of IT.</p>
      <br />
      <p>My enthusiasm for advancements in artificial intelligence, particularly machine learning and large language models, remains undiminished. While I acknowledge the cautionary tales of science fiction, I firmly believe that with proper safety measures and regulations, AI can become an integral part of our everyday lives.</p>
      <br />
      <p>In my work, I derive immense satisfaction from problem-solving. My most fulfilling days involve identifying and fixing issues and implementing preventive measures to avoid future occurrences. I also take great pleasure in refining solutions to make them even more efficient, as I believe that continuous improvement is at the heart of a successful program.</p>
      <br />
      <h2>Experience:</h2>
      <ul>
        <li>Legacy Full Stack Certificate from FreeCodeCamp</li>
        <li>14 years of computer troubleshooting experience</li>
        <li>8 years of computer programming experience</li>
      </ul>
      <br />
      <h2>Skills:</h2>
      <p>JavaScript ⋅ Python ⋅ Customer Service ⋅ Microsoft Office Suite ⋅ Google Suite ⋅ Illustration ⋅ Databases ⋅ Backend Development ⋅ Frontend Development ⋅ Version Control ⋅ Data Analysis</p>
      <br />
      <div className="about-button">Coming Soon...</div>
      <br />
      <p>My hands-on experience and passion for problem-solving make me a valuable asset in the ever-evolving world of technology. If you'd like to connect, discuss potential collaboration, or explore my work further, please feel free to reach out. I look forward to connecting with you!</p>
      <br />
      <div className="about-button" onClick={() => navigate("/contact")}>Contact</div>
      </div>
    </>
  );
}

export default About;