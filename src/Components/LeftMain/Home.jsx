import React, { useState } from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { data } from "../Songs";

function Home({ setNav }) {
  const navigate = useNavigate();
  const [NavColour, setNavColour] = useState(false);

  const ChangeNavColour = () => {
    if (window.scrollY >= 748) {
      setNavColour(true);
    } else {
      setNavColour(false);
    }
  };


  window.addEventListener("scroll", ChangeNavColour);
  return (
    <>
      <div className="Home-Container">
        <nav>
          <div
            className={
              NavColour ? "Nav-Container" : "Navbar Home-Nav-Container"
            }
          >
            <div className="Navigation">
              <div className="Nav-Back" onClick={() => setNav(3)}>
                <IoChevronBackCircleOutline size={35} />
              </div>
              <div className="Nav-Next" onClick={() => setNav(2)}>
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
        </nav>
        <section>
          <div className="Section-Welcome">Good afternoon, Deadpool</div>
          <div className="Recently-Played">
            <div className="Recent-Box">
              <div className="Played-Box">
                <div className="Music-Img"></div>
                <div className="Music-Name">Movie</div>
              </div>
              <div className="Played-Box">
                <div className="Music-Img"></div>
                <div className="Music-Name">Movie</div>
              </div>
              <div className="Played-Box">
                <div className="Music-Img"></div>
                <div className="Music-Name">Movie</div>
              </div>
            </div>
            <div className="Recent-Box">
              <div className="Played-Box">
                <div className="Music-Img"></div>
                <div className="Music-Name">Movie</div>
              </div>
              <div className="Played-Box">
                <div className="Music-Img"></div>
                <div className="Music-Name">Movie</div>
              </div>
              <div className="Played-Box">
                <div className="Music-Img"></div>
                <div className="Music-Name">Movie</div>
              </div>
            </div>
          </div>
        </section>
        {data.map((data) => {
          return data.map((img) => {
            console.log(img);
            return (
              <section>
                <div className="Section-Welcome"> Deadpool</div>
                <div className="Recently-Played">
                  <div className="Recent-Box">
                    <div className="Played-Box">
                      <img className="Music-Img" src={img} />
                      <div className="Music-Name">Movie</div>
                    </div>
                    <div className="Played-Box">
                      <img className="Music-Img" src={img} />
                      <div className="Music-Name">Movie</div>
                    </div>
                    <div className="Played-Box">
                      <img className="Music-Img" src={img} />
                      <div className="Music-Name">Movie</div>
                    </div>
                  </div>
                  <div className="Recent-Box">
                    <div className="Played-Box">
                      <img className="Music-Img" src={img} />
                      <div className="Music-Name">Movie</div>
                    </div>
                    <div className="Played-Box">
                      <img className="Music-Img" src={img} />
                      <div className="Music-Name">Movie</div>
                    </div>
                    <div className="Played-Box">
                      <img className="Music-Img" src={img} />
                      <div className="Music-Name">Movie</div>
                    </div>
                  </div>
                </div>
              </section>
            );
          });
        })}
      </div>
    </>
  );
}

export default Home;
