import React, { useState } from "react";
import NavComponent from "../components/NavComponent";
import { useDispatch, useSelector } from "react-redux";
import { FcLike, FcDislike } from "react-icons/fc";
import { IoHeartDislikeSharp } from "react-icons/io5";
function Favories() {
   const [isHover, setIsHover] = useState(null);
  
  const courseFavorie = useSelector((store) => store.favories.courseFa);
  console.log("courseFavorie", courseFavorie);
  return (
    <div className="flex h-screen flex-col bg-white shadow-md dark:bg-gray-600">
      <NavComponent />
      <div className="mb-2 flex justify-center gap-4 text-center">
        <FcLike size={33} />{" "}
        <p className="mt-1 text-xl font-semibold text-pink-600 dark:text-pink-400">
          Danh sách khóa học yêu thích
        </p>
      </div>
      <div className="flex-1 overflow-x-auto bg-white shadow-md dark:bg-gray-900">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">Giáo viên</th>
              <th className="px-6 py-3">Khóa học</th>
              <th className="px-6 py-3">Giá</th>
              <th className="px-6 py-3">Xóa</th>
              <th className="px-6 py-3">Đăng ký</th>
            </tr>
          </thead>
          <tbody>
            {courseFavorie.map((course, index) => (
              <tr className="cursor-pointer border-b border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                <td className="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={course.teacher.avatar}
                    alt="Neil Sims"
                  />
                  <div className="ml-4 ps-3">
                    <div className="text-base font-semibold">
                      {course.teacher.name}
                    </div>
                    <div className="font-normal text-gray-500">
                      {course.teacher.school}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">{course.title}</td>
                <td className="px-6 py-4">{course.price} VNĐ</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium hover:underline dark:text-red-500"
                  >
                    <IoHeartDislikeSharp
                      color={isHover  === index ? "red" : "pink"}
                      onMouseEnter={() => setIsHover(index)}
                      onMouseLeave={() => setIsHover(null)}
                      size={30}
                      className="hover:color-red-600 cursor-pointer text-pink-500 transition duration-300"
                    />
                  </a>
                </td>
                <td className="px-6 py-4">
                  <button className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700">
                    Đăng ký
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Favories;
