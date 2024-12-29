import Image from 'next/image';

const CategoryCard = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-lg transition">
      <Image 
        src={image} 
        alt={title} 
        width={150} 
        height={150} 
        className="mx-auto rounded-full"
      />
      <h3 className="text-lg font-semibold text-gray-800 mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        See More
      </button>
    </div>
  );
};

export default CategoryCard;
