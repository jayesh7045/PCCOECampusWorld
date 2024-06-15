import React from 'react'


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Swaiper() {
    
    const testimonials = [
        {
          id: 1,
          content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta est dolorum temporibus. Rerum obcaecati repellat consequuntur nam optio eveniet neque, voluptatibus adipisci ea, accusantium quisquam expedita nemo porro et voluptatem, sed laudantium iusto quas magni voluptates hic. Perferendis eius molestias soluta veniam facilis amet quod consectetur voluptatibus tempore deleniti dolores earum eligendi nulla obcaecati ab officia quam, iste nostrum sunt id, esse aspernatur, cumque temporibus iure! Velit temporibus ipsa magni accusamus repellat libero corporis, ipsam quam maiores dolore ea consequuntur repellendus quis ullam optio eum iure exercitationem enim, odit inventore!",
          author: "John Doe",
          role: "Role 1",
          color : 'blue-200',
          img : 'https://th.bing.com/th/id/OIP.UvVU9RQtcmWUTyIAB7pPGAHaLD?rs=1&pid=ImgDetMain'
          
        },
        {
          id: 2,
          content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus minima numquam odio officiis quia nostrum magnam repellat ex fuga dolore obcaecati qui dignissimos nesciunt cupiditate veniam culpa, asperiores ipsa ratione! Facere, corrupti ab ex aperiam veritatis vero rem reprehenderit nobis repudiandae dolores nisi quaerat nam atque adipisci modi officiis quisquam repellat accusamus, harum laboriosam voluptate voluptas a. Debitis minus maxime aspernatur at dolorum modi ratione explicabo saepe rem minima, aliquid tenetur odio. Ipsa, facere dolorem numquam, quam nihil harum modi distinctio unde mollitia at, dolores ipsum sit? Asperiores, error aliquam?",
          author: "Jane Smith",
          role: "Role 2",
          color : 'green-200',
          img : 'https://th.bing.com/th/id/R.3bcbeff4ee0abb81ef150c9ea7e35730?rik=t3aMo1m4uUQi6g&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2010%2f05%2ffree-stock-photos-people_102217.jpg&ehk=vGjIrntn5QyP%2fIXY2Ei7Iiz4%2fy%2byXvP8I8j0XxemwjI%3d&risl=&pid=ImgRaw&r=0'
        },
        {
          id: 3,
          content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta est dolorum temporibus. Rerum obcaecati repellat consequuntur nam optio eveniet neque, voluptatibus adipisci ea, accusantium quisquam expedita nemo porro et voluptatem, sed laudantium iusto quas magni voluptates hic. Perferendis eius molestias soluta veniam facilis amet quod consectetur voluptatibus tempore deleniti dolores earum eligendi nulla obcaecati ab officia quam, iste nostrum sunt id, esse aspernatur, cumque temporibus iure! Velit temporibus ipsa magni accusamus repellat libero corporis, ipsam quam maiores dolore ea consequuntur repellendus quis ullam optio eum iure exercitationem enim, odit inventore!",
          author: "Jayesh Wadhwani",
          role: "React Developer",
          color : 'red-500',
          img : 'https://media.licdn.com/dms/image/D5635AQHQJi-XholO3A/profile-framedphoto-shrink_400_400/0/1697793620399?e=1705802400&v=beta&t=uP1S2L5MuUwWO4vW04Djp0qp_mqQnmQgaZQVpxZObNY'
        }
        // Add more testimonials as needed
      ];
      const [currentTestimonial, setCurrentTestimonial] = React.useState(testimonials[0]);
  return (
    <div>
     <div class="swiper">
 
  <div
    class="parallax-bg"
    style={{ backgroundImage: "https://media.licdn.com/dms/image/D5635AQHQJi-XholO3A/profile-framedphoto-shrink_400_400/0/1697793620399?e=1705802400&v=beta&t=uP1S2L5MuUwWO4vW04Djp0qp_mqQnmQgaZQVpxZObNY" }}
    data-swiper-parallax="-23%"
  ></div>
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      
      <div class="title" data-swiper-parallax="-100">Slide 1</div>
      <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
      <div
        class="text"
        data-swiper-parallax="-300"
        data-swiper-parallax-duration="600"
      >
        <p>Lorem ipsum dolor sit amet, ...</p>
      </div>
    
      <div data-swiper-parallax-opacity="0.5">I will change opacity</div>
      <div data-swiper-parallax-scale="0.15">I will change scale</div>
    </div>
    ...
  </div>
</div>
    </div>
  )
}

export default Swaiper
