import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

function contact() {
  const [check, setcheck] = React.useState(false);

  const onClickit = () => {
    setcheck(!check);
  };
  console.log(check);
  return (
    <div className = "bg-red-200">
      <div className="bg-blue-200 h-screen mt-0">
        <h1 className="text-4xl text-pretty font-bold flex justify-center">
          <div className="mt-5 pl-10">Lets Work and Together</div>
          <button onClick={onClickit} className=" space-x-6">
            <img
              src="pencil.jpeg"
              class="relative left-64 top-5 h-10 w-auto animate-bounce"
            />
          </button>
        </h1>

        <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
          <div>
            <iframe
              display="relative"
              height="77%"
              width="45%"
              className="absolute inset-0 border-solid border border-black"
              title="map"
              border="5px solid black"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{
                filter: "contrast(1.2) opacity(0.8) ",
                marginTop: "150px",
                marginLeft: "20px",
                marginBottom: "10px",
              }}
            ></iframe>
          </div>

          {check && (
            <div className="bg-white flex flex-col md:ml-auto w-1/2 mt-5 h-1/2 -my-2 md:mr-10 mr-4 p-8 border border-solid border-black">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Feedback
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Post-ironic portland shabby chic echo park, banjo fashion axe
              </p>
              <div className="relative mb-4">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  for="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <div className="w-10 ">
                <button className="text-white animate-bounce bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg  ">
                  Submit
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Chicharrones blog helvetica normcore iceland tousled brook viral
                artisan.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default contact;

// ... (other imports and code)
