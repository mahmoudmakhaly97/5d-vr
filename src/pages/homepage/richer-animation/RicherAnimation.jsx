import { Button } from "@components/common";
const RicherAnimation = () => {
  return (
    <header>
      <div className="section padding-vertical   t_padding-huge pt-5">
        <div className="container text-align-center py-5 mt-5">
          <div className="display-flex direction-vertical gap-x-large">
            <div className="display-flex direction-vertical align-center gap-medium t_gap-small">
              <h2 className="h _0">
                Experience the Future of Immersive Technology with 5dVR
              </h2>
              <div className="width-8-col">
                <h2 className="h _5 color-grey-500">
                  Crafting Immersive Experiences That Inspire, Engage, and
                  Transform.
                </h2>
              </div>
              <div className="display-flex align-center justify-center direction-vertical gap-micro">
                <Button variant="secondary">Lorem Ipsum</Button>
              </div>
            </div>
            <figure className="display-flex direction-vertical gap-tiny">
              <div className="media-wrap _1464x530 t_786x318 m_327x198">
                <div className="media-asset display-flex justify-center w-embed">
                  <video
                    poster="https://cdn.prod.website-files.com/6310adc0eca8855210b155c5/6339fbc59841f97babaf81ca_hero.webp"
                    autoPlay=""
                    loop=""
                    muted=""
                    playsInline=""
                  >
                    <source
                      src="media/Pwnisher-alternate-realities-1464x530.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <p className="caption text-gray">
                Transforming Ideas into Immersive Experiences That Shape the
                Future
              </p>
            </figure>
          </div>
        </div>
      </div>
    </header>
  );
};
export default RicherAnimation;
