import { Col, Container, Row } from "reactstrap";
import img1 from "@images/services/img1.jpg";
import img2 from "@images/services/img2.webp";
import img3 from "@images/services/img3.webp";
import { ImageMaker, Button } from "@components/common";
import { useState } from "react";

const Services = () => {
  const [selectedImage, setSelectedImage] = useState(2);
  return (
    <div className="bg_section services px-0 ">
      <Container>
        <Row>
          <Col lg={6}>
            <h2 className="mb-3 mb-lg-5">
              Studio grade motion capture, anywhere, for only $2,245
            </h2>
          </Col>
        </Row>
        <Row className="g-3 g-lg-5">
          <Col lg={6}>
            <Row>
              <Col className=" d-flex flex-column gap-3 col-4 col-lg-4   ">
                {[img1, img2, img3].map((item, index) => (
                  <div className="sizing-grow" key={index}>
                    <div
                      className="media-wrap _224x234 t_111x136"
                      onMouseEnter={() => setSelectedImage(index)}
                    >
                      <ImageMaker
                        src={item}
                        className="media-asset"
                        alt="Thumbnail"
                        sizes="(max-width: 479px) 29vw, (max-width: 767px) 31vw, (max-width: 991px) 100vw, 246.66015625px"
                      />
                    </div>
                  </div>
                ))}
              </Col>
              <Col className="col-8 col-lg-8">
                <div className="  t_sizing-grow m_order-first">
                  <div className="media-wrap _472x750 m_327x425">
                    {[img1, img2, img3].map((item, index) => (
                      <ImageMaker
                        key={index}
                        loading="lazy"
                        src={[img1, img2, img3][selectedImage]}
                        className="media-asset"
                        alt="Gallery"
                        sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, (max-width: 991px) 100vw, 517.32421875px"
                      />
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={6} className="">
            <div className="d-flex flex-column align-items-start gap-4">
              <p>
                Designed for indie creators and loved by the worlds leading
                studios, the Smartsuit Pro II captures your bodys motion and
                streams the data over WiFi in real-time to your digital
                characters. Effortlessly empower your characters using our
                inertial motion capture suit.
              </p>
              <div className="d-flex flex-column flex-xl-row gap-3">
                <Button variant="secondary "> Buy Smartsuit Pro II</Button>
                <Button variant="outline ">
                  {" "}
                  Buy Full Performance Capture
                </Button>
              </div>

              <p className="caption text-gray">
                Or
                <Button variant="underline "> request a quote</Button>
                for a custom mocap bundle
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
