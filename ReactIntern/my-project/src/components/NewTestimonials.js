import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NewTestimonials() {
  const testimonials = [
    {
      id: 0,
      content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta est dolorum temporibus. Rerum obcaecati repellat consequuntur nam optio eveniet neque, voluptatibus adipisci ea, accusantium quisquam expedita nemo porro et voluptatem, sed laudantium iusto quas magni voluptates hic. Perferendis eius molestias soluta veniam facilis amet quod consectetur voluptatibus tempore deleniti dolores earum eligendi nulla obcaecati ab officia quam, iste nostrum sunt id, esse aspernatur, cumque temporibus iure! Velit temporibus ipsa magni accusamus repellat libero corporis, ipsam quam maiores dolore ea consequuntur repellendus quis ullam optio eum iure exercitationem enim, odit inventore!",      
      author: "John Doe",
      role: "Role 1",
      color: "bg-blue-200",
      img: "https://th.bing.com/th/id/OIP.UvVU9RQtcmWUTyIAB7pPGAHaLD?rs=1&pid=ImgDetMain",
    },
    {
      id: 1,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta est dolorum temporibus. Rerum obcaecati repellat consequuntur nam optio eveniet neque, voluptatibus adipisci ea, accusantium quisquam expedita nemo porro et voluptatem, sed laudantium iusto quas magni voluptates hic. Perferendis eius molestias soluta veniam facilis amet quod consectetur voluptatibus tempore deleniti dolores earum eligendi nulla obcaecati ab officia quam, iste nostrum sunt id, esse aspernatur, cumque temporibus iure! Velit temporibus ipsa magni accusamus repellat libero corporis, ipsam quam maiores dolore ea consequuntur repellendus quis ullam optio eum iure exercitationem enim, odit inventore!",      
      author: "Jane Smith",
      role: "Role 2",
      color: "bg-green-200",
      img: "https://th.bing.com/th/id/R.3bcbeff4ee0abb81ef150c9ea7e35730?rik=t3aMo1m4uUQi6g&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2010%2f05%2ffree-stock-photos-people_102217.jpg&ehk=vGjIrntn5QyP%2fIXY2Ei7Iiz4%2fy%2byXvP8I8j0XxemwjI%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 2,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta est dolorum temporibus. Rerum obcaecati repellat consequuntur nam optio eveniet neque, voluptatibus adipisci ea, accusantium quisquam expedita nemo porro et voluptatem, sed laudantium iusto quas magni voluptates hic. Perferendis eius molestias soluta veniam facilis amet quod consectetur voluptatibus tempore deleniti dolores earum eligendi nulla obcaecati ab officia quam, iste nostrum sunt id, esse aspernatur, cumque temporibus iure! Velit temporibus ipsa magni accusamus repellat libero corporis, ipsam quam maiores dolore ea consequuntur repellendus quis ullam optio eum iure exercitationem enim, odit inventore!",
      author: "Jayesh Wadhwani",
      role: "React Developer",
      color: "bg-red-200",
      img: "https://th.bing.com/th/id/OIP.UvVU9RQtcmWUTyIAB7pPGAHaLD?rs=1&pid=ImgDetMain",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="">
      <Slider {...settings} className="animate-slideLeftToRight">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={`${testimonial.color} h-full`}>
            <h3 className="text-center h-full">
              <section className="text-gray-600 body-font h-full">
                <div className="container px-5 py-12 mx-auto h-full">
                  <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center h-full">
                    <div className="mb-8 flex space-x-12">
                      <p className="leading-relaxed text-lg width-2/3 text-black">
                        {testimonial.content}
                      </p>
                      <img
                        src={testimonial.img}
                        alt=""
                        className="h-20 rounded-full m-8 "
                      />
                    </div>

                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                      {testimonial.author}
                    </h2>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </section>
            </h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default NewTestimonials;
