import CornerFrames from "./Corners";
import ornateCornerFrame from "../assets/ornate-corner-frame.png";
import bgCircle from "../assets/bg-star-circle.png";
import { Row, Col } from "react-bootstrap";

function Home() {
  const cornerFrameAlt =
    "Decorative Corner Vintage Ornament and Frame from Healltica on Canva";
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
          <br class="d-md-none" /> Du Bois
        </p>
        <div className="hero-line rounded-pill" />
        <p className="pirata home-sub-hero">Your next developer.</p>
      </div>
      <Row className="pirata text-center links">
        <Col xs={12} md={4} className="link-container">
        
          <a href="/works">Works</a>
        </Col>
        <Col xs={12} md={4} className="link-container">
          <a href="/about">About</a>
        </Col>
        <Col xs={12} md={4} className="link-container">
          <a href="/contact">Contact</a>
        </Col>
      </Row>
    </div>
  </div>
</div>

  );
}

export default Home;
