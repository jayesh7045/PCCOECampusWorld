import { motion } from "framer-motion";

export const MyComponent = () => (
  <motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 72, 144, 215, 360],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      backgroundColor: "red"
    }}
  >
    <div className="text-center bg-white bg-opacity-70 p-8">
              <h1 className="text-5xl font-bold mb-4 text-black">
                WELCOME TO <br></br>
                <span className="text-red-600">PCCOER</span> <br></br>FOOD ZONE
              </h1>
              <p className="mx-auto text-black text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quaerat velit repellendus consectetur quam sed dolore culpa
                nesciunt distinctio aspernatur perferendis incidunt quod, harum
                accusantium excepturi beatae similique inventore, nisi ipsum
                cumque aliquid!
              </p>
              <a href="/FoodListe">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Explore
                </button>
              </a>
            </div>
  </motion.div>
);