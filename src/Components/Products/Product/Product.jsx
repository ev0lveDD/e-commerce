import React from "react";

function Product({item}) {
    return(
        <div className="w-5/6 md:w-96 flex flex-row md:flex-col items-center justify-start mx-auto mt-8">
          <div>
            <img src={item.image} className="w-96 h-36 md:h-96 object-cover"></img>
          </div>
          <div className="w-full h-20 mt-0 md:mt-6 text-left justify-center ml-4 md:ml-0 flex flex-col">
            <h2 className="text-xl md:text-lg font-bold">{item.name}</h2>
            <p className="text-gray-500 font-medium mt-1">{item.description}</p>
            <p className="text-lg font-bold mt-2">${item.price}</p>
          </div>
        </div>
    );
}

export default Product;