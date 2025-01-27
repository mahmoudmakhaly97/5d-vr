import { Link } from "react-router-dom";

const FooterCol = ({ links }) => {
  return (
    <div className="t_border-bottom border-color-grey-500">
      <div className="t_footer-dropdown-button">
        <h5>{links.title}</h5>
      </div>
      <ul
        role="list"
        className="display-flex direction-vertical gap-xx-small t_margin-bottom t_margin-small  "
      >
        {links.subTitle.map((subTitle) => (
          <li key={subTitle}>
            <Link
              to=""
              className="display-inline-block color-grey-500 text-decoration-none"
            >
              {subTitle}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FooterCol;
