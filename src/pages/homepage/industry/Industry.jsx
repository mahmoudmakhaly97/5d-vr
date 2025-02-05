import { Col, Container, Row } from "reactstrap";
import img1 from "@images/industry/img1.png";
import img2 from "@images/industry/img2.png";
import img3 from "@images/industry/img3.png";
import img4 from "@images/industry/img4.png";
import img5 from "@images/industry/img5.png";
import img6 from "@images/industry/img6.png";
import img7 from "@images/industry/img7.png";
import img8 from "@images/industry/img8.png";
import img9 from "@images/industry/img9.png";
import img10 from "@images/industry/img10.png";
import img11 from "@images/industry/img11.png";
import img12 from "@images/industry/img12.png";
const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];
const Industry = () => {
  return (
    <div className="  py-lg-5 bg_section  industry">
      <Container className="py-5">
        <Row className="g-4">
          <Col lg={6}>
            <div className="d-flex flex-column gap-4 content">
              <h2>The industrys favorite mocap system</h2>
              <p className="text-gray">
                World-className indie creators and award-winning studios have
                chosen Rokoko as their mocap tools of choice
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <Row className="g-3 g-lg-5">
              {images.map((img, index) => (
                <Col className="col-6 " sm={4} lg={3} key={index}>
                  <div className="img-container">
                    <img
                      src={img}
                      loading="lazy"
                      width="136.5"
                      className="w-100"
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Industry;
