import CornerFrames from "./Corners";
import thickCornerFrame from "../assets/thick-fancy-frame.png";
import TarotCarousel from './TarotCarousel';

function Works() {
  return(
    <div>
<CornerFrames imageUrl={thickCornerFrame} alt="Thick Fancy Frame" corners={[true, true, false, false]} />
  <TarotCarousel />
    </div>
  )
}

export default Works;