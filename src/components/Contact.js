import Corners from "./Corners";
import '../assets/css/About.css';
import cornerFrame from '../assets/img/star-corner-frame.png';
import ToHomeArrow from "./ToHomeArrow";

function Contact() {
    return (
        <>
        <Corners imageUrl={cornerFrame} alt="corner" corners={[true, false, false, true]} />
        <ToHomeArrow />
        <div className="pirata contact-hero">Contact</div>
        <div className="contact">
        <p><a href="https://github.com/zdub0is" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github fa-fw" style={{color: "#ffffff"}}></i>zdub0is</a></p>
        <p><a href="https://www.linkedin.com/in/zeke-d-2a15b211a/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin fa-fw" style={{color: "#ffffff"}}></i>Zeke DuBois</a></p>
        <p><a href="https://twitter.com/Zekedubois" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter fa-fw" style={{color: "#ffffff"}}></i>Zekedubois</a></p>
        <p><a href="mailto:az.duboiz@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-envelope fa-fw" style={{color: "#ffffff"}}></i>az.duboiz@gmail.com</a></p>

        
        </div>
        </>
    );
}

export default Contact;

// https://twitter.com/ZekeDubois
// https://www.freecodecamp.org/zdubois
// https://www.linkedin.com/in/zeke-d-2a15b211a/
// https://codepen.io/zdubois