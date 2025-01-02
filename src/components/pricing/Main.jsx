import { useEffect } from "react";
import { fetchDELETE, fetchGET } from "../../interceptor";

const Main=({state,setState})=> {
  console.log(setState,state);
  const getProducts =async () => {
    const apiUrl = "http://192.168.29.221:4000/api/v1/products"
    try {
        await fetchGET(apiUrl)
        .then(res=>{
            console.log(res);
            if(res.success){
                setState((prev) => ({ ...prev, list: res.products }));
            }
        })
    } catch (error) {
        console.log(new Error(error))
    }
  }

  const handleRemove = async (e)=>{
    const {id} = e.target;
    const apiUrl = `http://192.168.29.221:4000/api/v1/product/${id}`
    try {
      await fetchDELETE(apiUrl)
        .then((res) => {
          console.log(res);
          if(res.success){
              getProducts();
          }
        });
    } catch (error) {
      console.log(new Error(error));
    }
  }

  useEffect(()=>{
    getProducts();
},[])

  return (
    <>
      <div className="mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-2 ">
      {state?.list?.length>0&& 
        state?.list?.map((item,index)=>{
          return (
            <div key={item?._id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white relative bottom-80 p-2  ">
          {/* Card Image */}
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/2023/GateWay/December/CC/PC_758x608_1._SY608_CB572341311_.jpg"
            alt="Card Image"
            className="w-full h-80 object-cover"
          />

          {/* Card Body */}
          <div className="p-4">
            <h5 className="text-xl font-semibold text-gray-800">
              {item?.name}
            </h5>
            <p className="text-gray-600 text-base mt-2">
              {item?.description}
            </p>
            <div className="text-center">
              <button className=" font-bold  inline-block mt-4 py-2 px-4 text-white bg-[#F08804] rounded hover:bg-blue-600 transition duration-300">
                Add To Cart
              </button>
              <button id={item?._id} onClick={handleRemove}>Remove</button>
            </div>
          </div>
        </div>
          )
        })
      }
        

        
      </div>
    </>
  );
}

export default Main;