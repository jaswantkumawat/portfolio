import React from 'react'
import './Projects.css'
import {Swiper , SwiperSlide} from "swiper/react"
import project1 from '../../img/p101.png'
const Projects = () => {
  return (
    <div className="awesome project">
  {/* heading */}
    <span>Recent</span> 
    <span> Projects</span>

{/* slider */}
<Swiper
spaceBetween={30}
slidesPerView={3}
grabCursor={true}
className='project-slider'
>

<SwiperSlide>
  <img src={project1} alt="" />
</SwiperSlide>

<SwiperSlide>
  <img src={project1} alt="" />
</SwiperSlide>

<SwiperSlide>
  <img src={project1} alt="" />
</SwiperSlide>

</Swiper>
    </div>
  )
}

export default Projects
