import { Col, Container, Row } from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "@images/logos/img1.png";
import img2 from "@images/logos/img2.png";
import img3 from "@images/logos/img3.png";
import img4 from "@images/logos/img4.png";
import img5 from "@images/logos/img5.png";
import img6 from "@images/logos/img6.png";
import img7 from "@images/logos/img7.png";
import img8 from "@images/logos/img8.png";
import img9 from "@images/logos/img9.png";
import img10 from "@images/logos/img10.png";
import img11 from "@images/logos/img11.png";
import img12 from "@images/logos/img12.png";
import img13 from "@images/logos/img13.png";
import img14 from "@images/logos/img14.png";
import img15 from "@images/logos/img15.png";
import img16 from "@images/logos/img16.png";
import img17 from "@images/logos/img17.png";
import img18 from "@images/logos/img18.png";
import img19 from "@images/logos/img19.png";
import img20 from "@images/logos/img20.png";
import img21 from "@images/logos/img21.png";
import img22 from "@images/logos/img22.png";
import img23 from "@images/logos/img23.png";
import img24 from "@images/logos/img24.png";
import img25 from "@images/logos/img25.png";
import img26 from "@images/logos/img26.png";
import img27 from "@images/logos/img27.png";
import img28 from "@images/logos/img28.png";
import img29 from "@images/logos/img29.png";
import img30 from "@images/logos/img30.png";
import img31 from "@images/logos/img31.png";
import img32 from "@images/logos/img32.png";
import img33 from "@images/logos/img33.png";
import img34 from "@images/logos/img34.png";
import img35 from "@images/logos/img35.png";
import img36 from "@images/logos/img36.png";
import img37 from "@images/logos/img37.png";
import img38 from "@images/logos/img38.png";
import img39 from "@images/logos/img39.png";
import img40 from "@images/logos/img40.png";
import img41 from "@images/logos/img41.png";
import img42 from "@images/logos/img42.png";
import img43 from "@images/logos/img43.png";
import img44 from "@images/logos/img44.png";
import img45 from "@images/logos/img45.png";
import img46 from "@images/logos/img46.png";
import img47 from "@images/logos/img47.png";
import img48 from "@images/logos/img48.png";
import img49 from "@images/logos/img49.png";
import img50 from "@images/logos/img50.png";
import img51 from "@images/logos/img51.png";
import img52 from "@images/logos/img52.png";
import img53 from "@images/logos/img53.png";
import img54 from "@images/logos/img54.png";
import img55 from "@images/logos/img55.png";
import img56 from "@images/logos/img56.png";
import img57 from "@images/logos/img57.png";

const images = [
  [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12],
  [
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
  ],
  [
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34,
    img35,
    img36,
  ],
  [
    img37,
    img38,
    img39,
    img40,
    img41,
    img42,
    img43,
    img44,
    img45,
    img46,
    img47,
    img48,
  ],
  [img49, img50, img51, img52, img53, img54, img55, img56, img57],
];

const Industry = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true, // Enables automatic sliding
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
            <Slider {...settings}>
              <div>
                <Row className="g-3 g-lg-5">
                  {images[0].map((img, index) => (
                    <Col className="col-6" sm={4} lg={3} key={index}>
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
              </div>
              <div>
                <Row className="g-3 g-lg-5">
                  {images[1].map((img, index) => (
                    <Col className="col-6" sm={4} lg={3} key={index}>
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
              </div>
              <div>
                <Row className="g-3 g-lg-5">
                  {images[2].map((img, index) => (
                    <Col className="col-6" sm={4} lg={3} key={index}>
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
              </div>
              <div>
                <Row className="g-3 g-lg-5">
                  {images[3].map((img, index) => (
                    <Col className="col-6" sm={4} lg={3} key={index}>
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
              </div>
              <div>
                <Row className="g-3 g-lg-5">
                  {images[4].map((img, index) => (
                    <Col className="col-6" sm={4} lg={3} key={index}>
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
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Industry;
