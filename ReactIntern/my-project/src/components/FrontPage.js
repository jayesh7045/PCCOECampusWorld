import React from "react";
import { MyComponent } from "./Animation";
import { motion } from "framer-motion";
function FrontPage() {
  const containerStyle = {
    backgroundImage: `url(/resto.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  
 
  return (
    <div
      className="flex h-screen items-center justify-center"
      style={containerStyle}
    >
      

      <section class="text-gray-600 body-font">
        <div class="container flex">
        <motion.div animate={{scale: [0.1, 0.2, 0.3, 0.5, 0.6, 0.7, 0.9, 1],rotate: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360],borderRadius: ["20%", "20%", "50%", "50%", "20%"]}}>
          <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center ">
            <div className="text-center bg-white bg-opacity-70 p-8">
              <h1 className="text-5xl font-bold mb-4 text-black">
                WELCOME TO <br></br>
                <span className="text-red-600">PCCOER</span> <br></br>College_Bite
              </h1>
              <p className="mx-auto text-black text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quaerat velit repellendus consectetur quam sed dolore culpa
                nesciunt distinctio aspernatur perferendis incidunt quod, harum
                accusantium excepturi beatae similique inventore, nisi ipsum
                cumque aliquid!
              </p>
              <a href="/FoodListe">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded animate-bounce">
                  Explore
                </button>
              </a>
            </div>
          </div>
          </motion.div>
          <motion.img
            src="/newPlate.png"
            className="mr-20 relative right-20"
            style={{ height: "400px" }}
            animate={{ rotate: 360 }} // Continuous rotation
            transition={{ repeat: Infinity, duration: 40}} // Repeat the rotation indefinitely over 5 seconds
            alt=""
          />
          
        </div>
     
      </section>
      
    </div>
  );
}

export default FrontPage;
