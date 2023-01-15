import React from "react";
import { RiCloseFill, RiMenuFill } from "react-icons/ri";
import "./nav.css";
function Nav() {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <div>
      <div className="nav__container section__padding">
        <h1>hello</h1>
        <ul className="nav__links">
          <p>
            <a href="" className="active">
              about
            </a>
          </p>
          <p>
            <a href="">experience</a>
          </p>
          <p>
            <a href="">works</a>
          </p>
          <p>
            <a href="">contact</a>
          </p>
        </ul>

        <div className="nav__menu">
          {openMenu ? (
            <RiCloseFill
              color="#fff"
              size={37}
              cursor={"pointer"}
              onClick={() => setOpenMenu(false)}
            />
          ) : (
            <RiMenuFill
              color="#fff"
              size={37}
              cursor={"pointer"}
              onClick={() => setOpenMenu(true)}
            />
          )}
          {openMenu && (
            <div className="nav__container scale-up-center">
              <div className="nav__menu-links">
                <p>
                  <a href="">about</a>
                </p>
                <p>
                  <a href="">experience</a>
                </p>
                <p>
                  <a href="">works</a>
                </p>
                <p>
                  <a href="">contact</a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
