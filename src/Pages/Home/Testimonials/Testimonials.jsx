import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

import { Swiper, SwiperSlide } from 'swiper/react';
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('Reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='my-16'>
            <SectionTitle
                heading="Testimonials"
                subHeading="What our clients say"
            ></SectionTitle>

            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                {
                    reviews.map(review => (
                        <SwiperSlide
                            key={review._id}
                        >
                            <div className="flex flex-col items-center my-16 mx-24">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}   
                                    readOnly
                                />
                                <p className="text-lg text-gray-600 mb-4 my-8">{review.details}</p>
                                <h3 className="text-2xl font-semibold text-gray-800">{review.name}</h3>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    )
}
export default Testimonials;