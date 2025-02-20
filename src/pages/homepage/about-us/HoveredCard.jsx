import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ImageMaker } from "@components/common";

const HoverCard = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const intervalRef = useRef(null);

  // تحميل الصور مسبقًا لتحسين الأداء مع الصور البعيدة
  useEffect(() => {
    images.forEach((url) => {
      const img = new Image();
      img.src = `${url}?t=${new Date().getTime()}`; // منع التخزين المؤقت
    });
  }, [images]);

  const startSlideshow = () => {
    let i = 0;
    intervalRef.current = setInterval(() => {
      setCurrentImage(`${images[i]}?t=${new Date().getTime()}`);
      i = (i + 1) % images.length;
    }, 250); // زيادة مدة العرض لتجنب التقطيع
  };

  const stopSlideshow = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setCurrentImage(images[0]); // العودة للصورة الأولى
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
