import { Button } from "@components/common";

const Partnerships = () => {
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
              <h2>Our Key Partnerships</h2>
              <p className="width-5-col-in-6-col text-gray">
                <strong>TACIES – Oman : </strong>
                <span>
                  A collaboration aimed at pushing the boundaries of immersive
                  education and science, enhancing interactive experiences
                  across Oman. Together, we are pioneering AR and VR solutions
                  that inspire curiosity and foster learning.
                </span>
              </p>
              <p className="width-5-col-in-6-col text-gray">
                <strong>Xceed Immersive – Dubai : </strong>
                <span>
                  Partnering to deliver world-class immersive solutions in the
                  UAE, from corporate training to large-scale entertainment
                  experiences. Xceed Immersive and 5dVR work hand-in-hand to
                  redefine possibilities in AR, VR, and MR technologies.
                </span>
              </p>
              <div className="display-flex gap-small children-wrap">
                <Button variant="secondary">Lorem Ipsum</Button>
                <Button variant="outline">Lorem Ipsum</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Partnerships;
