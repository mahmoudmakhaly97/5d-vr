import { Banner } from "@components";

const OurVision = () => {
  return (
    <div className="py-5">
      <Banner
        className="py-5 mt-5"
        tabs={[
          {
            tabName: "Capture",
            tabContent:
              "Connect Rokoko Full Performance Capture mocap tools for body (Smartsuit Pro II), finger (Smartgloves) and face capture (Face Capture app), or use Rokoko Vision video-to-animation AI mocap, and capture your motions within minutes, at home, in a studio or even outside",
            id: 0,
          },
          {
            tabName: "Animate",
            tabContent:
              "A new animation system allows manipulation of mocap animation data through retargeting, custom character import and pose correction tools. Use Rokoko Studio software as your one-stop shop for all your character animation needs.",
            id: 1,
          },
          {
            tabName: "Live stream",
            tabContent:
              "Send the mocap animation data of the Smartsuit Pro, Smartgloves and Face Capture in real-time to your favourite 3D software, including Unreal Engine, Unity, Blender, Maya, Cinema 4D, Houdini, MotionBuilder and iClone, thanks to our native integrations",
            id: 2,
          },
          {
            tabName: "Edit",
            tabContent:
              "Use intuitive filters in Rokoko Studio, on real-time mocap data or on saved recordings, to enhance the quality of the animations if needed. Filters include root locking, foot locking changes, elevation tracking, knee pop smoothing and more.",
            id: 3,
          },
          {
            tabName: "Export",
            tabContent:
              "Export your mocap animations from Rokoko Studio to .FBX or .BVH, including industry compatible skeleton preset options (Human IK, Mixamo etc.), mesh export and custom export overrides.",
            id: 4,
          },
        ]}
      />
    </div>
  );
};
export default OurVision;
