import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ImageMaker } from "@components/common";

const HoverCard = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(`${images[0]}?v=${Date.now()}`);
  const intervalRef = useRef(null);
  const [, setTick] = useState(0); // A dummy state to trigger re-renders

  useEffect(() => {
    images.forEach((url) => {
      const img = new Image();
      img.src = url; // Preload images
    });
  
    return () => stopSlideshow(); // Cleanup on unmount
  }, [images]); // Ensure this runs when images change
  const startSlideshow = () => {
    console.log("Hovered!");
    if (images.length < 2) return;
  
    let i = 0;
    intervalRef.current = setInterval(() => {
      console.log("Changing image to:", images[i]);
      setCurrentImage(() => images[i]); // Force functional update
      setTick((t) => t + 1); // Force re-render
      i = (i + 1) % images.length;
    }, 250);
  };
  

  const stopSlideshow = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setCurrentImage(images[0]);
  }, [images]);

  return (
    <li
      className="width-4-col sizing-fixed t_width-4-col m_width-2-col"
      onMouseEnter={startSlideshow}
      onMouseLeave={stopSlideshow}
    >
      <div className="d-flex direction-vertical gap-small">
        <Link to="/featured-projects" className="media-wrap _472x630 w-inline-block">
          <ImageMaker src={currentImage} className="media-asset" />
        </Link>
      </div>
    </li>
  );
};

export default HoverCard;
