import React, { useState } from "react";
import CartComponent from "../components/CartComponent";
import NavComponent from "../components/NavComponent";
import { mockCourses } from "../api/mockData";
import PaginationComponent from "../components/PaginationComponent";
function CoursePage() {
  const uniqueCategories = [];

  const [selectedCategory, setSelectedCategory] = useState("Khóa học");
  const [searchKeyword, setSearchKeyword] = useState("");

  const [searchPrice, setSearchPrice] = useState([0, 1000000]);
  const handlePriceChange = (e) => {
    const value = e.target.value;
    switch (value) {
      case "0-100":
        setSearchPrice([0, 1000000]);
        break;
      case "100-300":
        setSearchPrice([100000, 300000]);
        break;
      case "300-500":
        setSearchPrice([300000, 500000]);
        break;
      case "500+":
        setSearchPrice([500000, 1000000]); // Giả định giới hạn trên
        break;
      default:
        setSearchPrice([0, 1000000]);
    }
  };

  mockCourses.forEach((course, index) => {
    if (!uniqueCategories.includes(course.category)) {
      uniqueCategories.push(course.category);
    }
  });

  const filteredCourses = mockCourses.filter((course) => {
    const matchKeyword = course.title
      .toLowerCase()
      .includes(searchKeyword.toLowerCase());

    const matchPrice =
      course.price >= searchPrice[0] && course.price <= searchPrice[1];

    const matchCategory =
      selectedCategory === "Khóa học" || course.category === selectedCategory;

    return matchKeyword && matchPrice && matchCategory;
  });
  const searchClean = () => {
    setSelectedCategory("Khóa học");
    setSearchKeyword("");
    setSearchPrice([0, 1000000]);
  };

  const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
    const paginatedCourses = filteredCourses.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage,
    );
  return (
    <div className="flex h-screen flex-col">
      <NavComponent />
      <section className="flex items-center bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
          <div className="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <div className="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0">
              <div className="w-full md:w-1/2">
                <form className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                      placeholder="Search"
                      required=""
                      value={searchKeyword}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                      a
                    />
                  </div>
                </form>
              </div>
              <div className="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
                <div className="flex w-full items-center space-x-3 md:w-auto">
                  <button
                    id="actionsDropdownButton"
                    data-dropdown-toggle="actionsDropdown"
                    className="hover:text-primary-700 flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto"
                    type="button"
                  >
                    <svg
                      className="-ml-1 mr-1.5 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      />
                    </svg>
                    {selectedCategory}
                  </button>
                  <div
                    id="actionsDropdown"
                    className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
                  >
                    <div className="py-1 text-sm text-gray-700 dark:text-gray-200">
                      {uniqueCategories.map((category, index) => (
                        <p
                          key={index}
                          onClick={() => {
                            setSelectedCategory(category);
                            setTimeout(() => applyFilters(), 0);
                          }}
                          className="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          {category}
                        </p>
                      ))}
                    </div>
                  </div>
                  <button
                    id="filterDropdownButton"
                    data-dropdown-toggle="filterDropdown"
                    className="hover:text-primary-700 flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto"
                    type="button"
                  >
                    Khoản giá
                    <svg
                      className="-mr-1 ml-1.5 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      />
                    </svg>
                  </button>

                  <div
                    id="filterDropdown"
                    className="z-10 hidden w-48 rounded-lg bg-white p-3 shadow dark:bg-gray-700"
                  >
                    <ul
                      className="space-y-2 text-sm"
                      aria-labelledby="dropdownDefault"
                    >
                      <li className="flex items-center">
                        <input
                          id="price-1"
                          type="radio"
                          name="price-range"
                          value="0-100"
                          onChange={handlePriceChange}
                          checked={
                            searchPrice[0] === 0 && searchPrice[1] === 1000000
                          }
                          className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                        />
                        <label
                          htmlFor="price-1"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        >
                          All
                        </label>
                      </li>

                      <li className="flex items-center">
                        <input
                          id="price-2"
                          type="radio"
                          name="price-range"
                          value="100-300"
                          onChange={handlePriceChange}
                          className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                        />
                        <label
                          htmlFor="price-2"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        >
                          100k–300k
                        </label>
                      </li>

                      <li className="flex items-center">
                        <input
                          id="price-3"
                          type="radio"
                          name="price-range"
                          value="300-500"
                          onChange={handlePriceChange}
                          className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                        />
                        <label
                          htmlFor="price-3"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        >
                          300k–500k
                        </label>
                      </li>

                      <li className="flex items-center">
                        <input
                          id="price-4"
                          type="radio"
                          name="price-range"
                          value="500+"
                          onChange={handlePriceChange}
                          className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                        />
                        <label
                          htmlFor="price-4"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        >
                          Trên 500k
                        </label>
                      </li>
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => searchClean()}
                    className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 md:w-auto"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="mr-2 h-4 w-4 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Xóa bọ lọc
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex-1 overflow-x-auto bg-white shadow-md dark:bg-gray-900">
        <CartComponent data={paginatedCourses} />
      </div>
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default CoursePage;
