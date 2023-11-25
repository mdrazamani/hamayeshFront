import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { SRLWrapper } from "simple-react-lightbox";

const Gallery = ({ images, galleryIndex, getSwiperConfig }) => {
    console.log("images: ", images);

    const chunkImages = (images, size) => {
        const chunks = [];
        for (let i = 0; i < images.length; i += size) {
            chunks.push(images.slice(i, i + size));
        }
        return chunks;
    };

    const imageGroups = chunkImages(images, 3);

    return (
        <SRLWrapper>
            <Swiper
                className="swiper-wrapper"
                {...getSwiperConfig(galleryIndex)}
            >
                {imageGroups.map((group, index) => (
                    <SwiperSlide key={index}>
                        {group.map((image, imgIndex) => (
                            <div key={imgIndex} style={{ margin: "20px" }}>
                                <img
                                    style={{
                                        width: "100%",
                                        borderRadius: "5px",
                                    }}
                                    src={
                                        process.env.REACT_APP_SERVER_IP +
                                        image.path
                                    }
                                    alt={image.alt}
                                />
                            </div>
                        ))}
                    </SwiperSlide>
                ))}
            </Swiper>
        </SRLWrapper>
    );
};

export default Gallery;
