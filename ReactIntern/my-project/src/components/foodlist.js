import React, { useEffect, useState } from "react";
import Card from "./card";
import Header from "./Header";
import Footer from "./Footer";


function FoodList() {

  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const [famousFor, setfamousFor] = useState([]);
  const [timing, setTiming] = useState({morning : {startTime : "08:00", endTime : "14:00"}, evening : {startTime : "17:00", endTime : "22:00"}});
  const [modal, setModal] = useState(false);
  
  const [FoodList, setFoodList] = useState([
    {
      name: "Delicious Bites",
      address: "123 Main Street, Cityville",
      famousFor: ["Pizza", "Pasta", "Burgers"],
      timing : {morning : {startTime : "", endTime : ""}, evening : {startTime : "", endTime : ""}},
      url: "https://wallpapercave.com/wp/wp1874162.jpg",
      status : "OPEN"
    },
    {
      name: "Spice Haven",
      address: "456 Spice Lane, Flavor City",
      famousFor: ["Curry", "Tandoori", "Biryani"],
      timing : {morning : {startTime : "", endTime : ""}, evening : {startTime : "", endTime : ""}},
      url: "https://wallpapercave.com/wp/wp1874173.jpg",
      status: "CLOSED",
    },
    {
      name: "Sushi Delight",
      address: "789 Seaside Drive, Ocean Town",
      famousFor: ["Sushi Rolls", "Sashimi", "Tempura"],
      timing : {morning : {startTime : "", endTime : ""}, evening : {startTime : "", endTime : ""}},
      url: "https://images2.alphacoders.com/862/862730.jpg",
      status: "OPEN",
    },
    {
      name: "Taste of Italy",
      address: "567 Pasta Plaza, Flavortown",
      famousFor: ["Ravioli", "Lasagna", "Tiramisu"],
      timing : {morning : {startTime : "", endTime : ""}, evening : {startTime : "", endTime : ""}},
      url: "https://wallpapercave.com/wp/wp2038281.jpg",
      status: "OPEN",
    },
    {
      name: "Grill Master",
      address: "890 BBQ Street, Smoketown",
      famousFor: ["Barbecue Ribs", "Grilled Chicken", "Steak"],
      timing : {morning : {startTime : "", endTime : ""}, evening : {startTime : "", endTime : ""}},
      url: "https://wallpapercave.com/wp/wp1874186.jpg",
      status: "CLOSED",
    },
    {
      name: "Veggie Paradise",
      address: "234 Green Avenue, Veggieville",
      famousFor: ["Vegetarian Curry", "Salads", "Smoothies"],
      timing : {morning : {startTime : "", endTime : ""}, evening : {startTime : "", endTime : ""}},
      url: "https://wallpapercave.com/wp/wp1874155.jpg",
      status: "OPEN",
    },
    {
      name: "Sweet Treats Bakery",
      address: "345 Sugar Lane, Dessert City",
      famousFor: ["Cupcakes", "Pastries", "Ice Cream"],
      timing : {morning : {startTime : "", endTime : ""}, evening : {startTime : "", endTime : ""}},
      url: "https://wallpapercave.com/wp/wp1874169.jpg",
      status: "CLOSED",
    },
    {
      name: "Street Tacos Corner",
      address: "678 Spice Street, Taco Town",
      famousFor: ["Tacos", "Quesadillas", "Guacamole"],
      timing : {morning : {startTime : "", endTime : ""}, evening : {startTime : "", endTime : ""}},
      url: "https://coolwallpapers.me/picsup/5694895-restaurant-wallpapers.jpg",
      status: "CLOSED",
    },
    {
      name: "Coffee Haven",
      address: "901 Brew Boulevard, Caffeine City",
      famousFor: ["Espresso", "Cappuccino", "Cold Brew"],
      timing : {morning : {startTime : "", endTime : ""}, evening : {startTime : "", endTime : ""}},
      url: "https://images2.alphacoders.com/862/862730.jpg",
      status: "CLOSED",
    },
    {
      name: "Noodle Junction",
      address: "123 Noodle Street, Noodleville",
      famousFor: ["Ramen", "Pad Thai", "Udon"],
      timing : {morning : {startTime : "", endTime : ""}, evening : {startTime : "", endTime : ""}},
      url: "https://wallpapercave.com/wp/wp1874162.jpg",

      status: "CLOSED",
    },
  ]);

  const toggleModal = () => {
    setModal(!modal);
  };
  const datevalue = new Date();
  const messTimeStartevening = FoodList[FoodList.length-1].timing.evening.startTime.toString().substr(0, 2)-'0';
  const messTimeEndevening = FoodList[FoodList.length-1].timing.evening.endTime.toString().substr(0, 2)-'0';
  const messTimeStartmorning = FoodList[FoodList.length-1].timing.morning.startTime.toString().substr(0, 2)-'0';
  const messTimeEndmorning = FoodList[FoodList.length-1].timing.morning.endTime.toString().substr(0, 2)-'0';
  const apnaTime = datevalue.getHours().toString()-'0';
  const addItem=()=>{
    setFoodList([...FoodList, {name, url : "https://th.bing.com/th/id/OIP.93uvM_FMFZcRrIWEhITSMwHaEK?w=326&h=183&c=7&r=0&o=5&dpr=1.6&pid=1.7", address, famousFor, timing, status : ((apnaTime >= messTimeStartmorning && apnaTime < messTimeEndmorning) || (apnaTime >= messTimeStartevening && apnaTime < messTimeEndevening)) ? "OPEN" : "CLOSED",
    }])
    toggleModal();
  }
  console.log("The main value is ",  (apnaTime >= messTimeStartmorning && apnaTime < messTimeEndmorning) || (apnaTime >= messTimeStartevening && apnaTime < messTimeEndevening))
  console.log(apnaTime < messTimeEndmorning)
  console.log(messTimeEndmorning)
  console.log(apnaTime)
 
  
 

  return (
    <div className="mx-auto my-0 bg-blue-100">
      <div className="fixed w-full">
      <Header></Header>
      </div>  
      <div className="flex justify-center space-x-5 pt-24" id="items">
        <div className="pt-2">Add Your Food Corner</div>
        <span className="border border-solid border-black w-10 pl-2 pb-1 font-bold text-3xl">
          <button onClick={toggleModal} className="">
            +
          </button>
        </span>
        <br />
      </div>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="max-w-md mx-auto my-auto py-4">
              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-1">
                  Name of Your Food World
                </label>
                <input
                  type="text"
                  className="w-full border-2 border-gray-300 px-3 py-2 rounded-md"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-1">
                  Favorite Food
                </label>
                <input
                  type="text"
                  className="w-full border-2 border-gray-300 px-3 py-2 rounded-md"
                  value={famousFor}
                  onChange={(e) => setfamousFor(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-1">
                  Timing 
                  <br />
                  <label htmlFor="">Morning</label>
                  <br />
                  <label htmlFor="">Start Time in Morning</label> <input type="time" value={timing.morning.startTime} onChange={(e) => setTiming({ ...timing, morning: { ...timing.morning, startTime: e.target.value } })}/>
                  <br />
                  <label htmlFor="">End Time in Morning</label> <input type="time" value={timing.morning.endTime} onChange={(e) => setTiming({ ...timing, morning: { ...timing.morning, endTime: e.target.value } })}/>
                  <br />
                  <label htmlFor="">Evening</label>
                  <br />
                  <label htmlFor="">Start Time in Evening</label> <input type="time" value={timing.evening.startTime} onChange={(e)=>setTiming({...timing, evening : {...timing.evening, startTime : e.target.value}})}/>
                  <br />
                  <label htmlFor="">End Time in Evening</label> <input type="time" value={timing.evening.endTime} onChange={(e)=>setTiming({...timing, evening : {...timing.evening, endTime : e.target.value}})}/>
                  <br />  
                </label>
              </div>
              <button
                className="w-full bg-blue-500 text-white py-2 rounded-md"
                onClick={addItem}
              >
                AddItem
              </button>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      {FoodList.map((food, index) => (
        <Card key={index} food={food} />
      ))}
      <Footer></Footer>
    </div>
  );
}

export default FoodList;