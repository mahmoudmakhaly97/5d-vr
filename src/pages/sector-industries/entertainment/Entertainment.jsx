import { Banner } from "@components";

const Entertainment = () => {
  return (
    <div className="pt-5">
      <div className="pt-5">
        <Banner
          className="py-5"
          titles={[
            " 📌 Bringing Stories to Life Through Immersive Experiences",
          ]}
          videosSrc={[
            "https://www.youtube.com/watch?v=fRXQQsCGn24&ab_channel=5dVR",
          ]}
          tabs={[
            {
              tabName: "Description",
              tabContent:
                "We push the boundaries of entertainment with XR-driven experiences that captivate audiences and redefine digital engagement. From immersive gaming to interactive storytelling, our solutions transform how people interact with content.",
              id: 0,
            },
          ]}
        />
      </div>
    </div>
  );
};
export default Entertainment;
