// import React from 'react';

// const IngredientsSection = () => {
//   return (
//     <section className="bg-gray-50 py-16">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6">Better Ingredients</h2>
//         <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
//           Only the best when you choose products offered on our platform - high-quality ingredients for high-quality products!
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Clinically Studied</h3>
//             <p className="text-gray-600">All products have undergone lab and safety tests.</p>
//           </div>
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Vegetarian Friendly</h3>
//             <p className="text-gray-600">We offer a wide selection of vegetarian products to meet your needs.</p>
//           </div>
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Made in India</h3>
//             <p className="text-gray-600">Shop local and explore health products made right here in India.</p>
//           </div>
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Free Shipping</h3>
//             <p className="text-gray-600">We deliver to your door with no shipping costs on your orders.</p>
//           </div>
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">No Risk</h3>
//             <p className="text-gray-600">We ensure that all products are safe and within their use-by date.</p>
//           </div>
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">GMO Free</h3>
//             <p className="text-gray-600">Natural, no modified products and derivatives for those who need it.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IngredientsSection;

import Image from "next/image";

const IngredientsSection = () => {
  const ingredients = [
    {
      title: "Vitamin C",
      description: "Vitamin C as ascorbic acid",
      image: "/images/h2-b1.jpg.png", // Replace with your path
    },
    {
      title: "Vitamin B3",
      description: "Niacin for healthy gut and skin",
      image: "/images/bn2-2.jpg.png", // Replace with your path
    },
    {
      title: "Magnesium",
      description: "Boost energy and support muscle function",
      image: "/images/bn2-3.jpg.png", // Replace with your path
    },
    {
      title: "Hyaluronic Acid",
      description: "For smooth, supple and soft skin!",
      image: "/images/bn2-4.jpg.png", // Replace with your path
    },
    {
      title: "Lactobacillus",
      description: "Invigorate your gut microbiome",
      image: "/images/bn2-5.jpg.png", // Replace with your path
    },
  ];

  return (
    <session className="mt-4 sm:mt-0">
      <div className="col-span-4 sm:hidden block">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center mt-6 sm:mt-0">
          Better Ingredients
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12 text-center">
          Only the best when you choose products offered on our platform -
          high-quality ingredients for high-quality products!
        </p>
      </div>
    <div className="relative bg-gray-50 sm:py-16 sm:px-16  
    flex overflow-x-scroll scroll-smooth snap-x space-x-4 whitespace-nowrap 
    sm:grid sm:overflow-visible sm:grid-cols-10 sm:gap-6 sm:whitespace-normal">
      <div className="sm:col-span-4 hidden sm:inline">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Better Ingredients
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          Only the best when you choose products offered on our platform -
          high-quality ingredients for high-quality products!
        </p>
      </div>
      {ingredients.map((item, index) => (
        <div key={index} 
          className="col-span-3 bg-blue-100 rounded-2xl p-4   
            sm:overflow-visible sm:grid sm:grid-cols-1 bg-cover
            hover:shadow-md
            transition-all ease-in-out duration-500
            cursor-pointer
            "
          style={{
            backgroundImage: `url('${item.image}')`, // Lazy loading
          }}
          >
          <div className="mb-4 mt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
          <button className="underline text-blue-600 mt-9 text-sm font-bold justify-self-start">
            SEE MORE
          </button>
        </div>
      ))}
      <div className="col-span-1 grid grid-cols-1 gap-3 pt-1 hidden sm:block">
          <div className="w-20 h-20 bg-blue-300 rounded rounded-br-full"></div>
          <div className="w-20 h-20 bg-yellow-300 rounded rounded-full"></div>
      </div>
    </div>
    </session>
  );
};

export default IngredientsSection;
