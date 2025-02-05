import { Button, Video } from "@components/common";
import { Container } from "reactstrap";

const Experience = () => {
  return (
    <div className="pt-5 ">
      <Container className="py-5">
        <div className="py-4 py-lg-5 d-flex flex-column  align-items-center gap-4 text-center">
          <h1 className=" text-center">
            Experience the Future of Immersive Technology with 5dVR
          </h1>
          <div className="width-8-col">
            <h2 className="h _5 color-grey-500">
              Crafting Immersive Experiences That Inspire, Engage, and
              Transform.
            </h2>
          </div>
          <div className="d-flex justify-content-center">
            <Button variant="secondary">Lorem Ipsum</Button>
          </div>
        </div>

        <div className="media-wrap _1464x530 t_786x318 m_327x198">
          <div className="media-asset display-flex justify-center w-embed">
            <Video
              className="media-asset w-video"
              poster="https://cdn.prod.website-files.com/6310adc0eca8855210b155c5/6339fbc59841f97babaf81ca_hero.webp"
              src="https://streamable.com/e/y7d5u9?"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Experience;
