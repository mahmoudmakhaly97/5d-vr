import {   Container  } from "reactstrap";
import { Button, ImageMaker } from "@components/common";
 import img2 from "@images/full2.webp";
import img3 from "@images/full3.webp";
import img4 from "@images/full4.webp";
const AboutUs = () => {
  const data = [
    {
      imgUr: img2,
      text: "Featured projects",
    },
    {
      imgUr: img3,
      text: "Industries We Serve",
    },
    {
      imgUr: img4,
      text: "Discover AI in XR",
    },
  ];
  return (
    <Container className="py-3 py-lg-5">
      <div >
      
        <div>
           <div className="py-3 d-flex gap-2 flex-column align-items-start">
            <h3 className="h _4">Full Performance Capture</h3>
            <h2 className="h _5 color-grey-500">
            <h2 className="h _5 color-grey-500">
            Transforming Ideas into Immersive Experiences That Shape the Future.

            </h2>
            </h2>          </div>
        </div>
        <ul role="list" className="display-flex gap-small carousel">
          {data.map((item, index) => (
            <li
              className="width-4-col sizing-fixed t_width-4-col m_width-2-col"
              key={index}
            >
              <div className="d-flex direction-vertical gap-small">
                <a href="" className="media-wrap _472x630 w-inline-block">
                  <ImageMaker
                    src={item.imgUr}
                    alt={item.text}
                    className="media-asset"
                  />
                </a>
                <div className="display-flex direction-vertical gap-x-small">
                  <h4>{item.text}</h4>

                  <div className="d-flex flex-wrap gap-1 gap-lg-3">
                    <Button variant="secondary"> Lorem Ipsum </Button>

                    <Button
                      variant="underline"
                      className="text-white text-decoration-none"
                    >
                      Get a demo →
                    </Button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};
export default AboutUs;
