import BlogPostCard from "./BlogPostCard";

const BlogSection = () => {
  const news = [
    {
      title: "Covid 19 Epidemic in 2023 is Back",
      description: "",
      image: "/images/blog1-450x580.jpg.png", // Replace with your path
    },
    {
      title: "Covid 19 Epidemic in 2023 is Back",
      description: "",
      image: "/images/blog2-450x580.jpg.png", // Replace with your path
    },
    {
      title: "Covid 19 Epidemic in 2023 is Back",
      description: "",
      image: "/images/blog1-450x580.jpg.png", // Replace with your path
    },
    {
      title: "Covid 19 Epidemic in 2023 is Back",
      description: "",
      image: "/images/blog2-450x580.jpg.png", // Replace with your path
    },
    {
      title: "Covid 19 Epidemic in 2023 is Back",
      description: "",
      image: "/images/blog1-450x580.jpg.png", // Replace with your path
    },
    {
      title: "Covid 19 Epidemic in 2023 is Back",
      description: "",
      image: "/images/blog2-450x580.jpg.png", // Replace with your path
    },
    {
      title: "Covid 19 Epidemic in 2023 is Back",
      description: "",
      image: "/images/blog1-450x580.jpg.png", // Replace with your path
    },
    {
      title: "Covid 19 Epidemic in 2023 is Back",
      description: "",
      image: "/images/blog2-450x580.jpg.png", // Replace with your path
    },
  ];
  return (
    <section className="sm:my-10 mt-5 sm:mt-0">
      <h2 className="text-xl font-bold text-center mb-2">Our Blogs</h2>

      <h2 className="text-3xl font-bold text-center mb-6">Latest News</h2>
      {fn(news)}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> */}

      {/* <BlogPostCard
          title="The Covid-19 Epidemic in 2023"
          date="20 Apr 2023"
          image="/images/blog-post-1.jpg"
        />
        <BlogPostCard
          title="Hac Hendrerit Mus Nons Semper"
          date="17 Mar 2023"
          image="/images/blog-post-2.jpg"
        />
        <BlogPostCard
          title="The Return of Functional Foods"
          date="10 Feb 2023"
          image="/images/blog-post-3.jpg"
        /> */}
      {/* </div> */}
    </section>
  );
};

const fn = (news) => {
  let a = true;
  return (
    <div className="sm:grid sm:grid-cols-4 gap-4 mb-4 sm:overflow-visible sm:whitespace-normal
      flex overflow-x-scroll scroll-smooth snap-x space-x-4 whitespace-nowrap 
    ">
      {[1, 3, 5, 7].map((el, i) => {
        a = !a;
        return (
          <div key={el} className="col-span-1 snap-always snap-center">
            <div className="grid grid-rows-12 gap-4 min-h-[500px] sm:min-h-[600px]">
              <div className={`row-span-${i%2 ? '4' : '7'}`}>
                <NewsCard
                  image={news[el - 1].image}
                  title={news[el - 1].title}
                  key={el - 1}
                />
              </div>
              <div className={`row-span-${i%2 ? '7' : '4'}`}>
                <NewsCard
                  image={news[el].image}
                  title={news[el].title}
                  key={el}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const NewsCard = ({ image, title}) => {
  return (
    <div
      // key={key}
      className="rounded-2xl p-4 h-full  
        bg-cover bg-center
        hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer
        "
        
      style={{
        backgroundImage: `url('${image}')`, // Lazy loading
      }}
    >
      <div className="mb-4 mt-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default BlogSection;
