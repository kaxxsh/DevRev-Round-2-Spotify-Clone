import React, { useState, useEffect } from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { data } from "../Songs";

function Home({ setNav }) {
  const navigate = useNavigate();
  const [show, handleShow] = useState(false);

  console.log("show", show);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 100) {
          handleShow(true);
        } else {
          handleShow(false);
        }
      });
    };
  }, []);

  return (
    <>
      <div id="test" className="Home-Container">
        <nav>
          <div className={`Home-Nav-Container ${show && "Nav-Scroll"}`}>
            <div className="Navigation">
              <div className="nav-left">
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
          </div>
        </nav>
        <section>
          <div className="Section-Welcome">Good afternoon, Deadpool</div>
          <div className="Recently-Played">
            <div className="Recent-Box">
              <div className="Played-Box">
                <img
                  src="https://igimages.gumlet.io/tamil/home/naanevaruven300922_4.jpg?w=700&dpr=1.4"
                  alt=""
                />
                <div className="Music-Name">Dhanush</div>
              </div>
              <div className="Played-Box">
                <img
                  src="https://static.toiimg.com/thumb/74220144.cms?width=680&height=512&imgsize=166081"
                  alt=""
                />
                <div className="Music-Name">Adthi</div>
              </div>
              <div className="Played-Box">
                <img
                  src="https://c.saavncdn.com/113/Yuvan-Shankar-Raja-Hits-Tamil-2005-20201029224137-500x500.jpg"
                  alt=""
                />
                <div className="Music-Name">U1 Drugs</div>
              </div>
            </div>
            <div className="Recent-Box">
              <div className="Played-Box">
                <img
                  src="https://static.toiimg.com/thumb/msid-81567469,imgsize-66554,width-800,height-600,resizemode-75/81567469.jpg"
                  alt=""
                />
                <div className="Music-Name">U1</div>
              </div>
              <div className="Played-Box">
                <img
                  src="https://2.bp.blogspot.com/-YC8THDtFtxE/XLlqBKERZII/AAAAAAAAexE/jCFlbuYr78sei0Jg2eKUejxW1Kf8KU3cgCLcBGAs/s1600/raja.JPG"
                  alt=""
                />
                <div className="Music-Name">U1 Hits</div>
              </div>
              <div className="Played-Box">
                <img
                  src="https://www.liveclefs.com/wp-content/uploads/2022/12/Pradeep-Kumar.jpg"
                  alt=""
                />
                <div className="Music-Name">Pradeep</div>
              </div>
            </div>
          </div>
        </section>
        {data.map((data) => {
          return data.map((img) => {
            return (
              <section>
                <div className="Section-Welcome"> PlayList</div>
                <div className="Recently-Played">
                  <div className="Recent-Box">
                    <div className="Played-Box">
                      <img className="Music-Img" src={img} />
                      <div className="Music-Name">u1 Drugs</div>
                    </div>
                    <div className="Played-Box">
                      <img className="Music-Img" src={img} />
                      <div className="Music-Name">U1 Hits</div>
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
