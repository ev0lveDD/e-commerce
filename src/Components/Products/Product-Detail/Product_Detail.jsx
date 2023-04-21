import React from "react";
import Carousel from "../Carousel/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image_Grid from "../Image_Grid/Image_Grid";

function Product_Detail() {
    return(
        <div>  
            <Carousel />
            <Image_Grid />
        </div>
    );
}

export default Product_Detail;