// FrontPage.jsx

import React from "react";
import TypedText from "./TypedText";
import ScrollSection from "./ScrollSection";

const FrontPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollSection id="section1">
        <div className="text-gray-600 body-font">
          <div className="container flex">
            <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <div className="text-center bg-white bg-opacity-70 p-8">
                <TypedText text="WELCOME TO PCCOER FOOD ZONE" typingSpeed={100} />
                {/* Rest of your content */}
              </div>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Add more sections as needed */}
    </div>
  );
};

export default FrontPage;
