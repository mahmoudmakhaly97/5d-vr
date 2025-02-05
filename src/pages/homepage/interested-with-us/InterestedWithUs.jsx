import { Col, Container, Row } from "reactstrap";
import { Button, Video } from "@components/common";

const InterestedWithUs = () => {
  return (
    <Container className="py-5 py-lg-5">
      <Row className="g-3 g-lg-5 py-3 py-lg-5">
        <Col lg={7}>
          <div className="display-flex direction-vertical gap-tiny w-100">
            <div className="media-wrap _16x9 w-100">
              <div className="media-asset display-flex justify-center w-embed ">
                <Video
                  src={"https://media.rokoko.com/Headcam_Metahumans_720.mp4"}
                  poster="https://cdn.prod.website-files.com/5e6b63ac3b6e253f11889f39/66c4577f8caa47528f7d2579_Headcam_Metahuman-min.avif"
                  message=" Your browser does not support the video tag.
"
                />
              </div>
            </div>
          </div>
        </Col>

        <Col lg={5}>
          <div className="d-flex flex-column gap-3 gap-lg-4 align-items-start">
            <h2>Interested in Partnering with Us?</h2>
            <p className="text-gray">
              Let’s create something extraordinary together. Join our growing
              network of global collaborators.
            </p>
            <Button variant="secondary"> Lorem Ipsum </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default InterestedWithUs;
