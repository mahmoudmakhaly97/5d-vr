import { Banner } from "@components";

const CulturalHeritage = () => {
  return (
    <div className="pt-5">
      <div className="pt-5">
        <Banner
          className="py-5"
          titles={["📌 Preserving History Through Digital Innovation"]}
          videosSrc={[
            "https://www.youtube.com/watch?v=QztWgYJXA24&ab_channel=5dVR",
          ]}
          tabs={[
            {
              tabName: "Description",
              tabContent:
                "Preserving History Through Digital Innovation We bridge the past and future by bringing cultural heritage to life with immersive technology. Our AR and VR solutions enable users to explore historical sites, museums, and artifacts in an engaging and educational way.",
              id: 0,
            },
          ]}
        />
      </div>
    </div>
  );
};
export default CulturalHeritage;
