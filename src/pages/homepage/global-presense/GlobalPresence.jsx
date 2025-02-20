import { useState, useEffect } from "react";
import { Row, Col, Container } from "reactstrap";
import ImageMaker from "../../../components/common/image-maker/ImageMaker";

import img1 from "@images/global-presense/Earth0001.png";
import img2 from "@images/global-presense/Earth0002.png";
import img3 from "@images/global-presense/Earth0003.png";
import img4 from "@images/global-presense/Earth0004.png";
import img5 from "@images/global-presense/Earth0005.png";
import img6 from "@images/global-presense/Earth0007.png";
import img7 from "@images/global-presense/Earth0007.png";
import img8 from "@images/global-presense/Earth0008.png";
import img9 from "@images/global-presense/Earth0009.png";
import img10 from "@images/global-presense/Earth0010.png";
import img11 from "@images/global-presense/Earth0011.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9 , img10 , img11];

const GlobalPresence = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 200); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <Container className="pt-lg-5 pt-3">
      <Row className="g-4 g-lg-0 pt-lg-5  pt-3 align-item-center">
        <Col lg={6}>
        <ImageMaker src={images[currentImageIndex]}   />

        </Col>

        <Col lg={6}>
          <blockquote className="d-flex align-items-center">
            Our Global Presence : Proudly Collaborating with Clients Around the World
          </blockquote>
          <p className="my-4 text-gary">
            At 5dVR, we bring immersive technology solutions to clients across the globe.
            From the Middle East to international markets, our expertise and innovation
            have made a lasting impact on industries such as education, healthcare,
            entertainment, real estate, and more.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default GlobalPresence;
 