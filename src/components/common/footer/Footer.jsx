import { Link } from "react-router-dom";
 
import { Button, ImageMaker } from "@components";
import youtube from "@images/footer/youtube.jpg";
import instagram from "@images/footer/instagram.svg";
import facebook from "@images/footer/facebook.svg";
import twitter from "@images/footer/twitter.svg";
import linkedin from "@images/footer/linkedin.svg";
import tiktok from "@images/footer/tiktok.svg";
import discord from "@images/footer/discord.svg";
import logo from "@images/navbar/logo.svg";

const Footer = () => {
  return (
    <>
      <footer className="mt-3 mt-xl-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <ImageMaker
                src={logo}
                alt="footer-logo"
                className="footer-logo mb-3   mb-lg-5 d-block"
              />
              <h6 className="mb-3">Subscribe to our newsletter</h6>
              <div className="d-flex gap-2 align-items-center mb-3 mb-lg-4">
                <input
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
                    to=""
                    className="d-flex align-items-center gap-4 text-decoration-none"
                  >
                    <ImageMaker src={instagram} alt="instagram" />
                    <span>Instagram</span>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to=""
                    className="d-flex align-items-center gap-4 text-decoration-none"
                  >
                    <ImageMaker src={facebook} alt="facebook" />
                    <span>facebook</span>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to=""
                    className="d-flex align-items-center gap-4 text-decoration-none"
                  >
                    <ImageMaker src={twitter} alt="twitter" />
                    <span>twitter</span>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to=""
                    className="d-flex align-items-center gap-4 text-decoration-none"
                  >
                    <ImageMaker src={linkedin} alt="linkedin" />
                    <span>linkedin</span>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to=""
                    className="d-flex align-items-center gap-4 text-decoration-none"
                  >
                    <ImageMaker src={tiktok} alt="tiktok" />
                    <span>tiktok</span>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to=""
                    className="d-flex align-items-center gap-4 text-decoration-none"
                  >
                    <ImageMaker src={discord} alt="discord" />
                    <span>discord</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-xl-4">
              <h6 className="my-3 my-xl-5">Turn motion into magic.</h6>
              <div className="pb-0 pb-xl-4"></div>
              <div className="row">
                <div className="col">
                  <ul>
                    <li className="mb-3">
                      <Link to="" className="text-decoration-none">
                        <h6> Capture tools</h6>
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to=""
                        className="text-decoration-none font-weight-500"
                      >
                        Full Performance
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to=""
                        className="text-decoration-none font-weight-500"
                      >
                        Smartsuit Pro II{" "}
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to=""
                        className="text-decoration-none font-weight-500"
                      >
                        Smartgloves
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to=""
                        className="text-decoration-none font-weight-500"
                      >
                        Coil Pro{" "}
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to=""
                        className="text-decoration-none font-weight-500"
                      >
                        Face Capture
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to=""
                        className="text-decoration-none font-weight-500"
                      >
                        Headcam{" "}
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to=""
                        className="text-decoration-none font-weight-500"
                      >
                        Headrig
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to=""
                        className="text-decoration-none font-weight-500"
                      >
                        Studio Software
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to=""
                        className="text-decoration-none font-weight-500"
                      >
                        Rokoko Vision
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to=""
                        className="text-decoration-none font-weight-500"
                      >
                        Motion Library
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to=""
                        className="text-decoration-none font-weight-500"
                      >
                        Request a Quote
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to=""
                        className="text-decoration-none font-weight-500"
                      >
                        Book a demo
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to=""
                        className="text-decoration-none font-weight-500"
                      >
                        Get in touch
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <ul>
                    <li className="mb-3">
                      <Link to="" className="text-decoration-none">
                        <h6> Integrations </h6>
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link to="" className="text-decoration-none">
                        Blender
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link to="" className="text-decoration-none">
                        Unreal
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link to="" className="text-decoration-none">
                        Unity
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link to="" className="text-decoration-none">
                        iClone
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link to="" className="text-decoration-none">
                        Cinema 4D
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link to="" className="text-decoration-none">
                        Maya
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link to="" className="text-decoration-none">
                        Houdini
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link to="" className="text-decoration-none">
                        MotionBuilder
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link to="" className="text-decoration-none">
                        Cartoon Animation
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link to="" className="text-decoration-none">
                        See all integrations
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <h6 className="my-4 my-xl-5">Turn motion into magic.</h6>
              <div className="pb-0 pb-xl-4"></div>
              <div className="row">
                <div className="col">
                  <ul className="mb-3 mb-lg-5">
                    <li className="mb-3">
                      <Link to="" className="text-decoration-none">
                        <h6> Use cases</h6>
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to=""
                        className="text-decoration-none font-weight-500"
                      >
                        Animation, Film & VFX
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to=""
                        className="text-decoration-none font-weight-500"
                      >
                        Game, AR & VR
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to=""
                        className="text-decoration-none font-weight-500"
                      >
                        Academia & Education
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to=""
                        className="text-decoration-none font-weight-500"
                      >
                        Customer user stories
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li className="mb-3">
                      <Link to="" className="text-decoration-none">
                        <h6> Learn </h6>
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to=""
                        className="text-decoration-none font-weight-500"
                      >
                        Events
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to=""
                        className="text-decoration-none font-weight-500"
                      >
                        Tutorials
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to=""
                        className="text-decoration-none font-weight-500"
                      >
                        Free resources
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to=""
                        className="text-decoration-none font-weight-500"
                      >
                        Reviews
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to=""
                        className="text-decoration-none font-weight-500"
                      >
                        Artist spotlight
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to=""
                        className="text-decoration-none font-weight-500"
                      >
                        Insights
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to=""
                        className="text-decoration-none font-weight-500"
                      >
                        Get sponsored
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <ul className="mb-5">
                    <li className="mb-3 mb-lg-3">
                      <Link to="" className="text-decoration-none">
                        <h6> Support </h6>
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to=""
                        className="text-decoration-none font-weight-500"
                      >
                        Rokoko tools video guides
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to=""
                        className="text-decoration-none font-weight-500"
                      >
                        Rokoko tools video guides
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to=""
                        className="text-decoration-none font-weight-500"
                      >
                        Help Center
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to=""
                        className="text-decoration-none font-weight-500"
                      >
                        Talk to a Support Engineer
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li className="mb-3">
                      <Link to="" className="text-decoration-none">
                        <h6> About </h6>
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to=""
                        className="text-decoration-none font-weight-500"
                      >
                        Events
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to=""
                        className="text-decoration-none font-weight-500"
                      >
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
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
