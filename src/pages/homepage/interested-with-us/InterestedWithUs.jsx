import { Button, Video } from "@components/common";

const InterestedWithUs = () => {
  return (
    <section className="section padding-xx-huge t_padding-huge bg-dark-900">
      <div className="container">
        <div className="display-flex justify-space-between gap-x-huge t_gap-x-large m_direction-vertical m_gap-medium direction-reverse">
          <div className="width-7-col t_width-7-col">
            <div className="display-flex direction-vertical gap-tiny">
              <div className="media-wrap _16x9">
                <div className="media-asset display-flex justify-center w-embed">
                  <Video
                    src={"https://media.rokoko.com/Headcam_Metahumans_720.mp4"}
                    poster="https://cdn.prod.website-files.com/5e6b63ac3b6e253f11889f39/66c4577f8caa47528f7d2579_Headcam_Metahuman-min.avif"
                    message=" Your browser does not support the video tag.
"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="width-5-col t_width-5-col order-first">
            <div className="display-flex direction-vertical gap-small">
              <h2>Interested in Partnering with Us?</h2>
              <p className="text-gray">
                Let’s create something extraordinary together. Join our growing
                network of global collaborators.
              </p>
              <div className="display-flex direction-vertical align-start gap-small">
                <Button variant="secondary"> Lorem Ipsum </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default InterestedWithUs;
