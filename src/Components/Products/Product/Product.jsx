import React from "react";

function Product({item}) {
    return(
        <div className="w-11/12 md:w-96 md:h-96 flex flex-row md:flex-col items-center justify-start mx-auto mt-8 border-solid border-2 border-sky-500">
          <div>
            <img src={item.image} className="w-96 h-48 md:h-64 object-cover border-solid border-2 border-red-500"></img>
          </div>
          <div className="w-full h-16 mt-0 md:mt-6 text-left justify-center ml-4 md:ml-0 flex flex-col">
            <h2 className="text-xl md:text-lg font-bold">{item.name}</h2>
            <p className="text-gray-500 font-medium mt-1">{item.description}</p>
            <p className="text-lg font-bold mt-2">${item.price}</p>
          </div>
        </div>
    );
}

export default Product;