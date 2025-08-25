import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomeSlaider = () => {
    return (
        <div className='w-full max-w-7xl mx-auto mt-5 border border-blue-100 rounded-2xl shadow-lg py-6 px-4'>
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showArrows={true}
                interval={6000}
                transitionTime={1000}
            >
                {[  // Array of image data for cleaner code
                    {
                        src: "https://i.ibb.co.com/R4YYdgtn/4.png",
                        alt: "Banner 1",
                        legend: "Get Paid for Your Skills"
                    },
                    {
                        src: "https://i.ibb.co.com/R4YYdgtn/4.png",
                        alt: "Banner 2",
                        legend: "welcome to Bangladesh technical Education Institute "
                    },
                    {
                        src: "https://i.ibb.co.com/R4YYdgtn/4.png",
                        alt: "Banner 3",
                        legend: "welcome to Bangladesh technical Education Institute "
                    },
                    {
                        src: "https://i.ibb.co.com/R4YYdgtn/4.png",
                        alt: "Banner 4",
                        legend: "welcome to Bangladesh technical Education Institute "
                    },
                    {
                        src: "https://i.ibb.co.com/R4YYdgtn/4.png",
                        alt: "Banner 5",
                        legend: "welcome to Bangladesh technical Education Institute "
                    },
                    {
                        src: "https://i.ibb.co.com/R4YYdgtn/4.png",
                        alt: "Banner 6",
                        legend: "welcome to Bangladesh technical Education Institute "
                    },
                    {
                        src: "https://i.ibb.co.com/R4YYdgtn/4.png",
                        alt: "Banner 7",
                        legend: "welcome to Bangladesh technical Education Institute "
                    },
                    {
                        src: "https://i.ibb.co.com/R4YYdgtn/4.png",
                        alt: "Banner 8",
                        legend: "welcome to Bangladesh technical Education Institute "
                    },
                    {
                        src: "https://i.ibb.co.com/R4YYdgtn/4.png",
                        alt: "Banner 9",
                        legend: "welcome to Bangladesh technical Education Institute "
                    },
                    {
                        src: "https://i.ibb.co.com/R4YYdgtn/4.png",
                        alt: "Banner 10",
                        legend: "welcome to Bangladesh technical Education Institute "
                    },
                    {
                        src: "https://i.ibb.co.com/R4YYdgtn/4.png",
                        alt: "Banner 11",
                        legend: "welcome to Bangladesh technical Education Institute "
                    },
                    {
                        src: "https://i.ibb.co.com/R4YYdgtn/4.png",
                        alt: "Banner 12",
                        legend: "welcome to Bangladesh technical Education Institute "
                    },
                    {
                        src: "https://i.ibb.co.com/R4YYdgtn/4.png",
                        alt: "Banner 13",
                        legend: "welcome to Bangladesh technical Education Institute "
                    },
                ].map(({ src, alt, legend }, idx) => (
                    <div key={idx} className="relative rounded-xl overflow-hidden">
                        {/* Image */}
                        <img
                            className="h-100 object-cover rounded-xl"
                            src={src}
                            alt={alt}
                        />
                        {/* Black overlay */}
                        <div className=" rounded-xl"></div>
                        {/* Legend text - appears above overlay */}
                        <p className="legend relative z-10">{legend}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default HomeSlaider;
