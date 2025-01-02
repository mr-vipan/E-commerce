

export default function NavbarMenu() {
  return (
    <>
      <div className="max-w-auto bg-[#131921] text-white">
        <div className="flex  justify-start items-center p-2 md:flex-row flex-col">
          <div className="basis-auto flex  items-center cursor-pointer">
            <p className="text-xm ">
              <i className="fa-solid fa-bars"></i>
            </p>
            <p className="ml-1 text-xm">All</p>
          </div>
          <div className="basis-auto ml-3 flex items-center cursor-pointer">
            <p className="text-xm">Fresh</p>
          </div>
          <div className="basis-auto ml-3 flex items-center cursor-pointer">
            <p className="text-xm">MX Player</p>
          </div>
          <div className="basis-auto ml-3 flex items-center cursor-pointer">
            <p className="text-xm">Sell</p>
          </div>
          <div className="basis-auto ml-3 flex items-center cursor-pointer">
            <p className="text-xm">Mobiles</p>
          </div>
          <div className="basis-auto ml-3 flex items-center cursor-pointer">
            <p className="text-xm">Customer Service</p>
          </div>
          <div className="basis-auto ml-3 flex items-center cursor-pointer">
            <p className="text-xm">Electonics</p>
          </div>
          <div className="basis-auto ml-3 flex items-center cursor-pointer">
            <p className="text-xm">Fashion</p>
          </div>
          <div className="basis-auto ml-3 flex items-center cursor-pointer">
            <p className="text-xm">etc.</p>
          </div>
        </div>
      </div>
    </>
  );
}
