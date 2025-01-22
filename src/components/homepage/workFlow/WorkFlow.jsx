const WorkFlow = () => {
  return (
    <section className="section padding-x-huge t_padding-huge m_padding-xx-large">
      <div className="container">
        <div className="display-flex justify-space-between gap-x-huge t_gap-x-large m_direction-vertical m_gap-medium direction-reverse">
          <div className="width-6-col t_width-6-col">
            <div className="display-flex direction-vertical gap-tiny">
              <div className="media-wrap _719x420 m_327x198">
                <div className="media-asset display-flex justify-center w-embed">
                  <video
                    className="lazy"
                    poster="https://cdn.prod.website-files.com/5e6b63ac3b6e253f11889f39/650c4cacc5e474856cf684ad_Sam_ROM_Raw_Thumbnail-min.webp"
                    autoPlay=""
                    loop=""
                    muted=""
                  >
                    <source
                      data-src="https://media.rokoko.com/Sam_ROM_Raw.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <p className="caption">
                Sam showcasing the Smartsuit Pro and Smartgloves range of
                motion, in a raw (unedited) mocap session.
                <a
                  href="https://www.rokoko.com/studio"
                  target="_blank"
                  className="text-decoration-underline"
                ></a>
              </p>
            </div>
          </div>
          <div className="width-6-col t_width-6-col m_order-first">
            <div className="display-flex direction-vertical gap-small">
              <h2>From pre to post, capture your motions on the fly</h2>
              <p className="width-5-col-in-6-col">
                Slip into the{" "}
                <a
                  href="/products/smartsuit-pro"
                  aria-current="page"
                  className="w--current"
                >
                  suit
                </a>
                , put on the <a href="/products/smartgloves">gloves</a> and
                start capturing your motions within minutes. Optionally, forward
                the mocap data to your favourite 3D software with{" "}
                <a href="/integrations">our integrations</a>, for a virtual
                production workflow.
                <br />
                Play around with this range of motion raw mocap data recording
                (Mixamo .FBX export from <a href="/products/studio">Studio</a>)
                and see for yourself how easy character animation is with Rokoko
                mocap tools.
              </p>
              <div className="display-flex direction-vertical align-start gap-small">
                <a
                  href="https://media.rokoko.com/ROM_Rokoko_mixamo.fbx.zip"
                  target="_blank"
                  className="button w-button"
                >
                  Download the raw .FBX mocap data
                </a>
                <a
                  href="#modal?popup=popup-rom-video"
                  className="button outline w-button"
                >
                  Watch Sams entire range of motion video
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WorkFlow;
