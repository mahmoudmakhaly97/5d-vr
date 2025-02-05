import React, { useState } from "react";
import { Link } from "react-router-dom";

const OffcanvasDropdown = ({ item }) => {
  const [toggle, setToggle] = useState(false);

  // Function to close the offcanvas without reloading the page
  const closeOffcanvas = () => {
    window.scroll(0, 0);
    const offcanvasElement = document.querySelector(".offcanvas.show");
    if (offcanvasElement) {
      offcanvasElement.classList.remove("show");
      offcanvasElement.style.visibility = "hidden";
      document.body.classList.remove("offcanvas-backdrop");
      document.body.style.overflow = "auto"; // 🔥 Fix: Restore scrolling
    }
  };

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
        <span>{item.dropdownLink}</span>
        <i
          className={`fa-solid ${toggle ? "fa-chevron-up" : "fa-chevron-down"}`}
        ></i>
      </button>
      <ul
        className="dropdown-menu position-relative"
        aria-labelledby="dropdownMenuButton1"
      >
        {item.features.map((feature, index) => (
          <React.Fragment key={index}>
            <h6 className="my-2">{feature?.mainTitle}</h6>
            {feature.subTitles.map((subItem, subIndex) => (
              <li key={subIndex + 2}>
                <Link
                  className="dropdown-item"
                  to={subItem.route}
                  onClick={closeOffcanvas}
                >
                  {subItem.subTitle}
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
