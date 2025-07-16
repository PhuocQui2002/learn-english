import React from "react";
import img3 from "../assets/images/AVN6.jpg";

import { Button, Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";

function CartComponent({ data }) {
  
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 gap-8 px-8 pt-8 dark:bg-gray-900 sm:grid-cols-2 md:grid-cols-4">
        {data.map((product, index) => (
          <Card className="max-w-[300px]" imgSrc={product.image}>
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.title}
            </h5>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              {product.treatment}
            </p>
            <div className="grid grid-cols-2 text-sm text-gray-700 dark:text-gray-400">
              <p class="mt-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                {product.price}Đ
              </p>{" "}
              <Button
                color="purple"
                onClick={() => navigate(`/productDetail/${product._id}`)}
              >
                Xem chi tiết
              </Button>
              
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CartComponent;

// <div class="max-w-sm rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
//   <a href="#">
//     <img class="w-full rounded-t-lg" src={img3} alt="" />
//   </a>
//   <div class="p-5">
//     <a href="#">
//       <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//         Noteworthy technology acquisitions 2021
//       </h5>
//     </a>
//     <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
//       Here are the biggest enterprise technology acquisitions of 2021 so
//       far, in reverse chronological order.
//     </p>
//     <a
//       href="#"
//       class="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//     >
//       Read more
//       <svg
//         class="ms-2 h-3.5 w-3.5 rtl:rotate-180"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 14 10"
//       >
//         <path
//           stroke="currentColor"
//           stroke-linecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="M1 5h12m0 0L9 1m4 4L9 9"
//         />
//       </svg>
//     </a>
//   </div>
// </div>
