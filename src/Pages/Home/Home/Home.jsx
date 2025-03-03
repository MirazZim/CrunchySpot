import Banner from "../Banner/Banner";  
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";   
import FeatureBanner from "../FeaturedBanner/FeatureBanner"; 
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div className="w-full">
            <Banner />
              <Category />
            <PopularMenu />
            <FeatureBanner />
            <Testimonials />
        </div>
    );
};

export default Home;