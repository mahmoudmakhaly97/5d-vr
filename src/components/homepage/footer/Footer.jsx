const Footer = () => {
  return (
    <footer className="section padding-top padding-huge overflow-hidden bg-dark-900">
      <div className="container padding-bottom padding-medium font-weight-500">
        <div className="display-flex direction-vertical gap-huge t_gap-large">
          <div className="display-flex gap-small t_direction-vertical t_align-start">
            <div className="width-4-col display-flex align-start">
              <a
                href="#"
                className="logo display-flex align-center gap-x-large padding-0 w-inline-block"
              >
                <div className="p color-bright-100 display-flex margin-0 w-embed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    fill="none"
                  >
                    <title>Rokoko logo</title>
                    <g clipPath="url(#A)">
                  
                    </g>
                    <defs>
                      <clipPath id="A">
                        <path
                          fill="currentColor"
                          transform="translate(.012)"
                          d="M0 0h24v24H0z"
                        ></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="p color-bright-100 display-flex w-embed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="147"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M18.792 17.373c-.432-2.663-1.483-4.119-3.243-4.831 2.378-.743 3.923-2.57 3.923-5.481 0-3.995-2.873-6.441-8.123-6.441H.012v22.761h3.552v-9.507h7.228c2.78 0 4.015 1.425 4.448 4.428l.741 5.079h3.799l-.988-6.008zM3.564 10.932V3.716h7.568c3.089 0 4.664 1.177 4.664 3.623 0 2.415-1.575 3.592-4.664 3.592H3.564zM34.82 24c6.826 0 11.707-5.265 11.707-12.046C46.527 5.203 41.894 0 34.975 0 28.18 0 23.268 5.265 23.268 12.047 23.268 18.797 27.932 24 34.82 24zm.062-3.283c-4.849 0-7.907-3.778-7.907-8.702 0-4.955 3.058-8.733 7.938-8.733s7.938 3.778 7.938 8.702c0 4.955-3.058 8.733-7.969 8.733zm32.982 2.664h4.232L62.86 8.888 71.57.589h-4.417L55.416 11.582V.619h-3.552V23.38h3.552v-7.804l4.633-4.397 7.815 12.201zM84.682 24c6.826 0 11.707-5.265 11.707-12.046C96.388 5.203 91.755 0 84.836 0 78.041 0 73.13 5.265 73.13 12.047 73.129 18.797 77.794 24 84.682 24zm.062-3.283c-4.849 0-7.907-3.778-7.907-8.702 0-4.955 3.058-8.733 7.938-8.733s7.938 3.778 7.938 8.702c0 4.955-3.058 8.733-7.969 8.733zm32.981 2.664h4.232l-9.236-14.493 8.711-8.299h-4.417l-11.738 10.994V.619h-3.552V23.38h3.552v-7.804l4.633-4.397 7.815 12.201zm16.818.619c6.826 0 11.706-5.265 11.706-12.046C146.249 5.203 141.616 0 134.697 0c-6.795 0-11.706 5.265-11.706 12.047 0 6.751 4.664 11.954 11.552 11.954zm.061-3.283c-4.849 0-7.907-3.778-7.907-8.702 0-4.955 3.058-8.733 7.938-8.733s7.939 3.778 7.939 8.702c0 4.955-3.058 8.733-7.97 8.733z"></path>
                  </svg>
                </div>
              </a>
            </div>
            <div className="width-6-col">
              <p className="color-bright-100 t_margin-bottom">
                Turn motion into magic.
              </p>
            </div>
            <div className="width-2-col">
              <div className="w-locales-list">
                <div data-hover="false" data-delay="0" className="w-dropdown">
                  <div
                    id="weglot-button"
                    className="button small outline display-flex align-center gap-x-small w-dropdown-toggle"
                  >
                    <img
                      src="images/65fb584870ccd0b5df91dc17_Globe_icon_SVG.svg"
                      loading="lazy"
                      width="20"
                      alt=""
                      className="border-radius-0"
                    />
                    <div className="p color-bright-100 margin-right">
                      English
                    </div>
                    <div className="display-flex color-bright-100 w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="8"
                        fill="none"
                      >
                        <path
                          d="M1 1.75l4.146 4.146a.5.5 0 0 0 .707 0L10 1.75"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <nav className="language-picker-dropdown border-color-bright-100 bg-dark-900 bg-switch-on w-dropdown-list">
                    <div role="list" className="w-locales-items">
                      <div
                        role="listitem"
                        className="display-flex gap-x-small text-decoration-none color-grey-500 hover-color-bright-100 hover-opacity-100 w-locales-item"
                      >
                        <a
                          hrefLang="en"
                          href="#"
                          aria-current="page"
                          className="color-grey-500 text-decoration-none w--current"
                        >
                          English
                        </a>
                      </div>
                      <div
                        role="listitem"
                        className="display-flex gap-x-small text-decoration-none color-grey-500 hover-color-bright-100 hover-opacity-100 w-locales-item"
                      >
                        <a
                          hrefLang="ja"
                          href="#"
                          className="color-grey-500 text-decoration-none"
                        >
                          日本語
                        </a>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="display-flex gap-small t_direction-vertical t_gap-xx-large">
            <div className="width-8-col">
              <div className="display-flex gap-small t_direction-vertical t_gap-0">
                <div className="width-2-col-in-8-col">
                  <div className="t_border-bottom border-color-grey-500">
                    <div tabIndex="0" className="t_footer-dropdown-button">
                      <h5>Capture tools</h5>
                      <div className="display-none t_display-flex color-bright-100 w-embed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="8"
                          fill="none"
                        >
                          <path
                            d="M1 1.75l4.146 4.146a.5.5 0 0 0 .707 0L10 1.75"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <ul
                      role="list"
                      className="display-flex direction-vertical gap-xx-small t_margin-bottom t_margin-small t_display-none"
                    >
                      <li>
                        <a
                          href="#"
                          className="display-inline-block color-grey-500 text-decoration-none"
                        >
                          Full Performance Capture
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          aria-current="page"
                          className="display-inline-block color-grey-500 text-decoration-none w--current"
                        >
                          Smartsuit Pro II
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="display-inline-block color-grey-500 text-decoration-none"
                        >
                          Smartgloves
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="display-inline-block color-grey-500 text-decoration-none"
                        >
                          Coil Pro
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="display-inline-block color-grey-500 text-decoration-none"
                        >
                          Face Capture
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="display-inline-block color-grey-500 text-decoration-none"
                        >
                          Headcam
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="display-inline-block color-grey-500 text-decoration-none"
                        >
                          Headrig
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="display-inline-block color-grey-500 text-decoration-none"
                        >
                          Studio Software
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="display-inline-block color-grey-500 text-decoration-none"
                        >
                          Rokoko Vision
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="display-inline-block color-grey-500 text-decoration-none"
                        >
                          Motion Library
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="display-inline-block color-grey-500 text-decoration-none"
                        >
                          Request a Quote
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="display-inline-block color-grey-500 text-decoration-none"
                        >
                          Book a demo
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="display-inline-block color-grey-500 text-decoration-none"
                        >
                          Get in touch
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="width-2-col-in-8-col">
                  <div className="t_border-bottom border-color-grey-500">
                    <div tabIndex="0" className="t_footer-dropdown-button">
                      <h5>Integrations</h5>
                      <div className="display-none t_display-flex color-bright-100 w-embed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="8"
                          fill="none"
                        >
                          <path
                            d="M1 1.75l4.146 4.146a.5.5 0 0 0 .707 0L10 1.75"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <ul
                      role="list"
                      className="display-flex direction-vertical gap-xx-small t_margin-bottom t_margin-small t_display-none"
                    >
                      <li>
                        <a
                          href="#"
                          className="display-inline-block color-grey-500 text-decoration-none"
                        >
                          Blender
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="display-inline-block color-grey-500 text-decoration-none"
                        >
                          Unreal
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="display-inline-block color-grey-500 text-decoration-none"
                        >
                          Unity
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="display-inline-block color-grey-500 text-decoration-none"
                        >
                          iClone
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="display-inline-block color-grey-500 text-decoration-none"
                        >
                          Cinema 4D
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="display-inline-block color-grey-500 text-decoration-none"
                        >
                          Maya
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="display-inline-block color-grey-500 text-decoration-none"
                        >
                          Houdini
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="display-inline-block color-grey-500 text-decoration-none"
                        >
                          MotionBuilder
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="display-inline-block color-grey-500 text-decoration-none"
                        >
                          Cartoon Animator 4
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="display-inline-block color-grey-500 text-decoration-none"
                        >
                          See all integrations
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="width-2-col-in-8-col">
                  <div className="display-flex direction-vertical gap-medium t_gap-0">
                    <div className="t_border-bottom border-color-grey-500">
                      <div tabIndex="0" className="t_footer-dropdown-button">
                        <h5>Use cases</h5>
                        <div className="display-none t_display-flex color-bright-100 w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11"
                            height="8"
                            fill="none"
                          >
                            <path
                              d="M1 1.75l4.146 4.146a.5.5 0 0 0 .707 0L10 1.75"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <ul
                        role="list"
                        className="display-flex direction-vertical gap-xx-small t_margin-bottom t_margin-small t_display-none"
                      >
                        <li>
                          <a
                            href="#"
                            className="display-inline-block color-grey-500 text-decoration-none"
                          >
                            Animation, Film & VFX
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="display-inline-block color-grey-500 text-decoration-none"
                          >
                            Game, AR & VR development
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="display-inline-block color-grey-500 text-decoration-none"
                          >
                            Academia & Education
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="display-inline-block color-grey-500 text-decoration-none"
                          >
                            Customer user stories
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="t_border-bottom border-color-grey-500">
                      <div tabIndex="0" className="t_footer-dropdown-button">
                        <h5>Learn</h5>
                        <div className="display-none t_display-flex color-bright-100 w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11"
                            height="8"
                            fill="none"
                          >
                            <path
                              d="M1 1.75l4.146 4.146a.5.5 0 0 0 .707 0L10 1.75"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <ul
                        role="list"
                        className="display-flex direction-vertical gap-xx-small t_margin-bottom t_margin-small t_display-none"
                      >
                        <li>
                          <a
                            href="#"
                            className="display-inline-block color-grey-500 text-decoration-none"
                          >
                            Events
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="display-inline-block color-grey-500 text-decoration-none"
                          >
                            Tutorials
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="display-inline-block color-grey-500 text-decoration-none"
                          >
                            Free resources
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="display-inline-block color-grey-500 text-decoration-none"
                          >
                            Reviews
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="display-inline-block color-grey-500 text-decoration-none"
                          >
                            Artist spotlight
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="display-inline-block color-grey-500 text-decoration-none"
                          >
                            Insights
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="display-inline-block color-grey-500 text-decoration-none"
                          >
                            Get sponsored
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="width-2-col-in-8-col">
                  <div className="display-flex direction-vertical gap-medium t_gap-0">
                    <div className="t_border-bottom border-color-grey-500">
                      <div tabIndex="0" className="t_footer-dropdown-button">
                        <h5>Support</h5>
                        <div className="display-none t_display-flex color-bright-100 w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11"
                            height="8"
                            fill="none"
                          >
                            <path
                              d="M1 1.75l4.146 4.146a.5.5 0 0 0 .707 0L10 1.75"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <ul
                        role="list"
                        className="display-flex direction-vertical gap-xx-small t_margin-bottom t_margin-small t_display-none"
                      >
                        <li>
                          <a
                            href="#"
                            target="_blank"
                            className="display-inline-block color-grey-500 text-decoration-none"
                          >
                            Rokoko tools video guides
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            target="_blank"
                            className="display-inline-block color-grey-500 text-decoration-none"
                          >
                            Workflow video guides
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            target="_blank"
                            className="display-inline-block color-grey-500 text-decoration-none"
                          >
                            Help Center
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            target="_blank"
                            className="display-inline-block color-grey-500 text-decoration-none"
                          >
                            Talk to a Support Engineer
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            target="_blank"
                            className="display-inline-block color-grey-500 text-decoration-none"
                          >
                            Request a feature
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="t_border-bottom border-color-grey-500">
                      <div tabIndex="0" className="t_footer-dropdown-button">
                        <h5>About</h5>
                        <div className="display-none t_display-flex color-bright-100 w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11"
                            height="8"
                            fill="none"
                          >
                            <path
                              d="M1 1.75l4.146 4.146a.5.5 0 0 0 .707 0L10 1.75"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <ul
                        role="list"
                        className="display-flex direction-vertical gap-xx-small t_margin-bottom t_margin-small t_display-none"
                      >
                        <li>
                          <a
                            href="#"
                            target="_blank"
                            className="display-inline-block color-grey-500 text-decoration-none"
                          >
                            Careers
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="display-inline-block color-grey-500 text-decoration-none"
                          >
                            Our story
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="width-4-col order-first t_order-last">
              <div className="display-flex direction-vertical gap-xx-large">
                <div
                  id="footer-form"
                  className="display-flex direction-vertical gap-small margin-0 w-form"
                >
                  <h5>Subscribe to our newsletter</h5>

                  <div className="padding-0 bg-transparent text-align-left w-form-done">
                    <div className="display-flex direction-vertical gap-medium">
                      <div className="display-flex direction-vertical gap-tiny">
                        <div className="display-flex align-center gap-x-small">
                          <h5>That went well!</h5>
                          <img
                            src="images/633b899b4fb6f9ae0ea69bb5_Check%20mark%20green.svg"
                            loading="lazy"
                            alt=""
                          />
                        </div>
                        <p className="color-bright-100">
                          Thank you for registering. You are subscribed to email
                          updates.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="padding-0 bg-transparent w-form-fail">
                    <div className="display-flex direction-vertical gap-tiny text-align-left">
                      <div className="display-flex align-center gap-x-small">
                        <h5>Oops, there was an error!</h5>
                        <img
                          src="images/633b899b4fb6f906efa69bb6_error%20icon.svg"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                      <p className="color-bright-100">
                        Something went wrong, please try again.
                      </p>
                    </div>
                  </div>
                </div>
                <ul
                  role="list"
                  className="display-flex direction-vertical gap-x-small"
                >
                  <li className="display-flex">
                    <a
                      href="#"
                      target="_blank"
                      className="display-flex gap-medium text-decoration-none w-inline-block"
                    >
                      <div className="display-flex w-embed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="22"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.58.805h9.533c3.062 0 5.58 2.522 5.58 5.589v9.496c0 3.066-2.522 5.589-5.58 5.589H5.58c-3.062 0-5.58-2.526-5.58-5.588V6.393C0 3.327 2.522.805 5.58.805zM15.9 4.413a1.2 1.2 0 0 1 .833.352c.221.222.348.521.352.835-.004.313-.13.613-.352.834a1.2 1.2 0 0 1-.833.352 1.17 1.17 0 0 1-.843-.343 1.17 1.17 0 0 1-.257-.387c-.059-.145-.088-.3-.086-.457s.027-.312.086-.457.146-.277.257-.387a1.17 1.17 0 0 1 .843-.343zm-5.58 1.088h.049a5.7 5.7 0 0 1 5.63 5.638c0 3.116-2.568 5.638-5.63 5.638h-.049c-3.062 0-5.58-2.522-5.58-5.638 0-3.066 2.522-5.638 5.58-5.638zm0 1.928h.049c2.025 0 3.704 1.681 3.704 3.709 0 2.077-1.679 3.759-3.704 3.759h-.049c-2.025 0-3.704-1.682-3.704-3.759 0-2.028 1.679-3.709 3.704-3.709zM5.629 2.588h9.432c1.021.001 2 .408 2.722 1.131s1.128 1.704 1.129 2.726v9.394c-.001 1.023-.407 2.003-1.13 2.726s-1.701 1.13-2.722 1.131H5.629c-1.021-.002-2-.408-2.722-1.131s-1.128-1.703-1.13-2.726V6.443c.002-1.022.409-2.002 1.13-2.724s1.7-1.129 2.721-1.131z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <div className="p small">Instagram</div>
                    </a>
                  </li>
                  <li className="display-flex">
                    <a
                      href="#"
                      target="_blank"
                      className="display-flex gap-medium text-decoration-none w-inline-block"
                    >
                      <div className="display-flex direction-vertical w-embed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="22"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.365 21.024h4.002v-9.239h2.956l.591-3.732H7.367V5.231c0-1.045 1.001-1.639 1.957-1.639h1.728V.498L7.96.361C5.004.179 3.366 2.5 3.366 5.276v2.776H0v3.732h3.365v9.239z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <div className="p small">Facebook</div>
                    </a>
                  </li>
                  <li className="display-flex">
                    <a
                      href="#"
                      target="_blank"
                      className="display-flex gap-medium text-decoration-none w-inline-block"
                    >
                      <div className="display-flex direction-vertical w-embed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="22"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.478 6.711c-1.007-5.334 5.367-8.508 9.123-4.662 0 0 1.678-.473 3.154-1.418-.432 1.226-1.259 2.271-2.348 2.97 0 0 2.012-.27 2.885-.81 0 0-.873 1.823-2.482 2.499C23.681 17.511 10.599 24.938 0 18.861c0 0 5.233.27 7.448-2.296 0 0-3.22.27-4.83-3.646 0 0 1.208.473 2.415-.135 0 0-3.757-.608-4.087-5.131 0 0 1.207.945 2.549.607 0 0-4.159-2.498-1.811-7.022 0 0 4.428 5.668 10.801 5.47l-.006.004z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <div className="p small">Twitter</div>
                    </a>
                  </li>
                  <li className="display-flex">
                    <a
                      href="#"
                      target="_blank"
                      className="display-flex gap-medium text-decoration-none w-inline-block"
                    >
                      <div className="display-flex direction-vertical w-embed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="22"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            d="M.406 7.309h4.108V21.02H.406V7.309zM2.434.351c.659 0 1.291.26 1.757.724s.728 1.092.728 1.747-.262 1.284-.728 1.747-1.098.724-1.757.724C1.064 5.292 0 4.183 0 2.822S1.064.351 2.434.351zm4.514 6.958h4.057v1.916c.43-.637 1.011-1.159 1.693-1.52s1.441-.549 2.213-.548h1.116c2.587 0 4.666 2.118 4.666 4.639v9.227h-4.057v-1.261-6.151c-.05-1.563-1.116-2.774-2.688-2.774s-2.891 1.21-2.942 2.774v7.412H6.949L6.948 7.309z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <div className="p small">Linkedin</div>
                    </a>
                  </li>
                  <li className="display-flex">
                    <a
                      href="#"
                      target="_blank"
                      className="display-flex gap-medium text-decoration-none w-inline-block"
                    >
                      <div className="display-flex direction-vertical w-embed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="22"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            d="M17.073 5.249c-.992-.134-1.847-.674-2.568-1.483-.856-.944-1.352-2.202-1.307-3.415H9.64v14.156c0 1.663-1.351 3.011-3.063 3.011-.991 0-1.892-.494-2.478-1.258a3.03 3.03 0 0 1-.199-3.126 3.04 3.04 0 0 1 1.11-1.19 3.05 3.05 0 0 1 1.566-.448c.306-.003.61.043.901.135V8.036a5.45 5.45 0 0 0-.901-.09h-.135A6.58 6.58 0 0 0 2.89 9.068a6.55 6.55 0 0 0-2.368 2.869 6.54 6.54 0 0 0-.423 3.692c.219 1.245.795 2.402 1.658 3.328a6.7 6.7 0 0 0 2.198 1.524 6.71 6.71 0 0 0 2.621.544c3.649 0 6.622-2.921 6.622-6.516v-7.37a6.57 6.57 0 0 0 4.908 1.662v-3.55a2.01 2.01 0 0 1-1.033 0z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <div className="p small">TikTok</div>
                    </a>
                  </li>
                  <li className="display-flex">
                    <a
                      href="#"
                      target="_blank"
                      className="display-flex gap-medium text-decoration-none w-inline-block"
                    >
                      <div className="display-flex direction-vertical w-embed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="22"
                          fill="none"
                        >
                          <path
                            d="M23.441 1.931A22.91 22.91 0 0 0 17.734.188c-.25.448-.526 1.021-.726 1.495a20.76 20.76 0 0 0-6.333 0A13.64 13.64 0 0 0 9.924.188a21.68 21.68 0 0 0-5.707 1.769C.613 7.312-.363 12.519.112 17.675c2.128 1.569 4.48 2.765 7.009 3.512.576-.772 1.076-1.569 1.502-2.416A13.57 13.57 0 0 1 6.27 17.65c.2-.149.375-.299.576-.448a16.43 16.43 0 0 0 14.017 0c.2.149.375.299.576.448-.751.448-1.552.822-2.378 1.121.425.847.926 1.644 1.502 2.416 2.528-.772 4.906-1.943 7.009-3.512.551-5.979-1.001-11.16-4.13-15.744zM9.223 14.486c-1.377 0-2.478-1.245-2.478-2.765s1.101-2.79 2.478-2.79c1.402 0 2.503 1.246 2.503 2.79-.025 1.52-1.101 2.765-2.503 2.765zm9.211 0c-1.377 0-2.478-1.245-2.478-2.765s1.101-2.79 2.478-2.79c1.402 0 2.503 1.246 2.478 2.79s-1.101 2.765-2.478 2.765z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <div className="p small">Discord</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="display-flex align-center gap-medium m_direction-vertical m_align-start m_gap-x-small">
            <div className="p small font-weight-500">© Rokoko</div>
            <a
              href="#"
              className="p small font-weight-500 text-decoration-none"
            >
              Terms of use
            </a>
            <a
              href="#"
              className="p small font-weight-500 text-decoration-none"
            >
              Privacy policy
            </a>
          </div>
        </div>
      </div>
      <div></div>
    </footer>
  );
};
export default Footer;
