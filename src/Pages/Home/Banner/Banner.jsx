import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import BannerSlider2 from '../../../assets/home/02.jpg'
import BannerSlider3 from '../../../assets/home/03.png'
import BannerSlider4 from '../../../assets/home/04.jpg'
import BannerSlider5 from '../../../assets/home/05.png'
import BannerSlider6 from '../../../assets/home/06.png'

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={BannerSlider2} alt="Banner Slide 2" />
            </div>
            <div>
                <img src={BannerSlider3} alt="Banner Slide 3" />
            </div>
            <div>
                <img src={BannerSlider4} alt="Banner Slide 4" />
            </div>
            <div>
                <img src={BannerSlider5} alt="Banner Slide 5" />
            </div>
            <div>
                <img src={BannerSlider6} alt="Banner Slide 6" />
            </div>
        </Carousel>
    );
};

export default Banner;