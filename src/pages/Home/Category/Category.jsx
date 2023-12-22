import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import slide1 from "../../../assets/flower-1.jpg";
import slide2 from "../../../assets/flower-1.jpg";
import slide3 from "../../../assets/flower-1.jpg";

import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div>
      <SectionTitle
        heading={"All Category"}
        subHeading={"Top Selling Flowers"}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <Link to="/lily">
          <SwiperSlide>
            <img src={slide1} alt="" />
            {/* <h3 className="text-4xl uppercase text-center -mt-16 text-white">
              Salads
            </h3> */}
          </SwiperSlide>
        </Link>
        <Link to="/your-route1">
          <SwiperSlide>
            <img src={slide2} alt="" />
            {/* <h3 className="text-4xl uppercase text-center -mt-16 text-white">
              Pizzas
            </h3> */}
          </SwiperSlide>
        </Link>
        <Link to="/your-route2">
          <SwiperSlide>
            <img src={slide3} alt="" />
            {/* <h3 className="text-4xl uppercase text-center -mt-16 text-white">
              Soups
            </h3> */}
          </SwiperSlide>
        </Link>
        <Link to="/your-route2">
          <SwiperSlide>
            <img src={slide3} alt="" />
            {/* <h3 className="text-4xl uppercase text-center -mt-16 text-white">
              Soups
            </h3> */}
          </SwiperSlide>
        </Link>
        <Link to="/your-route2">
          <SwiperSlide>
            <img src={slide3} alt="" />
            {/* <h3 className="text-4xl uppercase text-center -mt-16 text-white">
              Soups
            </h3> */}
          </SwiperSlide>
        </Link>
        {/* Repeat the pattern for other slides */}
      </Swiper>
    </div>
  );
};

export default Category;
