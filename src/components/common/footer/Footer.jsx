import FooterCol from "./FooterCol";
import facebook from "../../../assets/images/footer/facebook.svg";
import twitter from "../../../assets/images/footer/twitter.svg";
import linkedin from "../../../assets/images/footer/linkedin.svg";
import tiktok from "../../../assets/images/footer/tiktok.svg";
import discord from "../../../assets/images/footer/discord.svg";
import logo from "../../../assets/images/navbar/logo.svg";
import { ImageMaker } from "../../common";
const Footer = () => {
  const Links_1 = {
    title: "Capture tools",
    subTitle: [
      "Full Performance Capture",
      " Smartsuit Pro II",
      "  Smartgloves",
      "   Coil Pro",
      " Face Capture",
      " Headcam",
      " Headrig",
      "Studio Software",
      "  Rokoko Vision",
      "    Motion Library",
      "    Request a Quote",
      " Book a demo",
      "   Get in touch",
    ],
  };
  const Links_2 = {
    title: "Integrations",
    subTitle: [
      " Blender",
      "   Unreal",
      "   Unity",
      "   iClone",
      "   Maya",
      "   Houdini",
      " Headrig",
      "       MotionBuilder",
    ],
  };
  const Links_3 = {
    title: "Use cases",
    subTitle: [
      "  Animation, Film & VFX",
      "    Game, AR & VR development",
      "  Academia & Education",
      "    Customer user stories",
    ],
  };
  const Links_4 = {
    title: "Learn",
    subTitle: [
      "  Events",
      "Tutorials",
      "   Free resources",
      "Reviews",
      "Artist spotlight",
      "Insights",
      "Get sponsored",
    ],
  };
  const Links_5 = {
    title: "Support",
    subTitle: [
      " Rokoko tools video guides",
      "   Workflow video guides",
      "Help Center",
      "  Talk to a Support Engineer",
      " Request a feature",
    ],
  };
  const Links_6 = {
    title: "About",
    subTitle: ["  Careers", "   Our story"],
  };

  const Links_7 = {
    title: "Subscribe to our newsletter",
    subTitle: [
      <>
        <a
          href="#"
          target="_blank"
          className="display-flex gap-medium text-decoration-none w-inline-block"
        >
          <div className="display-flex direction-vertical w-embed">
            <ImageMaker src={facebook} />
          </div>
          <div className="p small">Facebook</div>
        </a>
      </>,
      <>
        {" "}
        <a
          href="#"
          target="_blank"
          className="display-flex gap-medium text-decoration-none w-inline-block"
        >
          <div className="display-flex direction-vertical w-embed">
            <ImageMaker src={twitter} />
          </div>
          <div className="p small">Twitter</div>
        </a>
      </>,
      <>
        {" "}
        <a
          href="#"
          target="_blank"
          className="display-flex gap-medium text-decoration-none w-inline-block"
        >
          <div className="display-flex direction-vertical w-embed">
            <ImageMaker src={linkedin} />
          </div>
          <div className="p small">Linkedin</div>
        </a>
      </>,
      <>
        {" "}
        <a
          href="#"
          target="_blank"
          className="display-flex gap-medium text-decoration-none w-inline-block"
        >
          <div className="display-flex direction-vertical w-embed">
            <ImageMaker src={tiktok} />
          </div>
          <div className="p small">TikTok</div>
        </a>
      </>,
      <>
        {" "}
        <a
          href="#"
          target="_blank"
          className="display-flex gap-medium text-decoration-none w-inline-block"
        >
          <div className="display-flex direction-vertical w-embed">
            <ImageMaker src={discord} />
          </div>
          <div className="p small">Discord</div>
        </a>
      </>,
    ],
  };

  return (
    <footer className="section padding-top padding-huge overflow-hidden bg-dark-900">
      <div className="container padding-bottom padding-medium font-weight-500">
        <div className="display-flex direction-vertical gap-huge t_gap-large">
          <div className="display-flex gap-small t_direction-vertical align-items-center">
            <div className="width-4-col display-flex align-start">
              <a
                href="#"
                className="logo display-flex align-center gap-x-large padding-0 w-inline-block"
              >
                <div className="p Logo color-bright-100 display-flex margin-0 w-embed">
                  <img className="" src={logo} alt="" />
                </div>
              </a>
            </div>
            <div className="width-6-col">
              <p className="color-bright-100 t_margin-bottom">
                Turn motion into magic.
              </p>
            </div>
            <div className="width-2-col">DROPDOWN</div>
          </div>
          <div className="display-flex gap-small t_direction-vertical t_gap-xx-large">
            <div className="width-8-col">
              <div className="display-flex gap-small t_direction-vertical t_gap-0">
                <div className="width-2-col-in-8-col">
                  <FooterCol links={Links_1} />
                </div>
                <div className="width-2-col-in-8-col">
                  <FooterCol links={Links_2} />
                </div>
                <div className="width-2-col-in-8-col">
                  <div className="display-flex direction-vertical gap-medium t_gap-0">
                    <FooterCol links={Links_3} />

                    <div className="t_border-bottom border-color-grey-500">
                      <FooterCol links={Links_4} />
                    </div>
                  </div>
                </div>
                <div className="width-2-col-in-8-col">
                  <div className="display-flex direction-vertical gap-medium t_gap-0">
                    <FooterCol links={Links_5} />
                    <FooterCol links={Links_6} />
                  </div>
                </div>
              </div>
            </div>
            <div className="width-4-col order-first t_order-last">
              <FooterCol links={Links_7} />
            </div>
          </div>
          <div className="display-flex align-center gap-medium m_direction-vertical m_align-start m_gap-x-small">
            <div className="p small font-weight-500">© Rokoko</div>
            <a
              href="#"
              className="p small font-weight-500 text-decoration-none"
            >
              Terms of use
            </a>
            <a
              href="#"
              className="p small font-weight-500 text-decoration-none"
            >
              Privacy policy
            </a>
          </div>
        </div>
      </div>
      <div></div>
    </footer>
  );
};
export default Footer;
