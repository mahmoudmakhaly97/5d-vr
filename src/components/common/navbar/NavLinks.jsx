import { useState } from "react";
import user from "../../../assets/images/navbar/user-icon.svg";
import { navData } from "./NavData";
import NavItem from "./NavItem";
import Offcanvas from "./Offcanvas";
import img1 from "../../../assets/images/65c39bb9846cb43884063803_Demo_GIT.webp";
import img2 from "../../../assets/images/65c39bb8db3d098d17976e96_Sales_GIT.webp";
import img3 from "../../../assets/images/65c39bb95f039bcad5ec5876_Support_GIT.webp";
import img4 from "../../../assets/images/633b899b4fb6f953bea69bb7_close-medium.svg";
import { Link } from "react-router-dom";
import { Button } from "../button";
import { ImageMaker } from "../image-maker";
import { ModalMaker } from "../modal-maker";

const NavLinks = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="sizing-grow display-flex align-center justify-space-between t_direction-reverse t_justify-start">
      <div
        className="nav-burger bg-switch-on"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        <div
          id="nav-burger-line-1"
          className="nav-burger-line bg-bright-100 bg-switch-on"
        ></div>
        <div
          id="nav-burger-line-2"
          className="nav-burger-line bg-bright-100 bg-switch-on"
        ></div>
      </div>

      <Offcanvas />

      <div className="nav-menu bg-switch-on t_visibility-hidden">
        <ul
          role="list"
          className="display-flex align-center t_display-block w-list-unstyled"
        >
          {navData.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
      <div className="display-flex align-center">
        <Button className="outline w-button" onClick={() => setModalShow(true)}>
          Get in touch
        </Button>
        <ModalMaker
          show={modalShow}
          onHide={() => setModalShow(false)}
          className="mt-5"
        >
          <div className="d-flex justify-content-end pt-3">
            <Button
              onClick={() => setModalShow(false)}
              className=" bg-transparent border-0 p-0   "
            >
              <ImageMaker className="pointer" src={img4} alt="close-icon" />
            </Button>
          </div>
          <div className="  bg-bright-100 p-5 pt-0 ">
            <div className="display-flex justify-space-between my-4">
              <h2>Connect with us 👋</h2>
            </div>
            <div className="row">
              <div className="col">
                <div className="media-wrap _1x1 mb-4">
                  <img src={img2} className="media-asset" />
                </div>
                <div>
                  <h4 className="mb-1">Talk to an Expert</h4>
                  <span>
                    Have questions about VR, AR, MR, or immersive technology?
                    Our team of experts is ready to help! Get advice on how our
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
              </div>
              <div className="col">
                <div className="media-wrap _1x1 mb-4">
                  <img src={img3} className="media-asset" />
                </div>
                <div>
                  <h4 className="mb-1">Our Office Location</h4>
                  <span>
                    We love collaborating with visionaries from all around the
                    world! Visit us at our headquarters in Cairo, Egypt, to
                    explore the world of immersive experiences.
                  </span>
                  <div>
                    <span className="my-1 d-block">
                      <span className="fw-bold text-dark"> 5dVR Office</span>:
                      [1A. 2nd floor, 28 Sama Towers, Maadi, Cairo Governorate]
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
              </div>
              <div className="col">
                <div className="media-wrap _1x1 mb-4">
                  <img src={img1} className="media-asset" />
                </div>
                <div>
                  <h4 className="mb-1">Career Opportunities</h4>
                  <span>
                    Join the team that’s shaping the future of immersive
                    technology! Whether you’re an experienced developer, a
                    creative designer, or just passionate about AR/VR, we’d love
                    to hear from you.
                  </span>

                  <span className="d-block my-3">
                    Ready to build the future?
                  </span>
                  <Link to="" className="button no-outline w-button mt-5">
                    Message us →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ModalMaker>

        <Button className="d-none d-lg-block"> Book a demo</Button>
        <a href="#" className="m_display-none id w-inline-block">
          <div className="p color-bright-100 display-flex w-embed">
            <img src={user} alt="user-icon" />
          </div>
        </a>
      </div>
    </div>
  );
};
export default NavLinks;
