import React, { useState } from "react";
import NavComponent from "../components/NavComponent";
import { RiChatHistoryFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { GiArchiveRegister } from "react-icons/gi";
import PaginationComponent from "../components/PaginationComponent";
function HistoryPage() {
  const courseHistory = useSelector((store) => store.history.courseHistory);
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(courseHistory.length / itemsPerPage);
  const paginatedCourses = courseHistory.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );
  return (
    <div className="flex h-screen flex-col bg-white shadow-md dark:bg-gray-600">
      <NavComponent />
      <div className="mb-2 flex gap-4 px-5 text-center">
        <RiChatHistoryFill size={33} color="blue" />{" "}
        <p className="mt-1 text-xl font-semibold text-yellow-200 dark:text-blue-500">
          {">>"} Lịch sử xem
        </p>
      </div>
      <div className="relative flex-1 overflow-x-auto px-5 shadow-md sm:rounded-lg">
        <table className="w-max text-left text-sm text-gray-500 dark:text-gray-400 sm:w-full">
          <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-16 py-3">
                <span class="sr-only">Image</span>
              </th>
              <th scope="col" class="whitespace-nowrap px-6 py-3">
                Khóa học
              </th>
              <th scope="col" class="whitespace-nowrap px-6 py-3">
                Lộ trình
              </th>
              <th scope="col" class="whitespace-nowrap px-6 py-3">
                Giá
              </th>
              <th scope="col" class="whitespace-nowrap px-6 py-3">
                Đăng ký
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedCourses.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="py-4 text-center text-gray-500 dark:text-gray-300"
                >
                  Không có lịch sử xem nào.
                </td>
              </tr>
            ) : (
              paginatedCourses.map((course, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 bg-gray-100 hover:bg-gray-300 dark:border-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500"
                >
                  <td className="p-4">
                    <img
                      src={course.image}
                      className="max-h-full w-16 max-w-full md:w-32"
                      alt={course.title}
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {course.title}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      {course.description}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {course.price?.toLocaleString()}đ
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-red-600 hover:underline dark:text-red-500"
                    >
                      <GiArchiveRegister className="text-2xl text-green-500" />
                    </a>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default HistoryPage;
