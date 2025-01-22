import Video from "../../common/Video";

const SpeedUp = () => {
  return (
    <div className="section padding-x-huge t_padding-huge m_padding-xx-large">
      <div className="container">
        <div className="display-flex direction-vertical gap-x-large">
          <div className="display-flex direction-vertical align-center gap-medium">
            <h2>Speed up your character animation workflow</h2>
          </div>
          <div className="wide-media-tabs">
            <div className="display-flex direction-vertical gap-x-large t_gap-large">
              <div className="position-relative">
                <div className="macbook-screen">
                  <div className="media-wrap _16x9 border-radius-0">
                    <div className="media-asset transition-opacity-400 w-embed">
                      <Video
                        poster={
                          "https://cdn.prod.website-files.com/5e6b63ac3b6e253f11889f39/634e50fcd2c73b4998e83f6f_SSP2-LAUNCH-1464x530-thumbnail.webp"
                        }
                        src={
                          "https://media.rokoko.com/SSP2-LAUNCH-1464x530.mp4"
                        }
                        message="  Your browser does not support the video tag.
"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SpeedUp;
