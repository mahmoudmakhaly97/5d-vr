import { Banner } from "@components";
import "./case-studies.css";
const CaseStudies = () => {
  return (
    <div className="pt-5 case-studies">
      <div className="pt-5">
        <Banner
          className="py-5"
          titles={[
            "AI VR Cyber Security ",
            "FST VR Training",
            "Anamorphic screens",
            "RiseUp AI Summit 2025 – Bringing AI to Life",
            "Interactive Social Media Filters",
            "EPROM – Immersive VR Training for Oil & Gas",
            "ABB SMOS VR Experience – Training & Showcase",
            "Expo Milano 2015 – Egyptian Pavilion",
            "Emaar VR Experience & Interactive Touchscreen",
            "VR Time Machine Ride – 2023 | Relish Solutions",
          ]}
          videosSrc={[
            "https://www.youtube.com/watch?v=o1aDCCOdBdc&ab_channel=5dVR",
            "https://www.youtube.com/watch?v=YwJKIjOgB0o&list=PL_Gw46Q3y1aWcHufCB6nUNcRXDKDnI4bG&index=1&ab_channel=5dVR",
            "https://www.youtube.com/watch?v=IjRELfYVHYQ&ab_channel=5dVR",
            "https://www.youtube.com/shorts/lPdK5PlVAW8",
            "https://www.youtube.com/watch?v=AB4eM8H_03k&ab_channel=5dVR",
            "https://www.youtube.com/watch?v=lz6M6ozYD6Q&ab_channel=5dVR",
            "https://www.youtube.com/watch?v=Q9GNJEBnTcw&ab_channel=5dVR",
            "https://www.youtube.com/shorts/lPdK5PlVAW8",
            "https://www.youtube.com/watch?v=d2xkGbVlaSo&ab_channel=5dVR",
            "https://www.youtube.com/watch?v=o1aDCCOdBdc&ab_channel=5dVR",
          ]}
          tabs={[
            {
              tabName: "Cyber Security",
              tabContent:
                "In this immersive Cybersecurity AI VR training, users step into a realistic operating room environment, where they can select their preferred language before facing simulated cyber-attacks that challenge their skills. Guided by Dr. Saeed, an advanced AI character and cybersecurity expert, trainees are not alone in tackling these threats. Dr. Saeed is always available to answer questions, provide insights, and offer strategic advice, ensuring that each trainee feels supported and empowered as they learn to identify, analyze, and counteract various types of cyber threats. This hands-on training is designed to build confidence and expertise in a safe, interactive environment.",
              id: 0,
            },
            {
              tabName: "FST VR",
              tabContent:
                "A series of VR training modules for FST, where each module is a VR experience, that walks the user in the step by step guide into doing the correct action, till the user is totally capable of doing the tasks, such as vehicle lifting or changing a tyre, while avoiding the hazards in real life and training in a replica of the real environment. ",
              id: 1,
            },
            {
              tabName: "Anamorphic screens",
              tabContent:
                "Creating a cutting-edge experience that create the illusion of 3D depth on flat surfaces. Itachieves this effect using forced perspective.“ technique. This involves mathematically distorting images in a way that, when viewed from a specific vantage point, creates the illusion of depth and dimensionality. Using this technology along side with programming, we created an interactive deep screen experience; that allows users to engage through scanning a QR code, to send messages or images that shows instantly on the screen in the outdoors.",
              id: 2,
            },
            {
              tabName: "RiseUp AI",
              tabContent:
                "As the experience partner for RiseUp AI Summit 2025, we introduced Sparky, an AI-powered MC who took center stage, engaging audiences by introducing speakers and interacting with attendees. At our booth, visitors could chat with Sparky for summit guidance and even snap a selfie for a memorable experience.Beyond AI, we elevated the event with a stunning anamorphic screen experience and a thrilling multiplayer free-roam VR shooting game, adding excitement and energy to the summit.",
              id: 3,
            },

            {
              tabName: " Social Media ",
              tabContent:
                "We create engaging, interactive social media filters that bring brands to life. From face-tracking AR effects to immersive 3D animations, our filters enhance user engagement, boost brand awareness, and drive viral interactions across platforms like Instagram, Snapchat, and TikTok.",
              id: 4,
            },
            {
              tabName: "EPROM – Immersive VR ",
              tabContent:
                "The EPROM VR Training Simulator is a cutting-edge virtual reality experience designed to enhance safety and operational training on centrifugal pump station in the oil & gas industry. This immersive solution allows trainees to navigate a digital twin environment, interact with complex machinery, and practice critical procedures in a risk-free, controlled setting.By combining real-time simulations, interactive learning, and high-fidelity visuals, the EPROM project revolutionizes industrial training, ensuring greater efficiency, safety, and knowledge retention for industry professionals.",
              id: 5,
            },
            {
              tabName: "ABB SMOS  ",
              tabContent:
                "The ABB SMOS VR Experience is a dynamic blend of training and marketing, designed to showcase the SMOS module at exhibitions while also serving as an interactive learning tool.Through realistic VR simulations, users explore the SMOS module’s capabilities, interact with its features, and understand its role in motor safety and efficiency. The experience not only educates engineers and technicians on proper operation but also highlights ABB’s cutting-edge industrial solutions in an engaging and immersive way.",
              id: 6,
            },
            {
              tabName: "Expo Milano ",
              tabContent:
                "At Expo Milano 2015, we brought Egypt’s culinary heritage and agricultural contributions to life through an interactive, tech-driven experience. The pavilion featured an AR broadcast, holographic displays, a hologram curtain, and an interactive AR experience, immersing visitors in Egypt’s role in global food sustainability. A photobooth activation added a shareable, engaging touch, making the pavilion a standout showcase that blended technology and tradition",
              id: 7,
            },
            {
              tabName: "Emaar  Experience n",
              tabContent:
                "We crafted a cutting-edge VR and touchscreen experience for Emaar, bringing their visionary real estate developments to life through immersive technology. The VR experience allowed users to step into Emaar’s luxurious properties, exploring interiors and landscapes in a fully interactive, lifelike environment, offering a firsthand feel of their future homes.Complementing the VR, an interactive touchscreen provided an intuitive way to navigate Emaar’s portfolio, showcasing detailed property insights, 3D floor plans, and high-resolution visuals. This seamless fusion of VR and interactive displays created an engaging and informative experience, allowing potential buyers to explore and connect with Emaar’s world-class developments",
              id: 8,
            },
            {
              tabName: " Time Machine",
              tabContent:
                "In collaboration with Relish Solutions, we developed an exhilarating VR Time Machine Ride, blending thrilling gameplay with synchronized physical movement. Guided by Dr. Einstein, players embark on a high-speed journey through time, helping him navigate history while shooting dinosaurs, spaceships, and other time-warped targets.Designed for malls across Kuwait, the VR ride is fully synced with a physical train, enhancing immersion as players feel every turn, acceleration, and action-packed moment. This dynamic fusion of VR and motion simulation delivers a thrilling, interactive adventure",
              id: 9,
            },
          ]}
        />
      </div>
    </div>
  );
};
export default CaseStudies;
