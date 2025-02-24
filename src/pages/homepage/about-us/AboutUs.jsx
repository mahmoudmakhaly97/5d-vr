import { Container } from "reactstrap";
import img1 from "../../../assets/images/full-performance/card_1.gif";
import img2 from "../../../assets/images/full-performance/card_2.gif";
import img3 from "../../../assets/images/full-performance/card_3.gif";
import HoveredCard from "./HoveredCard";
const AboutUs = () => {
  const data = [
    {
      imgSrc: img1,
      route: "/featured-projects",
    },
    {
      imgSrc: img2,
      route: "/education-and-training",
    },
    {
      route: "/ai-powered-xr-solutions",
      imgSrc: img3,
    },
  ];

  return (
    <Container className="py-3 py-lg-5">
      <div>
        <div>
          <div className="py-3 d-flex gap-2 flex-column align-items-start">
            <h3 className="h _4">Full Performance Capture</h3>
            <h2 className="h _5 color-grey-500">
              <h2 className="h _5 color-grey-500">
                Transforming Ideas into Immersive Experiences That Shape the
                Future.
              </h2>
            </h2>{" "}
          </div>
        </div>
        <ul role="list" className="display-flex gap-small carousel">
          {data.map((item) => (
            <HoveredCard key={item.imgSrc} item={item} />
          ))}
        </ul>
      </div>
    </Container>
  );
};
export default AboutUs;
