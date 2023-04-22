
import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
        <Carousel emulateTouch={true} showThumbs={false} showStatus={false} className="m-auto md:hidden">
            <div className="w-full">
                <img src={require("../../../Images/jordan-white.jpg")} />
            </div>
            <div className="w-full">
                <img src={require("../../../Images/jordan-white2.jpg")} />
            </div>
            <div className="h-96">
                <img src={require("../../../Images/jordan-white3.jpg")} />
            </div>
            <div className="h-96">
                <img src={require("../../../Images/jordan-white4.jpg")} />
            </div>
        </Carousel>
        );
