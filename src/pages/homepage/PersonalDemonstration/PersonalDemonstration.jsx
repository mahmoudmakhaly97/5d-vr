import Video from "../../../components/common/video/Video";

const PersonalDemonstration = () => {
  return (
    <section className="section padding-vertical padding-x-huge  bg-switch-on t_padding-huge m_padding-xx-large bg_section">
      <div className="container">
        <div className="display-flex gap-xx-large t_gap-small m_direction-vertical m_gap-x-large">
          <div className="width-4-col sizing-shrink t_width-5-col">
            <div className="display-flex direction-vertical gap-small">
              <h2 className="h _2">Book a personal demonstration</h2>
              <p className="p">
                Schedule a free personal Zoom demo with our team, well show you
                how our mocap tools work and answer all your questions.
              </p>
              <div>
                <a
                  href="https://www.rokoko.com/book-demo"
                  className="button margin-right margin-small w-button"
                >
                  Book a demo
                </a>
              </div>
            </div>
          </div>
          <div className="width-8-col t_width-7-col">
            <div className="display-flex gap-small margin-bottom margin-tiny">
              <div className="sizing-grow">
                <div className="media-wrap _719x420 m_327x198">
                  <div className="media-asset display-flex justify-center w-embed">
                    <Video
                      src={"https://media.rokoko.com/demo-teaser.mp4"}
                      poster="https://cdn.prod.website-files.com/5e6b63ac3b6e253f11889f39/634bcd64453d98dd67aa6810_demo-teaser-thumbnail.webp"
                      message=" Your browser does not support the video tag.
"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="p small">
              Product Specialists Francesco and Paulina host Zoom demos from the
              Copenhagen office
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PersonalDemonstration;
