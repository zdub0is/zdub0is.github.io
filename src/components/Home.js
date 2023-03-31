import CornerFrames from "./Corners";
import ornateCornerFrame from '../assets/ornate-corner-frame.png'

function Home() {
    const cornerFrameAlt = 'Decorative Corner Vintage Ornament and Frame from Healltica on Canva'
  return (
    <div>
    <CornerFrames imageUrl={ornateCornerFrame} alt={cornerFrameAlt} corners={[true, true, true, true]} />
      <p className="pirata home-hero">Zeke<br class="d-md-none" /> Du Bois</p>
    </div>
  );
}

export default Home;