import { Link } from "react-router-dom";
import { ImageMaker } from "@components/common";

const HoverCard = ({ item }) => {
  return (
    <li className="width-4-col sizing-fixed t_width-4-col m_width-2-col">
      <div className="d-flex direction-vertical gap-small">
        <Link to={item.route} className="media-wrap _472x630 w-inline-block">
          <ImageMaker src={item.imgSrc} className="media-asset" />
        </Link>
      </div>
    </li>
  );
};

export default HoverCard;
