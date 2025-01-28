import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";

import img1 from "@images/65c39bb9846cb43884063803_Demo_GIT.webp";
import img2 from "@images/65c39bb8db3d098d17976e96_Sales_GIT.webp";
import img3 from "@images/65c39bb95f039bcad5ec5876_Support_GIT.webp";
import img4 from "@images/633b899b4fb6f953bea69bb7_close-medium.svg";
import ModalMaker from "../modal-maker/ModalMaker";
import ImageMaker from "./../image-maker/ImageMaker";
const GitInTouchModal = ({ modalShow, setModalShow }) => {
  return (
    <ModalMaker
      show={modalShow}
      onHide={() => setModalShow(false)}
      className="mt-5 rounded-3"
    >
      <div className="d-flex justify-content-end p-3 bg-transparent ">
        <Button
          onClick={() => setModalShow(false)}
          className=" bg-transparent border-0 p-0   "
        >
          <ImageMaker
            className="pointer"
            src={img4}
            alt="close-icon"
            rest={undefined}
          />
        </Button>
      </div>
      <div className="  bg-bright-100 p-5 pt-0 ">
        <div className="display-flex justify-space-between my-4">
          <h2>Connect with us 👋</h2>
        </div>
        <Row>
          <Col>
            <div className="media-wrap _1x1 mb-4">
              <img src={img2} className="media-asset" />
            </div>
            <div>
              <h4 className="mb-1">Talk to an Expert</h4>
              <span>
                Have questions about VR, AR, MR, or immersive technology? Our
                team of experts is ready to help! Get advice on how our
                solutions can transform your projects, whether it’s for
                education, entertainment, or enterprise.
              </span>
              <div>
                <span className="my-1 d-block">
                  <span className="fw-bold text-dark">Email</span>:
                  info@5d-vr.com{" "}
                </span>
                <span className="d-block">
                  <span className="fw-bold text-dark">Phone</span>: +(202)
                  25259910 / +(202) 25256793
                </span>
              </div>
              <span className="d-block">Let’s talk!</span>
              <Link to="" className="button no-outline w-button">
                Send us a message →
              </Link>
            </div>
          </Col>
          <Col>
            <div className="media-wrap _1x1 mb-4">
              <img src={img3} className="media-asset" />
            </div>
            <div>
              <h4 className="mb-1">Our Office Location</h4>
              <span>
                We love collaborating with visionaries from all around the
                world! Visit us at our headquarters in Cairo, Egypt, to explore
                the world of immersive experiences.
              </span>
              <div>
                <span className="my-1 d-block">
                  <span className="fw-bold text-dark"> 5dVR Office</span>: [1A.
                  2nd floor, 28 Sama Towers, Maadi, Cairo Governorate]
                </span>

                <span className="d-block">
                  <span className="fw-bold text-dark">Location</span>:
                  <Link
                    to=""
                    style={{
                      wordWrap: "break-word",
                      wordBreak: "break-all",
                      whiteSpace: "normal",
                    }}
                  >
                    https://maps.app.goo.gl/2mowt6QPcPuudt2H9
                  </Link>
                </span>
              </div>
              <span className="d-block">
                Want to drop by? Schedule a visit:
              </span>
              <Link to="" className="button no-outline w-button">
                Contact Us →
              </Link>
            </div>
          </Col>
          <Col>
            <div className="media-wrap _1x1 mb-4">
              <img src={img1} className="media-asset" />
            </div>
            <div>
              <h4 className="mb-1">Career Opportunities</h4>
              <span>
                Join the team that’s shaping the future of immersive technology!
                Whether you’re an experienced developer, a creative designer, or
                just passionate about AR/VR, we’d love to hear from you.
              </span>

              <span className="d-block my-3">Ready to build the future?</span>
              <Link to="" className="button no-outline w-button mt-5">
                Message us →
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </ModalMaker>
  );
};
export default GitInTouchModal;
