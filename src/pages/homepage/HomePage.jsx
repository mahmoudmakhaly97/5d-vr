import { useState, useEffect } from "react";
import img1 from "../../assets/images/002/002_00014.png";
import img2 from "../../assets/images/002/002_00015.png";
import img3 from "../../assets/images/002/002_00016.png";
import img4 from "../../assets/images/002/002_00017.png";
import img5 from "../../assets/images/002/002_00018.png";
import img6 from "../../assets/images/002/002_00019.png";
import img7 from "../../assets/images/002/002_00020.png";
import img8 from "../../assets/images/002/002_00021.png";
import img9 from "../../assets/images/002/002_00022.png";
import img10 from "../../assets/images/002/002_00023.png";
import img11 from "../../assets/images/002/002_00024.png";
import img12 from "../../assets/images/002/002_00025.png";
import img13 from "../../assets/images/002/002_00026.png";
import img14 from "../../assets/images/002/002_00027.png";
import img15 from "../../assets/images/002/002_00028.png";
import img16 from "../../assets/images/002/002_00029.png";
import img17 from "../../assets/images/002/002_00030.png";
import img18 from "../../assets/images/002/002_00031.png";
import img19 from "../../assets/images/002/002_00032.png";
import img20 from "../../assets/images/002/002_00034.png";
import img21 from "../../assets/images/002/002_00035.png";
import img22 from "../../assets/images/002/002_00036.png";
import img23 from "../../assets/images/002/002_00037.png";
import img24 from "../../assets/images/002/002_00038.png";
import img25 from "../../assets/images/002/002_00039.png";
import img26 from "../../assets/images/002/002_00040.png";
import img27 from "../../assets/images/002/002_00041.png";
import img28 from "../../assets/images/002/002_00042.png";
import img29 from "../../assets/images/002/002_00043.png";
import img30 from "../../assets/images/002/002_00044.png";
import img31 from "../../assets/images/002/002_00045.png";
import img32 from "../../assets/images/002/002_00046.png";
import img33 from "../../assets/images/002/002_00047.png";
import img34 from "../../assets/images/002/002_00048.png";
import img35 from "../../assets/images/002/002_00049.png";
import img36 from "../../assets/images/002/002_00050.png";
import img37 from "../../assets/images/002/002_00051.png";
import img38 from "../../assets/images/002/002_00052.png";
import img39 from "../../assets/images/002/002_00053.png";
import img40 from "../../assets/images/002/002_00054.png";
import img41 from "../../assets/images/002/002_00055.png";
import img42 from "../../assets/images/002/002_00056.png";
import img43 from "../../assets/images/002/002_00057.png";
import { Container } from "reactstrap";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
  img39,
  img40,
  img41,
  img42,
  img43,
  // Add all 30 images
];

const HomePage = () => {
  const [bgImage, setBgImage] = useState(images[0]);

  useEffect(() => {
    const changeBackgroundOnScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const index = Math.floor((scrollPosition / scrollHeight) * images.length);

      if (index < images.length) {
        setBgImage(images[index]);
      }
    };

    window.addEventListener("scroll", changeBackgroundOnScroll);
    return () => window.removeEventListener("scroll", changeBackgroundOnScroll);
  }, []);

  return (
    <div className="homepage d-flex justify-content-center align-items-center text-white">
      <div className=" position-fixed shape-container d-none d-lg-block">
        <img src={bgImage} alt="" />
      </div>
      <div className="homepage-content">
        <Container></Container>
      </div>
    </div>
  );
};
export default HomePage;
