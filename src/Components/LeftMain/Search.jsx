import React, { useState, useEffect } from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
function Search({ setNav }) {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  console.log("show", show);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 70) {
          handleShow(true);
        } else {
          handleShow(false);
        }
      });
    };
  }, []);

  return (
    <>
      <div className="Search-Container" >
        <nav>
          <div className={`Home-Nav-Container ${show && "Nav-Scroll"}`}>
            <div className="Navigation">
              <div className="nav-left">
                <div className="Nav-Back" onClick={() => setNav(1)}>
                  <IoChevronBackCircleOutline size={35} />
                </div>
                <div className="Nav-Next" onClick={() => setNav(3)}>
                  <IoChevronForwardCircleOutline size={35} />
                </div>
              </div>
              <div className="Nav-End">
                <div className="Nav-upgrade" onClick={() => navigate("/")}>
                  update
                </div>
                <div className="Display-UserName">
                  <BiUserCircle size={26} fill="grey" />
                  Deadpool
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Search;
