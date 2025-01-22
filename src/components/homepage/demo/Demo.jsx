const Demo = () => {
  return (
    <section className="section padding-x-huge t_padding-huge m_padding-xx-large">
      <div className="container">
        <div className="display-flex direction-vertical gap-x-large">
          <div className="display-flex justify-space-between gap-small t_direction-vertical">
            <div className="width-6-col">
              <h2>Watch a demo of Rokoko motion capture tools</h2>
            </div>
            <div className="width-4-col t_width-5-col">
              <div className="display-flex justify-end m_display-block">
                <div className="display-flex direction-vertical gap-small">
                  <p>
                    Or book a 1:1 consultation with our experts to get
                    personalised advice on your projects, workflows and
                    animation pipelines
                  </p>
                  <div className="display-flex direction-vertical align-start gap-micro">
                    <a
                      href="#modal?popup=popup"
                      className="button breaking-no-wrap w-button"
                    >
                      Schedule a personal demo instead
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <figure className="display-flex direction-vertical gap-tiny">
            <div className="media-wrap _1464x835">
              <div
                style={{ paddingTop: "56.17021276595745%" }}
                className="media-asset w-video w-embed"
              >
                <iframe
                  className="embedly-embed"
                  src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fdrs0jQowZfg%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Ddrs0jQowZfg&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fdrs0jQowZfg%2Fhqdefault.jpg&type=text%2Fhtml&schema=youtube"
                  width="940"
                  height="528"
                  scrolling="no"
                  allowFullScreen=""
                  title="Rokoko Full Performance Capture Raw Demo | Motion Capture Workflow"
                ></iframe>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};
export default Demo;
