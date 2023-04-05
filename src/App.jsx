import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Des1 from "./assets/Des-Img-1.jpeg";
import Des2 from "./assets/Des-Img-2.jpeg";
import Des3 from "./assets/Des-Img-3.jpeg";
import Des4 from "./assets/Des-Img-4.jpeg";
import Logo from "./assets/Spotify_logo.png";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div className="Main-Container">
        <nav>
          <div className="Nav-container">
            <div className="Nav-Box">
              <div className="Logo">
                <Link>
                  {/* <img className="Logo-Img" src={Spotify} alt="Spotify" /> */}
                  <img className="Logo-Img" src={Logo} alt="Spotify" />
                </Link>
              </div>
              <div className="Nav-Menu">
                <ul>
                  <li className="Nav-Menu-Item">
                    <Link to="/">Premium</Link>
                  </li>
                  <li className="Nav-Menu-Item">
                    <a href="https://support.spotify.com/in-en/">Support</a>
                  </li>
                  <li className="Nav-Menu-Item">
                    <a href="https://www.spotify.com/in-en/download/windows/">
                      Download
                    </a>
                  </li>
                  <li role="separator" className="Nav-Menu-Item-separator">
                    |
                  </li>
                  <li className="Nav-Menu-Item">
                    <Link to="/Signup">Sign up</Link>
                  </li>
                  <li className="Nav-Menu-Item">
                    <Link to="/Signin">Login in</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <section>
          <div className="Ads-Container">
            <div className="Ads-Box">
              <div className="Ads-Title">Get Premium free for 1 month</div>
              <div className="Ads-Description">
                Just 119/month after. Debit and credit card accepted. Cancel
                anytime.
              </div>
              <div className="Get-Start">
                <button
                  className="Get-Start-Button1"
                  onClick={() => {
                    navigate("/Signin");
                  }}
                >
                  GET STARTED
                </button>
                <button className="Get-Start-Button2">SEE OTHER PLANS</button>
              </div>
              <div className="TACA">
                <div className="TACA-Title">
                  <span className="Title-Span">
                    Terms and conditions apply.
                  </span>
                  1 month free not available for users who have already tried
                  Premium.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="Premium-container">
            <div className="Premium-Box">
              <div className="Premium-Title">The power of Premium</div>
              <div className="Premium-Description">
                <div className="Description-Box">
                  <div className="Des-Img">
                    <img src={Des1} alt="" />
                  </div>
                  <div className="Des-Title">Ad-free music listening</div>
                  <div className="Des-Description">
                    Enjoy uninterrupted music.
                  </div>
                </div>
                <div className="Description-Box">
                  <div className="Des-Img">
                    <img src={Des2} alt="" />
                  </div>
                  <div className="Des-Title">Offine playback</div>
                  <div className="Des-Description">
                    save your data by listening offine.
                  </div>
                </div>
                <div className="Description-Box">
                  <div className="Des-Img">
                    <img src={Des3} alt="" />
                  </div>
                  <div className="Des-Title">Play everywhere</div>
                  <div className="Des-Description">
                    Listen on you favourite devices.
                  </div>
                </div>
                <div className="Description-Box">
                  <div className="Des-Img">
                    <img src={Des4} alt="" />
                  </div>
                  <div className="Des-Title">Pay your way</div>
                  <div className="Des-Description">
                    Prepay with Paytm,UPI,and more.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="Footer-container">
            <div className="Footer-Box">
              <div className="Footer-Menu">
                <ul className="Footer-ul">
                  <li>Legal</li>
                  <li>Privacy Center</li>
                  <li>Privacy Policy</li>
                  <li>Cookies</li>
                  <li>About Ads</li>
                </ul>
              </div>
              <div className="Footer-Title">@ 2023 Spotify AB</div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
