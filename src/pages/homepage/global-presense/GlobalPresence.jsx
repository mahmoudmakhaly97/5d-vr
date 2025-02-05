import { Row, Col, Container } from "reactstrap";
import { Button, Video } from "@components/common";

const GlobalPresence = () => {
  return (
    <Container>
      <Row className="g-4 gl-lg-0">
        <Col lg={6}>
          <div
            style={{
              width: "80%",
              "@media(max-width:575px": { width: "100%" },
            }}
            className="d-flex justify-content-center"
          >
            <Video
              style={{
                width: "-webkit-fill-available",
                borderRadius: "20px",
              }}
              src={"https://media.rokoko.com/Loacher_944x1260px.mp4"}
              poster="https://cdn.prod.website-files.com/5e6b63ac3b6e253f11889f39/64ddf03bab742eb1f32517a7_Loacher_944x1260px-thumbnail-min.webp"
              message=" Your browser does not support the video tag.
                                        "
            />
          </div>
        </Col>

        <Col lg={6}>
          <blockquote className="d-flex align-items-center">
            Our Global Presence : Proudly Collaborating with Clients Around the
            World
          </blockquote>
          <p className="my-4 text-gary ">
            At 5dVR, we bring immersive technology solutions to clients across
            the globe. From the Middle East to international markets, our
            expertise and innovation have made a lasting impact on industries
            such as education, healthcare, entertainment, real estate, and more.
          </p>
          <Button variant="secondary"> Lorem Ipsum </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default GlobalPresence;
