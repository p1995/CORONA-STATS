import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/CoronaCases">CoronaCases</Link>
            </li>
            <li>
              <Link to="/StateWiseCases">StateWiseCases</Link>
            </li>
            {/* <li>
              <Link to="/schedule">Schedule</Link>
            </li> */}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
