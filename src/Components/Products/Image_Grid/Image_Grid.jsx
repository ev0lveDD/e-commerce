import React from "react";

function Image_Grid() {
    return(
        <div className="w-11/12 flex my-10 mx-auto">
            {/* <!-- Left side images --> */}
            <div className="w-3/5 hidden md:grid grid-cols-2 gap-8 my-10 mx-auto justify-center">
                <div className="block">
                    <img src={require("../../../Images/jordan-white.jpg")} className="w-96 h-36 md:h-96 object-cover"></img>
                </div>

                <div className="block">
                    <img src={require("../../../Images/jordan-white2.jpg")} className="w-96 h-36 md:h-96 object-cover"></img>
                </div>

                <div className="block">
                    <img src={require("../../../Images/jordan-white3.jpg")} className="w-96 h-36 md:h-96 object-cover"></img>
                </div>

                <div className="block">
                    <img src={require("../../../Images/jordan-white4.jpg")} className="w-96 h-36 md:h-96 object-cover"></img>
                </div>
            </div>
            {/* <!-- Right side description --> */}
            <div className="flex flex-col md:my-10 w-full md:w-2/5 mx-4 md:mx-10">
                {/* <!-- Item name --> */}
                <div className="flex w-full">
                    <h2 className="text-2xl md:text-lg font-bold text-gray-800">Nike Jordan</h2>
                </div>
                                    
                {/* <!-- Item price --> */}
                <div className="flex w-full mt-4">
                    <p className="text-xl font-bold text-gray-700">$350</p>
                </div>

                {/* <!-- Item Description --> */}
                <div className="flex flex-col justify-start items-start w-full mt-4">
                    <p className="text-left text-gray-700 font-bold">Description</p>
                    <p className="text-left mt-2 text-gray-400 font-normal leading-6">
                     Meet the original highflier. With era-echoing '80s construction, bold details and nothing-but-net style, this premium Nike Air Force 1 High '07 brings you everything you know best about the AF1 family. Crisp leather and soft suede keep the look classic while a smoky gray outsole adds the perfect amount of flash. Plus, a padded, high-cut collar with hook-and-loop closure lets you slip into heritage hoops comfort.
                    </p>
                </div>

                {/* <!-- Item size --> */}
                 <div className="grid grid-cols-4 md:grid-cols-6 gap-2 md:gap-4 lg:gap-8 w-full mt-8 justify-evenly justify-items-center">
                    <button class="w-16 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 focus:border-gray-800 focus:border-2 focus:bg-gray-800 focus:text-white rounded">40</button>
                    <button class="w-16 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 focus:border-gray-800 focus:border-2 focus:bg-gray-800 focus:text-white rounded">41</button>
                    <button class="w-16 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 focus:border-gray-800 focus:border-2 focus:bg-gray-800 focus:text-white rounded">42</button>
                    <button class="w-16 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 focus:border-gray-800 focus:border-2 focus:bg-gray-800 focus:text-white rounded">43</button>
                    <button class="w-16 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 focus:border-gray-800 focus:border-2 focus:bg-gray-800 focus:text-white rounded">44</button>
                    <button class="w-16 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 focus:border-gray-800 focus:border-2 focus:bg-gray-800 focus:text-white rounded">45</button>
                </div>

                {/* <!-- Checkout button --> */}
                <div className="flex w-full mt-8">
                    <button class="w-full hover:bg-gray-700 font-semibold py-2 px-4 bg-gray-800 text-white rounded">Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default Image_Grid;