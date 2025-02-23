import { Banner } from "@components";

const EventsAndExhibitions = () => {
  return (
    <div className="pt-5">
      <div className="pt-5">
        <Banner
          className="py-5"
          titles={["📌 Creating Immersive and Engaging Event Experiences"]}
          videosSrc={[
            "https://www.youtube.com/watch?v=lfVftpVrThM&ab_channel=5dVR",
          ]}
          tabs={[
            {
              tabName: "Description",
              tabContent:
                "We elevate events and exhibitions by integrating immersive technologies that engage visitors like never before. From interactive installations to AR-powered event activations, we make every moment memorable.",
              id: 0,
            },
          ]}
        />
      </div>
    </div>
  );
};
export default EventsAndExhibitions;
