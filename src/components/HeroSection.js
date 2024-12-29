import Image from "next/image";

const HeroSection = () => {
  return fn();
  // <section className="bg-blue-50 py-16">
  //   <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
  //     {/* Text Content */}
  //     <div className="text-center md:text-left max-w-lg">
  //       <h1 className="text-4xl font-bold text-blue-600 mb-4">
  //         Essential Vitamins
  //       </h1>
  //       <p className="text-gray-700 text-lg mb-6">
  //         Your health, physical and emotional well-being is important to us.
  //         Explore high-quality products tailored for your wellness.
  //       </p>
  //       <button className="px-6 py-3 bg-blue-500  rounded hover:bg-blue-600 transition">
  //         Get Your Vitamins
  //       </button>
  //     </div>

  //     <div className="mt-8 md:mt-0">
  //       <Image
  //         src="/images/f2-1.png.png"
  //         alt="Hero Section Image"
  //         width={500}
  //         height={500}
  //         className="rounded-lg shadow-lg"
  //         priority
  //       />
  //     </div>
  //   </div>
  // </section>
};

const fn = () => {
  return (
    <section className="text-[#003368] sm:mb-[-250px]">
      <div className="bg-[#E1F4FB] sm:h-[1000px]">
        <div className="sm:max-w-7xl mx-auto p-4 h-screen sm:block grid grid-cols-1">
          <div className="pt-4 sm:pt-8 sm:w-full flex flex-col sm:flex-row justify-evenly sm:block ">
            <div className="lg:px-0">
              <h1 className="text-5xl sm:text-9xl text-left sm:pt-8 font-bold text-center">
                Essential Vitamins
              </h1>
            </div>
          </div>
          <div className="sm:mb-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:p-4">
            <div className="content-end sm:mb-10 sm:p-2 order-2 sm:order-1">
              <h1 className="text-xl sm:text-3xl text-center sm:text-left sm:pt-16 pb-2 sm:pb-4 text-slate-400">
                Online Medical Supplies
              </h1>
              <h1 className="text-2xl sm:text-4xl text-center sm:text-left sm:pt-4 pb-2 sm:pb-4">
                Get your vitamins & minerals
              </h1>

              <button className="bg-[#16414f] text-white hover:bg-[#123743]  font-bold py-4 px-20 mt-3 rounded-full grid justify-self-center sm:justify-self-auto mb-8">
                Explore
              </button>
            </div>
            <div className="order-1 sm:order-2">
              <Image
                src="/images/f2-1.png.png"
                alt="Hero Section Image"
                width={500}
                height={500}
                className="rounded-lg"
                priority
              />
            </div>
            <div className="content-end sm:grid grid-cols gap-4 order-3 sm:order-3 hidden">
              <div className="m-4 grid gap-4 grid-cols-12">
                <div className="col-span-3 rounded-full bg-[#16414f]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-16 text-white m-auto mt-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                    />
                  </svg>
                </div>
                <div className="col-span-9 flex flex-col">
                  <div>
                    <h1 className="text-2xl  text-left pb-1">Vitamins</h1>
                    <h1 className="text-l  text-left text-slate-400">
                      Increase vitamins and minerals in your diet
                    </h1>
                  </div>
                </div>
              </div>

              <div className="m-4 grid gap-4 grid-cols-12">
                <div className="col-span-3 rounded-full bg-[#16414f]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-16 text-white m-auto mt-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"
                    />
                  </svg>
                </div>
                <div className="col-span-9 flex flex-col">
                  <div>
                    <h1 className="text-2xl  text-left pb-1">Weight Loss</h1>
                    <h1 className="text-l  text-left text-slate-400">
                      Find scientifically proven solutions
                    </h1>
                  </div>
                </div>
              </div>

              <div className="m-4 grid gap-4 grid-cols-12">
                <div className="col-span-3 rounded-full bg-[#16414f]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-16 text-white m-auto mt-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </div>
                <div className="col-span-9 flex flex-col">
                  <div>
                    <h1 className="text-2xl  text-left pb-1">
                      Functional Foods
                    </h1>
                    <h1 className="text-l  text-left text-slate-400">
                      Functional foods from protein powers to baby formula
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* two circles */}
          <div className="hidden sm:grid sm:grid-cols-2 w-[70px] mt-8 pb-8 justify-self-center sm:justify-self-start">
            <div className="min-h-[30px] w-[30px] rounded-full bg-[#A7B8CA]"></div>
            <div className="min-h-[30px] w-[30px] rounded-full bg-[#A7B8CA]"></div>
          </div>
        </div>
      </div>

      <div className="sm:max-w-7xl mx-auto sm:p-4 sm:translate-y-[-42%]">
        <div className=" sm:mt-12 sm:min-h-[400px] sm:rounded-[60px] bg-[#17414f]">
          <div className="flex overflow-x-scroll scroll-smooth	 snap-x space-x-4 whitespace-nowrap sm:overflow-visible sm:grid sm:gap-6 sm:grid-cols-3 sm:whitespace-normal">
            <div className="snap-center snap-center mt-8 w-screen sm:w-auto sm:mt-0 mx-2 sm:mx-8 sm:px-8 mb-4 sm:grid justify-items-center grid-cols-1 sm:translate-y-[-25%]">
              <div className="grid justify-items-center">
                <div className="h-[100px] w-[100px] rounded-full bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-16 m-auto mt-4 text-[#17414f]"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V3.936Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <h1 className="text-2xl text-white  text-center mt-4  w-[300px]">
                Clinically Studied
              </h1>
              <h1 className="text-l  text-center pb-4 p-2 text-slate-400 whitespace-normal whitespace-normal">
                All product that we udergoes have safety test
              </h1>
            </div>

            <div className="snap-center mt-8 w-screen sm:w-auto sm:mt-0 mx-2 sm:mx-8 sm:px-8 mb-4 sm:grid justify-items-center grid-cols-1 sm:translate-y-[-25%]">
              <div className="grid justify-items-center">
                <div className="h-[100px] w-[100px] rounded-full bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-16 m-auto mt-4 text-[#17414f]"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <h1 className="text-2xl text-white  text-center mt-4  w-[300px]">
                Vegetarian Friendly
              </h1>
              <h1 className="text-l  text-center pb-4 p-2 text-slate-400 whitespace-normal">
                We have a wide selection of vegetarian products to meet your
                needs
              </h1>
            </div>

            <div className="snap-center mt-8 w-screen sm:w-auto sm:mt-0 mx-2 sm:mx-8 sm:px-8 mb-4 sm:grid justify-items-center grid-cols-1 sm:translate-y-[-25%]">
              <div className="grid justify-items-center">
                <div className="h-[100px] w-[100px] rounded-full bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-16 m-auto mt-4 text-[#17414f]"
                  >
                    <path
                      fillRule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <h1 className="text-2xl text-white  text-center mt-4  w-[300px]">
                Made in India
              </h1>
              <h1 className="text-l  text-center pb-4 p-2 text-slate-400 whitespace-normal">
                Shop local and explore health products made right here in India
              </h1>
            </div>

            <div className="snap-center mt-8 w-screen sm:w-auto sm:mt-0 mx-2 sm:mx-8 sm:px-8 mb-4 sm:grid justify-items-center grid-cols-1 sm:translate-y-[-25%]">
              <div className="grid justify-items-center">
                <div className="h-[100px] w-[100px] rounded-full bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-16 m-auto mt-4 text-[#17414f]"
                  >
                    <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                  </svg>
                </div>
              </div>
              <h1 className="text-2xl text-white  text-center mt-4  w-[300px]">
                Free shipping
              </h1>
              <h1 className="text-l  text-center pb-4 p-2 text-slate-400 whitespace-normal">
                We deliver to your door with no shipping costs on your orders
              </h1>
            </div>

            <div className="snap-center mt-8 w-screen sm:w-auto sm:mt-0 mx-2 sm:mx-8 sm:px-8 mb-4 sm:grid justify-items-center grid-cols-1 sm:translate-y-[-25%]">
              <div className="grid justify-items-center">
                <div className="h-[100px] w-[100px] rounded-full bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-16 m-auto mt-4 text-[#17414f]"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <h1 className="text-2xl text-white  text-center mt-4  w-[300px]">
                No Risk
              </h1>
              <h1 className="text-l  text-center pb-4 p-2 text-slate-400 whitespace-normal">
                We ensure that all products are safe and within their use-by
                date
              </h1>
            </div>

            <div className="snap-center mt-8 w-screen sm:w-auto sm:mt-0 mx-2 sm:mx-8 sm:px-8 mb-4 sm:grid justify-items-center grid-cols-1 sm:translate-y-[-25%]">
              <div className="grid justify-items-center">
                <div className="h-[100px] w-[100px] rounded-full bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-16 m-auto mt-4 text-[#17414f]"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.622 1.602a.75.75 0 0 1 .756 0l2.25 1.313a.75.75 0 0 1-.756 1.295L12 3.118 10.128 4.21a.75.75 0 1 1-.756-1.295l2.25-1.313ZM5.898 5.81a.75.75 0 0 1-.27 1.025l-1.14.665 1.14.665a.75.75 0 1 1-.756 1.295L3.75 8.806v.944a.75.75 0 0 1-1.5 0V7.5a.75.75 0 0 1 .372-.648l2.25-1.312a.75.75 0 0 1 1.026.27Zm12.204 0a.75.75 0 0 1 1.026-.27l2.25 1.312a.75.75 0 0 1 .372.648v2.25a.75.75 0 0 1-1.5 0v-.944l-1.122.654a.75.75 0 1 1-.756-1.295l1.14-.665-1.14-.665a.75.75 0 0 1-.27-1.025Zm-9 5.25a.75.75 0 0 1 1.026-.27L12 11.882l1.872-1.092a.75.75 0 1 1 .756 1.295l-1.878 1.096V15a.75.75 0 0 1-1.5 0v-1.82l-1.878-1.095a.75.75 0 0 1-.27-1.025ZM3 13.5a.75.75 0 0 1 .75.75v1.82l1.878 1.095a.75.75 0 1 1-.756 1.295l-2.25-1.312a.75.75 0 0 1-.372-.648v-2.25A.75.75 0 0 1 3 13.5Zm18 0a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.372.648l-2.25 1.312a.75.75 0 1 1-.756-1.295l1.878-1.096V14.25a.75.75 0 0 1 .75-.75Zm-9 5.25a.75.75 0 0 1 .75.75v.944l1.122-.654a.75.75 0 1 1 .756 1.295l-2.25 1.313a.75.75 0 0 1-.756 0l-2.25-1.313a.75.75 0 1 1 .756-1.295l1.122.654V19.5a.75.75 0 0 1 .75-.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <h1 className="text-2xl text-white  text-center mt-4  w-[300px]">
                GMO free
              </h1>
              <h1 className="text-l  text-center pb-4 p-2 text-slate-400 whitespace-normal">
                Natural, no modified products and derivatives for those who need
                it
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
