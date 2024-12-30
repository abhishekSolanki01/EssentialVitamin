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
    <div className="sm:grid sm:grid-cols-4 gap-4 mb-1 sm:overflow-visible sm:whitespace-normal
      flex overflow-x-scroll scroll-smooth snap-x space-x-4 whitespace-nowrap 
    ">
          <div className="col-span-1 snap-always snap-center">
            <div className="grid grid-rows-12 gap-4 min-h-[500px] sm:min-h-[600px]">
              <div className={`row-span-7`}>
                <NewsCard
                  image={news[0].image}
                  title={news[0].title}
                  key={0}
                />
              </div>
              <div className={`row-span-4`}>
                <NewsCard
                  image={news[1].image}
                  title={news[1].title}
                  key={1}
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 snap-always snap-center">
            <div className="grid grid-rows-12 gap-4 min-h-[500px] sm:min-h-[600px]">
              <div className={`row-span-4`}>
                <NewsCard
                  image={news[2].image}
                  title={news[2].title}
                  key={2}
                />
              </div>
              <div className={`row-span-7`}>
                <NewsCard
                  image={news[3].image}
                  title={news[3].title}
                  key={3}
                />
              </div>
            </div>
          </div>

          <div className="col-span-1 snap-always snap-center">
            <div className="grid grid-rows-12 gap-4 min-h-[500px] sm:min-h-[600px]">
              <div className={`row-span-7`}>
                <NewsCard
                  image={news[4].image}
                  title={news[4].title}
                  key={4}
                />
              </div>
              <div className={`row-span-4`}>
                <NewsCard
                  image={news[5].image}
                  title={news[5].title}
                  key={5}
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 snap-always snap-center">
            <div className="grid grid-rows-12 gap-4 min-h-[500px] sm:min-h-[600px]">
              <div className={`row-span-4`}>
                <NewsCard
                  image={news[6].image}
                  title={news[6].title}
                  key={6}
                />
              </div>
              <div className={`row-span-7`}>
                <NewsCard
                  image={news[7].image}
                  title={news[7].title}
                  key={7}
                />
              </div>
            </div>
          </div>
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
