

export default function Navbar() {
  return (
    <>
      <div className="max-w-full w-[100%] bg-black text-white px-5">
        <nav className="flex flex-wrap justify-between items-center sm:items-center py-2 space-y-4 sm:space-y-0 md:space-y-0 sm:flex-col md:flex-col xl:flex-row">
          {/* Logo Section */}
          <div className="basis-[100%] md:basis-[7%] flex justify-center md:justify-center items-center border border-black hover:border-white p-2 cursor-pointer">
            <img
              src="/src/assets/images/amazonIcon.png"
              alt="Logo"
              className="w-[5rem] sm:w-[4rem] md:w-[5rem]"
            />
          </div>

          {/* Deliver to Section */}
          <div className="basis-[100%] md:basis-auto  lg:basis-[8%]  justify-center md:justify-start items-center leading-3 border border-black hover:border-white p-2 cursor-pointer">
            <p className="text-xs  text-[#CCCCCC] ml-4">Deliver to</p>
            <div className="flex items-center">
              <i className="fa-solid fa-location-dot"></i>
              <p className="ml-1 text-sm font-bold">India</p>
            </div>
          </div>

          {/* Search Bar Section */}
          <div className="basis-[100%] md:basis-[55%] lg:basis-[45%] flex items-center bg-white text-black border-2 border-slate-300 rounded-lg text-sm hover:border-[#FFBD69] group">
            <select
              name="select"
              id="select-box"
              className="py-3 group-active:bg-[#FFBD69] group-focus:outline-none focus:ring group-focus:ring-[#FFBD69] outline-none w-full md:w-12 text-center bg-[#E6E6E6] rounded-l-lg text-[0.9rem]"
            >
              <option value="">All</option>
              <option value="">English</option>
              <option value="">Hindi</option>
              <option value="">Computer Products</option>
            </select>
            <input
              type="text"
              placeholder="Search"
              className="border-2 border-solid border-white w-full p-2 outline-none"
            />
            <button className="bg-[#FFBD69] text-white py-3 px-4 rounded-md outline-none rounded-l-none">
              <i className="fa-solid fa-magnifying-glass text-[#333333]"></i>
            </button>
          </div>

          {/* Account Section */}
          <div className="basis-[100%] md:basis-auto  lg:basis-[10%]  justify-center md:justify-start items-center leading-3 border border-black hover:border-white p-2 cursor-pointer">
            <p className="text-xs text-[#CCCCCC] ml-1">Hello, Sign in</p>
            <p className="ml-1 font-bold text-sm">Account & Lists</p>
          </div>

          {/* Return & Orders Section */}
          <div className="basis-[100%] md:basis-auto lg:basis-[6%] justify-center md:justify-start items-center leading-3 border border-black hover:border-white p-2 cursor-pointer">
            <p className="text-xs text-[#CCCCCC] ml-1">Return</p>
            <p className="ml-1 font-bold text-sm">& Orders</p>
          </div>

          {/* Cart Section */}
          <div className="basis-[100%] md:basis-[6%]  justify-center md:justify-start items-center leading-3 border border-black hover:border-white p-2 relative cursor-pointer">
            <p className="text-xs text-[#F08804] absolute left-4 bottom-6">0</p>
            <div className="flex md:flex-col lg:flex-row items-center">
              <i className="fa-brands fa-opencart text-[23px] font-bold"></i>
              <p className="ml-1 text-[0.82rem] font-bold">Cart</p>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
