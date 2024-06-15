// ScrollSection.jsx

import React from "react";
import { Link } from "react-scroll";

const ScrollSection = ({ id, children }) => (
  <div id={id} className="scroll-section">
    {children}
  </div>
);

export default ScrollSection;
