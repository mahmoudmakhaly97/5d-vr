const CoilPro = () => {
  return (
    <div className="section   t_padding-huge">
      <div className="container">
        <div className="display-flex justify-space-between gap-medium m_direction-vertical">
          <div className="width-6-col t_width-5-col">
            <div className="display-flex justify-center">
              <figure className="width-4-col-in-6-col t_width-full">
                <div className="display-flex direction-vertical gap-tiny">
                  <div className="media-wrap _472x630">
                    <div className="media-asset display-flex justify-center w-embed">
                      <video
                        className="lazy"
                        poster="https://cdn.prod.website-files.com/5e6b63ac3b6e253f11889f39/64d34a994c0b4c9be2693f52_Coil_Doggo_Thumbnail-min.webp"
                        autoPlay=""
                        loop=""
                        muted=""
                        playsInline=""
                      >
                        <source
                          data-src="https://media.rokoko.com/Coil_Doggo_1080x1442.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              </figure>
            </div>
          </div>
          <div className="width-6-col t_width-6-col order-first">
            <div className="display-flex direction-vertical gap-small">
              <h2>The Coil Pro: Unlock pin-point capture precision</h2>
              <p className="width-5-col-in-6-col">
                Now you can unlock uninterrupted accuracy for your
                <a href="/products/smartsuit-pro">Smartsuit Pro II</a> and
                <a href="/products/smartgloves">Smartgloves</a> without the need
                for cameras or markers.
                <br />
                <br />
                The Coil Pro uses the latest innovations in EMF motion capture
                technology to remove drift and occlusion in real-time providing
                global positioning for body and fingers.
                <br />
                <br />
                From props to multi-actor interactions,
                <a
                  href="https://www.rokoko.com/insights/five-coil-pro-features-that-will-transform-your-mocap-workflow"
                  target="_blank"
                >
                  read about the key features
                </a>
                Coil Pro unlocks in your mocap workflow.
              </p>
              <div className="display-flex gap-small children-wrap">
                <a
                  href="https://store.rokoko.com/products/coil-pro"
                  target="_blank"
                  className="button w-button"
                >
                  Buy Coil Pro
                </a>
                <a
                  href="https://calendly.com/product-specialists-rokoko/coil-pro-demo"
                  target="_blank"
                  className="button outline w-button"
                >
                  Book a Coil Pro demo
                </a>
              </div>
              <p className="caption color-green-500">
                Refund guarantee: risk-free 30-day trial
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CoilPro;
