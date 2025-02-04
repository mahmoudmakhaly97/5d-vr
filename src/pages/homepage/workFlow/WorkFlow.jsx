import { Video, Button } from "@components/common";
import { Col, Container, Row } from "reactstrap";

const WorkFlow = () => {
  return (
    <div className="bg_section py-3 py-lg-5">
      <Container>
        <Row className="g-3 g-lg-5">
          <Col lg={6}>
            <div className="d-flex flex-column gap-4 align-items-start">
              <h2>From pre to post, capture your motions on the fly</h2>
              <p>
                Slip into the , put on the gloves and start capturing your
                motions within minutes. Optionally, forward the mocap data to
                your favourite 3D software with our integrations, for a virtual
                production workflow. Play around with this range of motion raw
                mocap data recording Mixamo .FBX export from Studio and see for
                yourself how easy character animation is with Rokoko mocap
                tools.
              </p>
              <Button variant="secondary w-auto">
                Download the raw .FBX mocap data
              </Button>

              <Button variant="outline ">
                Watch Sams entire range of motion video
              </Button>
            </div>
          </Col>
          <Col lg={6}>
            <div className="media-wrap _719x420 m_327x198">
              <div className="media-asset d-flex justify-content-center w-embed">
                <Video
                  src="https://media.rokoko.com/Sam_ROM_Raw.mp4"
                  message="Your browser does not support the video tag."
                  poster="https://cdn.prod.website-files.com/5e6b63ac3b6e253f11889f39/650c4cacc5e474856cf684ad_Sam_ROM_Raw_Thumbnail-min.webp"
                />
              </div>
            </div>
            <p className="caption text-gray">
              Sam showcasing the Smartsuit Pro and Smartgloves range of motion,
              in a raw (unedited) mocap session.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default WorkFlow;
