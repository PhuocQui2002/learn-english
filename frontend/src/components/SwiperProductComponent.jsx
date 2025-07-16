import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import { mockCourses } from "../api/mockData";
import { useNavigate } from "react-router-dom";

function SwiperProductComponent() {
  const navigate = useNavigate();

  SwiperCore.use([Navigation]);
  return (
    <div className="px-4 py-6 dark:bg-gray-700">
      <div class="mx-auto mb-8 max-w-screen-md text-center lg:mb-16">
        <h2 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Các khóa học mới mở
        </h2>
        <p class="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
          Cập nhật những khóa học tiếng Anh mới nhất, phù hợp với mọi trình độ
          và mục tiêu học tập của bạn.
        </p>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {mockCourses.map((product, index) => (
          <SwiperSlide key={product.id}>
            <div
              className="cursor-pointer rounded-md bg-green-200 p-4 text-center shadow-md transition duration-300 hover-animation"
              onClick={() => navigate(`/productDetail/${product._id}`)}
            >
              <img
                src={product.image}
                alt={product.title}
                className="mx-auto mb-3 h-56 object-contain"
              />
              <h3 className="text-base font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-500">{product.treatment}</p>
              <p className="text-lg font-bold text-red-500">
                {product.price} VNĐ
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperProductComponent;
