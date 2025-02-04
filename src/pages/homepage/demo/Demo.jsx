import { Col, Container, Row } from "reactstrap";
import { Button, Video } from "@components/common";
const Demo = () => {
  return (
    <section className=" py-3 py-lg-5 demo  bg_section px-0">
      <Container>
        <Row className="mb-3 mb-lg-5">
          <Col xl={8}>
            <h2 className="title">
              Watch a demo of Rokoko motion capture tools
            </h2>
          </Col>
          <Col xl={4}>
            <p className="text-gray mb-3">
              Or book a 1:1 consultation with our experts to get personalised
              advice on your projects, workflows and animation pipelines
            </p>

            <Button variant="secondary">
              Schedule a personal demo instead
            </Button>
          </Col>
        </Row>

        <div className="media-wrap _1464x835">
          <Video
            message="YouTube video"
            className="media-asset w-video"
            src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fdrs0jQowZfg%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Ddrs0jQowZfg&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fdrs0jQowZfg%2Fhqdefault.jpg&type=text%2Fhtml&schema=youtube"
          ></Video>
        </div>
      </Container>
    </section>
  );
};
export default Demo;
