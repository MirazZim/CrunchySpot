import Banner from "../Banner/Banner";  
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";   
import FeatureBanner from "../FeaturedBanner/FeatureBanner";   
const Home = () => {
    return (
        <div>
            <Banner />
              <Category />
            <PopularMenu />
            <FeatureBanner />
        </div>
    );
};

export default Home;