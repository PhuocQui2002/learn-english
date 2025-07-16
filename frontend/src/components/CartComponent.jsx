import React from "react";
import img3 from "../assets/images/AVN6.jpg";
import { Button, Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import "../style/CartComponent.css"; 

function CartComponent({ data }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 gap-8 px-8 pt-8 dark:bg-gray-900 sm:grid-cols-2 md:grid-cols-4">
        {data.map((product, index) => (
          <Card
            key={index}
            className="max-w-[300px] transition duration-300 hover-animation"
            imgSrc={product.image}
          >
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.title}
            </h5>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              {product.treatment}
            </p>
            <div className="grid grid-cols-2 text-sm text-gray-700 dark:text-gray-400">
              <p className="mt-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                {product.price}Đ
              </p>
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
