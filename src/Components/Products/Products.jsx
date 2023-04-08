import React from "react";
import Product from "./Product/Product";

const items = [
    {name: "Nike Air Max", description: "Men's Training Boots", price: "300",  image: require("../../Images/kyrie7.jpg")},
    {name: "Nike Jordan", description: "Men's Training Boots 2", price: "500", image: require("../../Images/kyrie8.jpeg")},
    {name: "Nike ZOOM", description: "Men's Training Boots", price: "300",  image: require("../../Images/zoom.jpg")},
    {name: "Nike Cosmic", description: "Men's Training Boots 2", price: "500", image: require("../../Images/cosmic.jpg")},
    {name: "Nike Air Max", description: "Men's Training Boots", price: "300",  image: require("../../Images/kyrie7.jpg")},
    {name: "Nike Jordan", description: "Men's Training Boots 2", price: "500", image: require("../../Images/kyrie8.jpeg")},
    {name: "Nike ZOOM", description: "Men's Training Boots", price: "300",  image: require("../../Images/zoom.jpg")},
    {name: "Nike Cosmic", description: "Men's Training Boots 2", price: "500", image: require("../../Images/cosmic.jpg")},
]

function Products() {
    return(
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
            {items.map((item) => {
                return(<Product item={item} />);
            })};
        </div>
    );
}

export default Products;