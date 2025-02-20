import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ImageMaker } from "@components/common";

const HoverCard = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const intervalRef = useRef(null);

  useEffect(() => {
    images.forEach((url) => {
      const img = new Image();
      img.src = url; // Preload images
    });
  }, [images]);

  const startSlideshow = () => {
    if (images.length < 2) return; // Prevent unnecessary interval if only one image
    let i = 0;
    intervalRef.current = setInterval(() => {
      setCurrentImage(images[i]);
      i = (i + 1) % images.length;
    }, 250);
  };

  const stopSlideshow = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setCurrentImage(images[0]); 
  };

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
