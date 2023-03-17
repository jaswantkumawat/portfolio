import React from 'react'
import './Projects.css'
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import project1 from '../../img/p101.png'
import project2 from '../../img/newsboxthumbnail.png'
import project3 from '../../img/portfolio.png'
import project4 from '../../img/project4.png'
const Projects = () => {
  return (
    <div className=" project">
  {/* heading */}
  <div className="heading">
    <span>Recent </span> 
    <span>Projects</span>
  </div>

{/* slider */}
<Swiper
spaceBetween={30}
slidesPerView={3}
grabCursor={true}
className='portfolio-slider'>
<SwiperSlide>
  <img src={project3} alt="" />
</SwiperSlide>
<SwiperSlide>
  <img src={project2} alt="" />
</SwiperSlide>
<SwiperSlide>
  <img src={project1} alt="" />
</SwiperSlide>
<SwiperSlide>
  <img src={project4} alt="" />
</SwiperSlide>





</Swiper>
    </div>
  )
}

export default Projects
