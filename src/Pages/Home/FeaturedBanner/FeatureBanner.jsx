import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle"
import FeaturedImg from "../../../assets/home/featured.jpg";
import './FeaturedBanner.css';

const FeatureBanner = () => {
  return (
    <div className="featured-banner bg-fixed bg-[#f7f7f7] py-20 pt-16 mb-7 text-white">
      {/* Bg -fixed use kora hoise dekhe when we scroll down the page we see this cool feature */}
      <SectionTitle
        heading="Our Featured Menu"
        subHeading="Check it out"
        className="text-center"
      />
      <div className="md:flex justify-center items-center gap-16 py-8 px-16 bg-slate-600 bg-opacity-60">
        <div className="w-full md:w-[500px]">
          <img src={FeaturedImg} alt="" className="rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-[500px]">
          <p className="text-lg font-semibold mb-4">New Arrivals</p>
          <p className="text-4xl font-bold mb-8">Fresh Sushi Delights</p>
          <p className="mb-8">
            Experience the art of sushi with our carefully crafted rolls, made from
            the freshest seafood and premium ingredients. From classic salmon nigiri
            to innovative fusion rolls, each bite promises a burst of flavor and
            authenticity. Savor the taste of Japan in every piece!
          </p>
          <Link to="/order/salad" className="btn btn-primary rounded-full border-0 w-full md:w-auto px-8 py-4">Order Now</Link>
        </div>
      </div>
    </div>
  )
}

export default FeatureBanner
