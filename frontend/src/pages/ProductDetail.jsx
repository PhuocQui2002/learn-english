import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import NavComponent from "../components/NavComponent";
import ReviewHistory from "../components/ReviewHistory";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { mockCourses } from "../api/mockData";
import { setCourseHistory } from "../redux/Slices/historySlides";
import img from "../assets/images/nen.jpg";
import { setCourseFa } from "../redux/Slices/favoriteSlices";
import SuggestionComponent from "../components/suggestionComponent";
function ProductDetail() {
  const { id } = useParams();
  const courseHistory = useSelector((store) => store.history.courseHistory);
  const courseFavorie = useSelector((store) => store.favories.courseFa);
  const [isFavorite, setIsFavorite] = useState(
    courseFavorie.some((item) => item._id === id),
  );

  const dispatch = useDispatch();

  const filterCourse = mockCourses.find((product) => product._id === id);
  console.log("isFavorite", isFavorite);

  const addFavorie = () => {
    console.log("filterCourse", filterCourse);
    if (!isFavorite) {
      dispatch(setCourseFa([...courseFavorie, filterCourse]));
      setIsFavorite(true);
    }
    if (isFavorite) {
      const updatedList = courseFavorie.filter((item) => item._id !== id);
      dispatch(setCourseFa(updatedList));
      setIsFavorite(false);
    }
  };

  useEffect(() => {
    if (!filterCourse) return;

    const isExist = courseHistory.find((product) => product._id === id);
    if (!isExist) {
      dispatch(setCourseHistory([...courseHistory, filterCourse]));
    }
  }, [id, filterCourse, courseHistory, dispatch]);

  return (
    <div className="min-h-screen">
      <NavComponent />
      <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div class="mx-auto max-w-md shrink-0 lg:max-w-lg">
              <img class="w-full dark:hidden" src={img} alt="Khóa học TOEIC" />
              <img
                class="hidden w-full dark:block"
                src={filterCourse.image}
                alt="Khóa học TOEIC - Dark mode"
              />
            </div>

            <div class="mt-6 sm:mt-8 lg:mt-0">
              <h1 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                {filterCourse.title}
              </h1>
              <div class="mt-2 sm:items-center sm:gap-4">
                <p class="text-2xl font-extrabold text-gray-900 dark:text-white sm:text-3xl">
                  Giá: {filterCourse.price}Đ
                </p>

                <div class="flex items-center gap-2 sm:mt-6 lg:mt-2">
                  <div class="flex items-center gap-1">
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <svg
                          key={i}
                          className={"h-5 w-5 text-yellow-400"}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.12 3.446h3.623c.969 0 1.371 1.24.588 1.81l-2.932 2.128 1.12 3.447c.3.921-.755 1.688-1.54 1.118L10 13.347l-2.93 2.129c-.785.57-1.84-.197-1.54-1.118l1.12-3.447-2.933-2.128c-.782-.57-.38-1.81.588-1.81h3.624l1.12-3.446z" />
                        </svg>
                      ))}
                  </div>
                  <p class="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                    (5.0)
                  </p>
                  <p class="cursor-pointer text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white">
                    345 Đã đăng ký
                  </p>
                </div>
              </div>

              <div class="mt-6 flex flex-col space-y-4 sm:mt-8 sm:flex-row sm:items-center sm:gap-4 sm:space-y-0">
                <p
                  title=""
                  className={`mr-3 flex w-full cursor-pointer items-center justify-center rounded-lg border px-5 py-2.5 text-sm font-medium focus:z-10 focus:outline-none focus:ring-4 sm:w-auto ${
                    isFavorite
                      ? "border-pink-300 bg-pink-100 text-pink-600 hover:bg-pink-200 dark:border-pink-700 dark:bg-pink-900 dark:text-white dark:hover:bg-pink-800"
                      : "border-gray-200 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  } `}
                  onClick={() => addFavorie()}
                >
                  <svg
                    class="-ms-2 me-2 h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                    />
                  </svg>
                  Yêu thích
                </p>

                <p
                  title=""
                  class="hover:text-primary-700 flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
                  role="button"
                >
                  <svg
                    class="-ms-2 me-2 h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    />
                  </svg>
                  Mua khóa học
                </p>
              </div>

              <hr class="my-6 border-gray-200 dark:border-gray-800 md:my-8" />

              <p class="mb-6 text-gray-500 dark:text-gray-400">
                {filterCourse.description}
              </p>

              <p class="text-gray-500 dark:text-gray-400">
                Chúng tôi cam kết giúp học viên tiến bộ rõ rệt sau mỗi khóa học,
                sử dụng ngoại ngữ tự tin trong thực tế. Học viên luôn được giảng
                viên theo sát, hỗ trợ tận tình trong suốt quá trình học. Nếu sau
                khi hoàn thành khóa học mà chưa đạt kết quả như cam kết, học
                viên sẽ được học lại miễn phí theo chính sách của trung tâm.
              </p>
            </div>
          </div>
        </div>
      </section>
      <SuggestionComponent/>
      <ReviewHistory />
    </div>
  );
}

export default ProductDetail;
