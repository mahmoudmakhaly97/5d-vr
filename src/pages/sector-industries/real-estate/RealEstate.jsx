import { Banner } from "@components";

const RealEstate = () => {
  return (
    <div className="pt-5">
      <div className="pt-5">
        <Banner
          className="py-5"
          titles={[
            "📌 Revolutionizing Property Sales with Immersive Experiences",
          ]}
          videosSrc={[
            "https://www.youtube.com/watch?v=d2xkGbVlaSo&ab_channel=5dVR",
          ]}
          tabs={[
            {
              tabName: "Description",
              tabContent:
                "We bring properties to life with 360° virtual tours, VR walk-throughs, and interactive 3D visualizations. Our solutions help real estate developers, agents, and buyers make better-informed decisions without geographical limitations.",
              id: 0,
            },
          ]}
        />
      </div>
    </div>
  );
};
export default RealEstate;
