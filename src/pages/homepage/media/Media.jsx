import media2 from "@images/media2.webp";
import media1 from "@images/media1.webp";
import play from "@images/play.svg";
const Media = () => {
  return (
    <section className="section padding-x-huge t_padding-huge m_padding-xx-large ">
      <div className="container">
        <div className="display-flex direction-vertical gap-x-large t_gap-small">
          <div className="display-flex justify-space-between gap-small m_direction-vertical">
            <div className="width-6-col t_width-6-col">
              <h2>Rokoko mocap is used by thousands of 3D creators</h2>
            </div>
            <div>
              <a
                href="https://www.rokoko.com/insights"
                className="button outline w-button"
              >
                All user stories & reviews
              </a>
            </div>
          </div>
          <div className="display-flex direction-vertical gap-x-large">
            <div className="display-flex direction-vertical gap-small">
              <a
                href="https://www.rokoko.com/insights/a-masterclassName-in-remote-collaboration-live-holographic-show-production-with-nicolas-brunet"
                className="media-wrap _1464x530 t_786x318 m_327x198 w-inline-block"
              >
                <img
                  src={media1}
                  loading="lazy"
                  alt=""
                  className="media-asset"
                />
              </a>
              <div className="display-flex m_direction-vertical m_gap-x-small">
                <div className="width-3-col t_width-4-col">
                  <a
                    href="https://www.rokoko.com/insights/a-masterclassName-in-remote-collaboration-live-holographic-show-production-with-nicolas-brunet"
                    className="text-decoration-none w-inline-block"
                  >
                    <div className="display-flex align-center gap-x-small">
                      <img
                        src={play}
                        loading="lazy"
                        alt="open the link"
                        className="image-play"
                      />
                      <p>Watch the story</p>
                    </div>
                  </a>
                </div>
                <div className="width-1-col t_display-none"></div>
                <a
                  href="https://www.rokoko.com/insights/a-masterclassName-in-remote-collaboration-live-holographic-show-production-with-nicolas-brunet"
                  className="width-6-col t_width-6-col text-decoration-none w-inline-block"
                >
                  <h3 className="h _4">
                    A masterclassName in remote collaboration & live holographic
                    show production with Nicolas Brunet
                  </h3>
                </a>
              </div>
            </div>
            <div className="display-flex gap-small m_direction-vertical m_gap-x-large">
              <div className="width-6-col t_width-6-col">
                <div className="display-flex direction-vertical gap-small t_gap-x-small">
                  <a
                    href="https://www.rokoko.com/insights/trizz-studio"
                    className="media-wrap _720x370 t_381x231 w-inline-block"
                  >
                    <img
                      src={media1}
                      loading="lazy"
                      alt="Colourful animated 3D characters in a scene"
                      sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, 100vw"
                      className="media-asset"
                    />
                  </a>
                  <div className="display-flex justify-space-between gap-small t_direction-vertical t_gap-tiny">
                    <div className="sizing-fixed">
                      <a
                        href="https://www.rokoko.com/insights/trizz-studio"
                        className="text-decoration-none w-inline-block"
                      >
                        <div className="display-flex align-center gap-x-small">
                          <img
                            src={play}
                            loading="lazy"
                            alt="open the link"
                            className="image-play"
                          />
                          <p>Watch the story</p>
                        </div>
                      </a>
                    </div>
                    <a
                      href="https://www.rokoko.com/insights/trizz-studio"
                      className="width-4-col-in-6-col padding-right padding-medium text-decoration-none w-inline-block"
                    >
                      <h4 className="h _5">
                        Trizz Studio - Real-time on-set mocap with multiple
                        performers
                      </h4>
                    </a>
                  </div>
                </div>
              </div>
              <div className="width-6-col t_width-6-col">
                <div className="display-flex direction-vertical gap-small t_gap-x-small">
                  <a
                    href="https://www.rokoko.com/insights/rokoko-user-story-ian-hubert-filmmaker-vfx-artist-master-of-blender3d"
                    className="media-wrap _720x370 t_381x231 w-inline-block"
                  >
                    <img
                      src={media2}
                      loading="lazy"
                      alt="Ian Hubert in his studio"
                      className="media-asset"
                    />
                  </a>
                  <div className="display-flex justify-space-between gap-small t_direction-vertical t_gap-tiny">
                    <div className="sizing-fixed">
                      <a
                        href="https://www.rokoko.com/insights/rokoko-user-story-ian-hubert-filmmaker-vfx-artist-master-of-blender3d"
                        className="text-decoration-none w-inline-block"
                      >
                        <div className="display-flex align-center gap-x-small">
                          <img
                            src={play}
                            loading="lazy"
                            alt="open the link"
                            className="image-play"
                          />
                          <p>Watch the story</p>
                        </div>
                      </a>
                    </div>
                    <a
                      href="https://www.rokoko.com/insights/rokoko-user-story-ian-hubert-filmmaker-vfx-artist-master-of-blender3d"
                      className="width-4-col-in-6-col padding-right padding-medium text-decoration-none w-inline-block"
                    >
                      <h4 className="h _5">
                        Ian Hubert - Filmmaker, VFX artist, master of Blender 3D
                      </h4>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Media;
