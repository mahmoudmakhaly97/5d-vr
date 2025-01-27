import React, { useState } from "react";
import { Link } from "react-router-dom";

const OffcanvasDropdown = ({ item }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="dropdown" key={item.id}>
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={() => setToggle(!toggle)}
      >
        <span> {item.dropdownLink}</span>
        <i
          className={`fa-solid ${toggle ? "fa-chevron-down" : "fa-chevron-up"}`}
        ></i>{" "}
      </button>
      <ul
        className="dropdown-menu position-relative"
        aria-labelledby="dropdownMenuButton1"
      >
        {item.features.map((item, index) => (
          <React.Fragment key={index}>
            <h6 className="my-2">{item?.mainTitle}</h6>
            {item.subTitles.map((item, index) => (
              <li key={index + 2}>
                <Link className="dropdown-item" to={item.route}>
                  {item.subTitle}
                </Link>
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};
export default OffcanvasDropdown;
