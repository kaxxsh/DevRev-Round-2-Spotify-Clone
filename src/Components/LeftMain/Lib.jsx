import React from 'react'
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { IoChevronForwardCircleOutline } from "react-icons/io5";

function Lib({setNav}) {
  return (
    <div className="Lib-container">
      <div className="Home-Nav-Container">
        <div className="Navigation">
          <div className="Nav-Back" onClick={() => setNav(2)}>
            <IoChevronBackCircleOutline size={35} />
          </div>
          <div className="Nav-Next" onClick={() => setNav(1)}>
            <IoChevronForwardCircleOutline size={35} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lib