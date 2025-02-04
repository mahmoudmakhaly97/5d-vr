import { Col, Container, Row } from "reactstrap";
import { Video, Button } from "@components/common";

const AboutUs = () => {
  return (
    <Container className="  bg_section about-us  ">
      <Row>
        <Col xl={8}>
          <h1>
            Transforming Ideas into Immersive Experiences That Shape the Future.
          </h1>
        </Col>
        <Col xl={4} className="d-flex flex-column gap-3 align-items-start">
          <p className="text-gray">
            Where Technology Meets Imagination to Build the Extraordinary.
          </p>

          <Button variant="secondary ">Know More</Button>
{/* 
          <Button variant="outline "> Buy Full Performance Capture</Button>

          <Button variant="underline " className="text-gray pt-0">
            See if you qualify for indie pricing
          </Button> */}
        </Col>
      </Row>
      <div className="py-lg-5 py-3">
        <Video
          className="rounded-4 w-100"
          poster={
            "https://cdn.prod.website-files.com/5e6b63ac3b6e253f11889f39/634e50fcd2c73b4998e83f6f_SSP2-LAUNCH-1464x530-thumbnail.webp"
          }
          src={"https://media.rokoko.com/SSP2-LAUNCH-1464x530.mp4"}
          message="  Your browser does not support the video tag.
"
        />
        <p className="caption text-gray">
          Smartsuit Pro II launch video, a new era in motion capture technology
          begins
        </p>
      </div>
    </Container>
  );
};
export default AboutUs;
