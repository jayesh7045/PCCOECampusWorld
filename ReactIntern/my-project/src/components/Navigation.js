// Navigation.jsx

import React from "react";
import { Link } from "react-scroll";

const Navigation = () => (
  <nav className="fixed top-0 left-0 right-0 bg-white p-4">
    <ul className="flex justify-center space-x-4">
      <li>
        <Link to="section1" smooth duration={1000}>
          Section 1
        </Link>
      </li>
      {/* Add more links for other sections */}
    </ul>
  </nav>
);

export default Navigation;
