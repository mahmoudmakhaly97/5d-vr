import { Banner } from "@components";
import KeyApplications from "./../../services/key-applications/KeyApplications";

const OurStrengths = () => {
  return (
    <div className="pt-5">
      <div className="pt-5">
        <Banner
          className="py-5"
          titles={["Our Strengths"]}
          videosSrc={[
            "https://www.youtube.com/watch?v=Sfe4qMcveL8&ab_channel=5dVR",
          ]}
          tabs={[
            {
              tabName: "Description",
              tabContent: (
                <KeyApplications
                  applications={[
                    {
                      key: " ",
                      value:
                        "<strong>Technology-Agnostic Expertise: </strong>We develop solutions that integrate seamlessly with various hardware and software platforms, ensuring maximum flexibility and scalability for our clients. We are not tied to any single technology, allowing us to choose the best tools for each project.",
                    },

                    {
                      key: "",
                      value:
                        " <strong>	Global Reach: </strong> With a diverse client base spanning the Middle East, Africa, Europe, and the USA, we have a deep understanding of different markets and cultures. We can deliver solutions that are tailored to the specific needs of each region.",
                    },
                    {
                      key: " ",
                      value:
                        "  <strong> Award-Winning Innovation: </strong> Our commitment to innovation has been recognized with numerous awards. We are constantly pushing the boundaries of what's possible with XR and AI to create truly transformative experiences.",
                    },
                    {
                      key: " ",
                      value:
                        "  <strong> Collaborative Approach: </strong> Collaborative Approach: We work closely with our clients throughout the entire process, from initial consultation to final delivery. We believe that collaboration is key to creating successful XR solutions.",
                    },
                  ]}
                />
              ),
              id: 0,
            },
          ]}
        />
      </div>
    </div>
  );
};
export default OurStrengths;
