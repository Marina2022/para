import s from './Services.module.scss'
import ServicesCard from "./ServicesCard/ServicesCard";
import prevBtn from '../../../../assets/services/slider-left-btn.svg'
import nextBtn from '../../../../assets/services/slider-right-btn.svg'

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {useRef} from "react";
import cn from "classnames";
import {mockServices} from "../../../../mocks/services";

const Services = () => {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  const swiperRef = useRef(null)

  return (
    <div className={s.services} id='services'>
      <div className="container">

        <h2 className={s.title}>
          OUR SERVICES
        </h2>
        <p className={s.text}>We offer solutions to a wide range of IT tasks for your business</p>

        <div className={s.sliderWrapper}>
          <Swiper className={s.slider}
                  modules={[Navigation, Pagination]}
                  navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                  }}
                  onBeforeInit={
                    (swiper) => {
                      // swiper.params.navigation.prevEl = navigationPrevRef.current;
                      // swiper.params.navigation.nextEl = navigationNextRef.current;
                      swiperRef.current = swiper;

                    }
                  }
                  spaceBetween={32}
                  slidesPerView={1}
                  loop
                  pagination={{
                    clickable: true,
                    gap: 10,
                  }}
                  mousewheel
                  breakpoints={{
                    768: {
                      slidesPerView: 2
                    },
                    1720: {
                      loop: false,
                      slidesPerView: 4
                    }
                  }}
          >
            {
              mockServices.map((service, index) => {
                return (
                  <SwiperSlide key={index}>
                    <ServicesCard {...service} />
                  </SwiperSlide>
                )
              })
            }
          </Swiper>

          <button
            onClick={()=>{
              swiperRef.current.slidePrev()
            }}
            className={cn(s.sliderBtn, s.prevBtn)} ref={navigationPrevRef}>
            <img src={prevBtn} alt="previous button"/>
          </button>
          <button
            onClick={()=>{
              swiperRef.current.slideNext()
            }}
            className={cn(s.sliderBtn, s.nextBtn)} ref={navigationNextRef}>
            <img src={nextBtn} alt="next button"/>
          </button>
        </div>
      </div>
    </div>
  )
};

export default Services;


