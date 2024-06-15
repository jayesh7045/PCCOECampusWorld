import React, { useEffect } from "react";
import Slider from "react-slick";
const Testimonials = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  const testimonials = [
    {
      id: 1,
      content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta est dolorum temporibus. Rerum obcaecati repellat consequuntur nam optio eveniet neque, voluptatibus adipisci ea, accusantium quisquam expedita nemo porro et voluptatem, sed laudantium iusto quas magni voluptates hic. Perferendis eius molestias soluta veniam facilis amet quod consectetur voluptatibus tempore deleniti dolores earum eligendi nulla obcaecati ab officia quam, iste nostrum sunt id, esse aspernatur, cumque temporibus iure! Velit temporibus ipsa magni accusamus repellat libero corporis, ipsam quam maiores dolore ea consequuntur repellendus quis ullam optio eum iure exercitationem enim, odit inventore!",
      author: "John Doe",
      role: "Role 1",
      color : 'bg-blue-200',
      img : 'https://th.bing.com/th/id/OIP.UvVU9RQtcmWUTyIAB7pPGAHaLD?rs=1&pid=ImgDetMain'
      
    },
    {
      id: 2,
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus minima numquam odio officiis quia nostrum magnam repellat ex fuga dolore obcaecati qui dignissimos nesciunt cupiditate veniam culpa, asperiores ipsa ratione! Facere, corrupti ab ex aperiam veritatis vero rem reprehenderit nobis repudiandae dolores nisi quaerat nam atque adipisci modi officiis quisquam repellat accusamus, harum laboriosam voluptate voluptas a. Debitis minus maxime aspernatur at dolorum modi ratione explicabo saepe rem minima, aliquid tenetur odio. Ipsa, facere dolorem numquam, quam nihil harum modi distinctio unde mollitia at, dolores ipsum sit? Asperiores, error aliquam?",
      author: "Jane Smith",
      role: "Role 2",
      color : 'bg-green-200',
      img : 'https://th.bing.com/th/id/R.3bcbeff4ee0abb81ef150c9ea7e35730?rik=t3aMo1m4uUQi6g&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2010%2f05%2ffree-stock-photos-people_102217.jpg&ehk=vGjIrntn5QyP%2fIXY2Ei7Iiz4%2fy%2byXvP8I8j0XxemwjI%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      id: 3,
      content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta est dolorum temporibus. Rerum obcaecati repellat consequuntur nam optio eveniet neque, voluptatibus adipisci ea, accusantium quisquam expedita nemo porro et voluptatem, sed laudantium iusto quas magni voluptates hic. Perferendis eius molestias soluta veniam facilis amet quod consectetur voluptatibus tempore deleniti dolores earum eligendi nulla obcaecati ab officia quam, iste nostrum sunt id, esse aspernatur, cumque temporibus iure! Velit temporibus ipsa magni accusamus repellat libero corporis, ipsam quam maiores dolore ea consequuntur repellendus quis ullam optio eum iure exercitationem enim, odit inventore!",
      author: "Jayesh Wadhwani",
      role: "React Developer",
      color : 'bg-red-200',
      img : 'https://media.licdn.com/dms/image/D5635AQHQJi-XholO3A/profile-framedphoto-shrink_400_400/0/1697793620399?e=1705802400&v=beta&t=uP1S2L5MuUwWO4vW04Djp0qp_mqQnmQgaZQVpxZObNY'
    }
    // Add more testimonials as needed
  ];
  const [currentTestimonial, setCurrentTestimonial] = React.useState(testimonials[0]);
  const [index, setIndex] = React.useState(0);
  
  
  useEffect(() => {
    let interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3);
      setCurrentTestimonial(testimonials[index]);
    }, 9000);

    return () => {
      clearInterval(interval);
    };
  }, [index]);
  


  return (
    <div className="flex items-center justify-center">
      <div className={`container mx-auto ${currentTestimonial.color}`} style={{ backgroundColor: `${currentTestimonial.color}-500` }}>

        <div className="relative rounded-md pt-12 shadow-lg">
          <h1 className="flex items-center justify-center text-4xl font-bold">
            Endorsements
          </h1>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto">
              <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                <div className="mb-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="inline-block w-8 h-8 text-gray-400 mb-8"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                </div>
                <div className="flex items-center justify-center">
                  <p className="leading-relaxed text-lg text-black translate-x-12">
                    {currentTestimonial.content}
                  </p>
                  <img
                    src={currentTestimonial.img}
                    alt=""
                    className="h-20 ml-4 translate-x-12 rounded-full"
                  />
                </div>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  {currentTestimonial.author}
                </h2>
                <p className="text-gray-500">
                  {currentTestimonial.role}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
