import CornerFrames from "./Corners";
import ornateCornerFrame from "../assets/img/ornate-corner-frame.png";
import bgCircle from "../assets/img/bg-star-circle.png";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const cornerFrameAlt =
    "Decorative Corner Vintage Ornament and Frame from Healltica on Canva";
  const navigate = useNavigate();
  return (
    <div>
  <div className="bg-circle-container">
    <img
      className="bg-circle"
      src={bgCircle}
      alt="Sparkle Star Circle Frame by paulinestockart on Canva"
    />
    <div className="text-container">
      <CornerFrames
        imageUrl={ornateCornerFrame}
        alt={cornerFrameAlt}
        corners={[true, true, true, true]}
      />
      <div className="hero-row">
        <p className="pirata home-hero">
          Zeke
          <br className="d-md-none" /> Du Bois
        </p>
        <div className="hero-line rounded-pill" />
        <p className="pirata home-sub-hero">Your next developer.</p>
      </div>
      <Row className="pirata text-center links">
        <Col xs={12} md={4} className="link-container" onClick={() => navigate("/works")}>
            Works
        </Col>
        <Col xs={12} md={4} className="link-container"  onClick={() => navigate("/about")}>
          About
        </Col>
        <Col xs={12} md={4} className="link-container"  onClick={() => navigate("/contact")}>
          Contact
        </Col>
      </Row>
    </div>
  </div>
</div>

  );
}

export default Home;
