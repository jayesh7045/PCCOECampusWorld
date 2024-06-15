import React from "react";
import Header from "./Header";
import Footer from "./Footer";
function Gallery() {
  return (
    <div className="bg-blue-100">
      <div className="fixed w-full">
      <Header></Header>
      </div>  
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              Some of Our Special Clicks
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              Thank you for considering our services for your food website. We
              are excited about the opportunity to create a stunning and
              functional website that perfectly represents your culinary brand.{" "}
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?cs=srgb&dl=close-up-cooking-dinner-46239.jpg&fm=jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://images.pexels.com/photos/1026679/pexels-photo-1026679.jpeg?cs=srgb&dl=curry-delicious-food-delicious-indian-food-indian-cuisine-1026679.jpg&fm=jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://www.thespruceeats.com/thmb/Q0schrGA1TOajpjDjCqLGipqcBA=/5101x3401/filters:fill(auto,1)/GettyImages-639389404-5c450e724cedfd00015b09d5.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://imgmedia.lbb.in/media/2019/08/5d662c8ea84656a7661be92a_1566977166741.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://th.bing.com/th/id/OIP.sIagdvhir7O8pEcCZeT3pwHaJQ?rs=1&pid=ImgDetMain"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://th.bing.com/th/id/R.38cfd8403144119e8d3e3d176a963016?rik=aIKV8RSzKHPIKw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fDesktop-Food-HD-Wallpapers-Free-Download.jpg&ehk=szmS7%2bieRDd4VVw82%2fkxoSha9HiVHqUNAZr02wqxugc%3d&risl=1&pid=ImgRaw&r=0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Gallery;
