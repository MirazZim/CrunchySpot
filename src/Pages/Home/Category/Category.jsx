import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import CategorySlider1 from "../../../assets/home/slide1.jpg";
import CategorySlider2 from "../../../assets/home/slide2.jpg";
import CategorySlider3 from "../../../assets/home/slide3.jpg";
import CategorySlider4 from "../../../assets/home/slide4.jpg";
import CategorySlider5 from "../../../assets/home/slide5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  
  // Store swiper instance in state
  const [swiperInstance, setSwiperInstance] = useState(null);
  
  const handleNavigation = (category) => {
    if (swiperInstance) {
      swiperInstance.slideTo(categories.indexOf(category));  // Use swiperInstance to navigate
      navigate(`/order/${category}`);
    }
  };

  const categories = ["salad", "pizzas", "soup", "desserts", "salad"];

  return (
    <section>
      <SectionTitle
        heading="Order Online"
        subHeading="From 11:00am to 10:00pm"
      />
      <div className="flex justify-center items-center">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-8 py-4 max-w-6xl"
          onSwiper={(swiper) => setSwiperInstance(swiper)}  // Set swiper instance
        >
          <SwiperSlide onClick={() => handleNavigation("salad")}>
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
              <img
                src={CategorySlider1}
                alt="Salad"
                className="w-full object-cover"
              />
              <h3 className="absolute bottom-0 w-full py-3 text-2xl font-semibold uppercase text-center bg-black/70 text-white backdrop-blur-sm">
                Salad
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide onClick={() => handleNavigation("pizzas")}>
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
              <img
                src={CategorySlider2}
                alt="Pizzas"
                className="w-full object-cover"
              />
              <h3 className="absolute bottom-0 w-full py-3 text-2xl font-semibold uppercase text-center bg-black/70 text-white backdrop-blur-sm">
                Pizzas
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide onClick={() => handleNavigation("soup")}>
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
              <img
                src={CategorySlider3}
                alt="Soup"
                className="w-full object-cover"
              />
              <h3 className="absolute bottom-0 w-full py-3 text-2xl font-semibold uppercase text-center bg-black/70 text-white backdrop-blur-sm">
                Soup
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide onClick={() => handleNavigation("desserts")}>
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
              <img
                src={CategorySlider4}
                alt="Desserts"
                className="w-full object-cover"
              />
              <h3 className="absolute bottom-0 w-full py-3 text-2xl font-semibold uppercase text-center bg-black/70 text-white backdrop-blur-sm">
                Desserts
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide onClick={() => handleNavigation("salad")}>
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
              <img
                src={CategorySlider5}
                alt="Salad"
                className="w-full object-cover"
              />
              <h3 className="absolute bottom-0 w-full py-3 text-2xl font-semibold uppercase text-center bg-black/70 text-white backdrop-blur-sm">
                Salad
              </h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
