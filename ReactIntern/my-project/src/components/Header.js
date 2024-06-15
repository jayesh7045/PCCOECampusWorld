import React from "react";

function Header() {
  return (
    <div className="bg-blue-500 text-lg">
      <header className="text-gray-600 body-font">
        <div className="flex ">
          <img src="/collbite.png" alt="" className="h-16 place-items-center w-15 pl-10 mt-1" />
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-bold">
              <a
                className="mr-5 text-black hover:text-white shadow-lg "
                href="/"
              >
                Home
              </a>
              <a className="mr-5 text-black hover:text-white shadow-lg" href="/about">
                About Us
              </a>
              <a className="mr-5 text-black hover:text-white shadow-lg" href="/contact">
                Contact Us
              </a>
              <a className="mr-5 text-black hover:text-white shadow-lg" href="/Galleryy">
                Gallery
              </a>
            </nav>
            <a href="http://localhost:3000/rooms">
              <div className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 animate-pulse rounded text-base mt-4 md:mt-0">
                Explore Hostels
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
