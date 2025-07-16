import img1 from "../assets/images/nen.jpg";
import img2 from "../assets/images/nen1.jpg";

import img4 from "../assets/images/img.jpg";

import { Carousel } from "flowbite-react";

function CarouselComponent() {
  const imageList = [img1, img2, img4];

  return (
    <div className="relative h-56 overflow-hidden rounded-none md:h-96">
      <Carousel pauseOnHover className="">
        {imageList.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="h-full w-full object-contain "
          />
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
