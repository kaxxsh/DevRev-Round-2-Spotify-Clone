import React from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
function Search({setNav}) {
  return (
    <>
      <div className="Home-Nav-Container">
        <div className="Navigation">
          <div className="Nav-Back" onClick={() => setNav(1)}>
            <IoChevronBackCircleOutline size={35} />
          </div>
          <div className="Nav-Next" onClick={() => setNav(3)}>
            <IoChevronForwardCircleOutline size={35} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
