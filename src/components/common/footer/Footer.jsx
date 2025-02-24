import { Link } from "react-router-dom";

import { Button, ImageMaker } from "@components";
import youtube from "@images/footer/youtube.jpg";
import instagram from "@images/footer/instagram.svg";
import facebook from "@images/footer/facebook.svg";
import linkedin from "@images/footer/linkedin.svg";

import logo from "@images/navbar/logo.svg";
import { Col, Container, Input, Row } from "reactstrap";

const Footer = () => {
  return (
    <>
      <footer className="pt-3 pt-xl-5 bg_section">
        <Container>
          <Row className="g-3 g-lg-0">
            <Col xl={4}>
              <ImageMaker
                src={logo}
                alt="footer-logo"
                className="footer-logo mb-3   mb-lg-5 d-block"
              />
              <h6 className="mb-3">Subscribe to our newsletter</h6>
              <div className="d-flex gap-2 align-items-center mb-3 mb-lg-4">
                <Input
                  type="text"
                  placeholder="Your email"
                  className="  rounded-pill"
                />

                <Button className="bg-white text-dark">
                  <i className="fa-solid fa-arrow-right"></i>
                </Button>
              </div>
              <Link to="" className="mb-3 d-block">
                <ImageMaker src={youtube} alt="Youtube" />
              </Link>
              <ul>
                <li className="mb-3">
                  <Link
                    target="_blank"
                    to="https://www.instagram.com/5dvrfuturereality?igsh=N3NlbGg2Z2Jwb2lh"
                    className="d-flex align-items-center gap-4 text-decoration-none"
                  >
                    <ImageMaker src={instagram} alt="instagram" />
                    <span>Instagram</span>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    target="_blank"
                    to="https://www.facebook.com/share/18dY7SABNw/?mibextid=wwXIfr"
                    className="d-flex align-items-center gap-4 text-decoration-none"
                  >
                    <ImageMaker src={facebook} alt="facebook" />
                    <span>facebook</span>
                  </Link>
                </li>
               
                <li className="mb-3">
                  <Link
                    to="https://www.linkedin.com/company/5dvr/"
                    target="_blank"
                    className="d-flex align-items-center gap-4 text-decoration-none"
                  >
                    <ImageMaker src={linkedin} alt="linkedin" />
                    <span>linkedin</span>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    target="_blank"
                    to="https://youtube.com/@5dvr952?si=ejxJjnsOS_ktgCxY"
                    className="d-flex align-items-center gap-4 text-decoration-none"
                  >
                    <i className="fa-brands fa-youtube fa-lg"></i>
                    <span>youtube</span>
                  </Link>
                </li>
             
              </ul>
            </Col>

            <Col xl={4}>
              <div className="pb-0 pb-xl-4"></div>
              <ul className="py-0 py-lg-5">
                <li className="mb-3">
                  <Link to="/" className="text-decoration-none">
                    Home
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="" className="text-decoration-none">
                    About Us
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="" className="text-decoration-none">
                    Services
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/" className="text-decoration-none">
                    Clients & Partners
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/" className="text-decoration-none">
                    Latest News
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/" className="text-decoration-none">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </Col>
            <Col xl={4}>
              <div className="pb-0 pb-xl-4"></div>
              <ul className="py-0 py-lg-5">
                <li className="mb-3">
                  <Link to="">Contact Us</Link>
                </li>
                <li className="mb-3">
                  <Link to="" className="text-decoration-none">
                    5dVR Headquarters Cairo, Egypt
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="" className="text-decoration-none">
                    Email: info@5d-vr.com
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/" className="text-decoration-none">
                    Phone: +(202) 25259910 / +(202) 25256793
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/" className="text-decoration-none">
                    Working Hours: Sunday - Thursday | 10:00 AM - 6:00 PM
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className="copyright py-4">
        <div className="container d-flex align-items-center gap-4">
          <Link to="" className="text-decoration-none  font-weight-500">
            @5dvr
          </Link>
          <Link to="" className="text-decoration-none  font-weight-500">
            Terms of use
          </Link>
          <Link to="" className="text-decoration-none  font-weight-500">
            Privacy policy
          </Link>
        </div>
      </div>
    </>
  );
};
export default Footer;
