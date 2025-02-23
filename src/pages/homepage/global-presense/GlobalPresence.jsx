import { Row, Col, Container } from "reactstrap";
import ImageMaker from "../../../components/common/image-maker/ImageMaker";

import img from "../../../assets/images/global-presense/Earth0001.gif";

const GlobalPresence = () => {
  return (
    <Container className="pt-lg-5 pt-3">
      <Row className="g-4 g-lg-0 pt-lg-5  pt-3 align-items-center">
        <Col lg={6}>
          <div className=" ">
            <ImageMaker src={img} style={{ maxWidth: "75%" }} />
          </div>
        </Col>

        <Col lg={6}>
          <blockquote className="d-flex align-items-center">
            Our Global Presence : Proudly Collaborating with Clients Around the
            World
          </blockquote>
          <p className="my-4 text-gary">
            At 5dVR, we bring immersive technology solutions to clients across
            the globe. From the Middle East to international markets, our
            expertise and innovation have made a lasting impact on industries
            such as education, healthcare, entertainment, real estate, and more.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default GlobalPresence;
