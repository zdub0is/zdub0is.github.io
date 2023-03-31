import React from 'react';
import '../Corners.css';

const CornerFrames = ({ imageUrl, alt, corners }) => (
  <div className="corner-frame-container">
    {corners[0] && <img className="corner-frame top-left" src={imageUrl} alt={alt} />}
    {corners[1] && <img className="corner-frame top-right" src={imageUrl} alt={alt} />}
    {corners[2] && <img className="corner-frame bottom-left" src={imageUrl} alt={alt} />}
    {corners[3] && <img className="corner-frame bottom-right" src={imageUrl} alt={alt} />}
  </div>
);

export default CornerFrames;
