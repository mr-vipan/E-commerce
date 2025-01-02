import React, { useEffect, useState } from "react";



 const InputForm=({state,setState})=> {
  

  const inputHandler = (e, type) => {
    const { name, value } = e.target;

    if (type === "image") {
        setState((prev) => ({ ...prev, [name]: e.target.files[0] }));
    } else {
        setState((prev) => ({ ...prev, [name]: value }));
    }
  };

  

  async function handleForm(e) {
    e.preventDefault();
    const apiUrl = "http://192.168.29.221:4000/api/v1/product/new";
    const body = JSON.stringify({
        ...state,
        ...(state.img?{img:{url:state.img}}:{})
    });
    await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "credentials": true,
      },
      body,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if(res.success){
            // getProducts();
        }
      });
  }

  return (
    <div>
      <form onSubmit={handleForm}>
        <div className="space-y-12 p-10">
          <div className="border-b border-gray-900/10 pb-12 ">
            <h2 className="text-base/7  text-center font-semibold text-gray-900">
              Products Information
            </h2>
            <p className="mt-1 text-sm/6 text-center text-gray-600">
              Use a permanent address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) => inputHandler(e, "")}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Products name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="Description "
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    onChange={(e) => inputHandler(e, "")}
                    type="text"
                    name="Description "
                    id="Description "
                    placeholder="Products Description "
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="price"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Price
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) => inputHandler(e, "")}
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Product price"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="price"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Category
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) => inputHandler(e, "")}
                    type="text"
                    name="category"
                    id="category"
                    placeholder="Product Category"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="price"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Stock
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) => inputHandler(e, "")}
                    type="number"
                    name="stock"
                    id="stock"
                    placeholder="Product stock"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="img"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Upload Product Image
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) => inputHandler(e, "")}
                    type="file"
                    name="img"
                    id="img"
                    placeholder="Product image"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-x-6 pb-5 ">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
          <button
            type="button"
            className="text-sm/6 font-semibold text-gray-900"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputForm;
