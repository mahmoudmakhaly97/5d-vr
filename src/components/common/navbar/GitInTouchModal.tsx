import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";

  import img4 from "@images/homepagemodal/close.svg";
import ModalMaker from "../modal-maker/ModalMaker";
import ImageMaker from "../image-maker/ImageMaker";

const sections = [
  {
 
    title: "Talk to an Expert",
    description:
      "Have questions about VR, AR, MR, or immersive technology? Our team of experts is ready to help! Get advice on how our solutions can transform your projects, whether it’s for education, entertainment, or enterprise.",
    details: [
      { label: "Email", value: "info@5d-vr.com" },
      { label: "Phone", value: "+201222189681" },
      {
        label: "",
        value: "Let’s talk!",
      },
    ],
    buttonText: "Send us a message →",
    buttonLink: "",
  },

  {
 
    title: "Our Office Location",
    description:
      "We love collaborating with visionaries from all around the world! Visit us at our headquarters in Cairo, Egypt, to explore the world of immersive experiences.",
    details: [
      {
        label: "5dVR Office",
        value: "1A. 2nd floor, 28 Sama Towers, Maadi, Cairo Governorate",
      },
      {
        label: "Location",
        value: (
          <Link
            to=""
            style={{
              wordWrap: "break-word",
              wordBreak: "break-word",
              whiteSpace: "normal",
            }}
          >
            https://maps.app.goo.gl/2mowt6QPcPuudt2H9
          </Link>
        ),
      },
      {
        label: "",
        value: "Want to drop by? Schedule a visit:",
      },
    ],
    buttonText: "Contact Us →",
    buttonLink: "",
  },
  {
  
    title: "Career Opportunities",
    description:
      "Join the team that’s shaping the future of immersive technology! Whether you’re an experienced developer, a creative designer, or just passionate about AR/VR, we’d love to hear from you.",
    details: [

      {
        label: "",
        value: "Ready to build the future?",
      },
    ],

  },
];

const GitInTouchModal = ({ modalShow, setModalShow }) => {
  return (
    <ModalMaker
      show={modalShow}
      onHide={() => setModalShow(false)}
      className="mt-5 rounded-3"
    >
      <div className="d-flex justify-content-end p-3 bg-white rounded-top">
        <Button
          onClick={() => setModalShow(false)}
          className="bg-transparent border-0 px-3 d-flex align-items-center justify-space-between w-100"
        >
          <h2 className="text-dark mb-4">Connect with us 👋</h2>
          <ImageMaker
            className="pointer mt-3"
            src={img4}
            alt="close-icon"
            rest={undefined} style={undefined}          />
        </Button>
      </div>
      <div className="bg-bright-100 p-5 pt-0 rounded-bottom">
        <Row className="g-4  ">
          {sections.map((section, index) => (
            <Col key={index} lg={4} className="col-12 d-flex flex-column justify-content-between ">
     <div>

       
                <h4 className="mb-1">{section.title}</h4>
                <span>{section.description}</span>
                <div >
                  {section.details.map((detail, i) => (
                    <span key={i} className="d-block my-1">
                      {detail.label && (
                        <span className="fw-bold text-dark">
                          {detail.label}:{" "}
                        </span>
                      )}
                      {detail.value}
                    </span>
                  ))}
                </div>
     </div>
               
              
            </Col>
          ))}
        </Row>
      </div>
    </ModalMaker>
  );
};

export default GitInTouchModal;
