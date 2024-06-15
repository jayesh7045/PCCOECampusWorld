import Header from "../components/Header"
import Footer from "../components/Footer"
import { MyComponent } from "../components/Animation"
import Testimonials from "../components/Testimonials"
import { useRef, useEffect } from "react"
import FrontPage from "../components/FrontPage"
import NewTestimonials from "../components/NewTestimonials"
export default function Home() {
  return (
   <div >
    <Header/>
    <FrontPage />
    <NewTestimonials/>
    <Footer/>

   </div>
  )
}
