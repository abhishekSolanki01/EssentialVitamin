const Footer = () => {
  return (
    <footer className="bg-[#16414f] text-gray-100 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="grid sm:grid-cols-3 sm:gap-20 gap-1 sm:px-16">
          <div className="col-span-1">
            <ContactCard
              title={"Phone Number"}
              value={"+974 3118 1843"}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 sm:size-9 m-auto mt-1"
                >
                  <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                  <path
                    fillRule="evenodd"
                    d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            />
          </div>
          <div className="col-span-1">
            <ContactCard
              title={"Email Address"}
              value={"Elbrithcqhr@gmail.com"}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 sm:size-9 m-auto mt-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.912 3a3 3 0 0 0-2.868 2.118l-2.411 7.838a3 3 0 0 0-.133.882V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0 0 17.088 3H6.912Zm13.823 9.75-2.213-7.191A1.5 1.5 0 0 0 17.088 4.5H6.912a1.5 1.5 0 0 0-1.434 1.059L3.265 12.75H6.11a3 3 0 0 1 2.684 1.658l.256.513a1.5 1.5 0 0 0 1.342.829h3.218a1.5 1.5 0 0 0 1.342-.83l.256-.512a3 3 0 0 1 2.684-1.658h2.844Z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            />
          </div>
          <div className="col-span-1">
            <ContactCard
              title={"Office Location"}
              value={" Ambassador Street, Zone 61,"}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 sm:size-9 m-auto mt-1"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            />
          </div>
        </div>
        <h3 className="text-xl font-semibold mt-4 mb-4">
          Elbrit Life Sciences
        </h3>
        <p className="text-sm justify-self-center sm:w-[500px] whitespace-normal">
          Your health, physical and emotional well-being is important to us. We
          are always by your side and have made it even easier for you to find
          the necessary vitamins.
        </p>
        <div className="mt-4">
          <p className="text-xs">
            © {new Date().getFullYear()} Elbrit Life Sciences. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const ContactCard = ({ title, value, icon }) => (
  <div className="rounded-xl p-4 bg-[#215d72] grid grid-cols-5">
    <div className="col-span-1">{icon}</div>
    <div className="col-span-4" >
      <div className="hidden sm:block text-start">{title}</div>
      <div className="text-start">{value}</div>
    </div>
  </div>
);

export default Footer;
