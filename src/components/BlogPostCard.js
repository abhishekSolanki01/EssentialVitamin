import Image from 'next/image';

const BlogPostCard = ({ title, date, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
      <Image 
        src={image} 
        alt={title} 
        width={400} 
        height={250} 
        className="w-full"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-2">{date}</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogPostCard;
