import {   Container  } from "reactstrap";
 
import img1 from "@images/full-performance/Discover ai in xr 1.png";
import img2 from "@images/full-performance/Discover ai in xr 2.png";
import img3 from "@images/full-performance/Discover ai in xr 3.png";
import img4 from "@images/full-performance/Discover ai in xr 4.png";
import img5 from "@images/full-performance/Discover ai in xr 5.png";
import img6 from "@images/full-performance/Discover ai in xr 6.png";
import img7 from "@images/full-performance/Discover ai in xr 7.png";
import img8 from "@images/full-performance/Discover ai in xr 8.png";
import img9 from "@images/full-performance/Discover ai in xr 9.png";

import img10 from "@images/full-performance/Industries we serve 1.png"
import img11 from "@images/full-performance/Industries we serve 2.png"
import img12 from "@images/full-performance/Industries we serve 3.png"
import img13 from "@images/full-performance/Industries we serve 4.png"
import img14 from "@images/full-performance/Industries we serve 5.png"
import img15 from "@images/full-performance/Industries we serve 6.png"
import img16 from "@images/full-performance/Industries we serve 7.png"
import img17 from "@images/full-performance/Industries we serve 8.png"
import img18 from "@images/full-performance/Industries we serve 9.png"


import img19 from "@images/full-performance/Featured Projects 1.png"
import img20 from "@images/full-performance/Featured Projects 2.png"
import img21 from "@images/full-performance/Featured Projects 3.png"
import img22 from "@images/full-performance/Featured Projects 4.png"
import img23 from "@images/full-performance/Featured Projects 5.png"
import img24 from "@images/full-performance/Featured Projects 6.png"
import img25 from "@images/full-performance/Featured Projects 7.png"
import img26 from "@images/full-performance/Featured Projects 8.png"
import img27 from "@images/full-performance/Featured Projects 9.png"

 import HoveredCard from "./HoveredCard";
const AboutUs = () => {
  const data = [
    {
     images:[
img1 ,img2 , img3,img4 , img5 , img6 , img7 , img8 , img9
     ]
     },
    {
      images:[
        img10 ,img11 , img12,img13 , img14 , img15 , img16, img17 , img18
             ]
     },
    {
      images:[
        img19 ,img20 , img21,img22 , img23 , img24 , img25 , img26 , img27
             ]
     },
  ];
  return (
    <Container className="py-3 py-lg-5">
      <div >
      
        <div>
           <div className="py-3 d-flex gap-2 flex-column align-items-start">
            <h3 className="h _4">Full Performance Capture</h3>
            <h2 className="h _5 color-grey-500">
            <h2 className="h _5 color-grey-500">
            Transforming Ideas into Immersive Experiences That Shape the Future.

            </h2>
            </h2>          </div>
        </div>
        <ul role="list" className="display-flex gap-small carousel">
          {data.map((item, index) => (
            <HoveredCard  key={index} images={item.images} />  
           
             
          ))}
        </ul>
      </div>
    </Container>
  );
};
export default AboutUs;
