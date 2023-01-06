// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import banner3 from "./images/banner3.jpg";
// import slide1 from "./images/slide1.png";
// import slide2 from "./images/slide2.png";
// import slide3 from "./images/slide3.png";
// import slide4 from "./images/slide4.png";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";

// const dataset = [
//   {
//     image: slide1,
//   },
//   {
//     image: slide2,
//   },
//   {
//     image: slide3,
//   },
//   {
//     image: slide4,
//   },
// ];

// const CarouselFunction = () => {
//   const [defaultImage, setDefaultImage] = useState({});
//   const settings = {
//     infinite: true,

//     slidesToShow: 3,
//     slidesToScroll: 3,
//     initialSlide: 1,
//     // responsive: [
//     //   {
//     //     breakpoint: 1024,
//     //     settings: {
//     //       slidesToShow: 2,
//     //       slidesToScroll: 2,
//     //       infinite: true,
//     //       dots: true,
//     //     },
//     //   },
//     //   {
//     //     breakpoint: 600,
//     //     settings: {
//     //       slidesToShow: 2,
//     //       slidesToScroll: 2,
//     //       initialSlide: 2,
//     //     },
//     //   },
//     //   {
//     //     breakpoint: 480,
//     //     settings: {
//     //       slidesToShow: 1,
//     //       slidesToScroll: 1,
//     //     },
//     //   },
//     // ],
//   };

//   const handleErrorImage = (data) => {
//     setDefaultImage((prev) => ({
//       ...prev,
//       [data.target.alt]: data.target.alt,
//       linkDefault: banner3,
//     }));
//   };

//   return (
//     <div className="App w-full">
//       <Slider {...settings}>
//         {dataset.map((item, i) => (
//           <div key={i} style={{ width: 100 }}>
//             <div className=" card border-2 h-[20rem]">
//               <div className="card-top">
//                 <img
//                   style={{ marginRight: 0 }}
//                   src={
//                     defaultImage[item.title] === item.title
//                       ? defaultImage.linkDefault
//                       : item.image
//                   }
//                   alt={item.title}
//                   onError={handleErrorImage}
//                 />
//               </div>
//               <div className="card-bottom"></div>
//               <div className="flex items-center justify-center font-bold mt-[1rem]">
//                 <MdOutlineKeyboardArrowRight className="text-[#E81932] " />
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default CarouselFunction;
