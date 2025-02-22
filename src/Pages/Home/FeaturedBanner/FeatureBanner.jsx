import SectionTitle from "../../../Components/SectionTitle/SectionTitle"
import FeaturedImg from "../../../assets/home/featured.jpg";
import './FeaturedBanner.css';  

const FeatureBanner = () => {
  return (
    <div className="featured-banner bg-fixed bg-[#f7f7f7] py-20 pt-16 mb-7 text-white">
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
          <p className="text-4xl font-bold mb-8">Fresh Seafood</p>
          <p className="mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis consequatur in
          </p>
          <button className="btn btn-primary rounded-full border-0 w-full md:w-auto px-8 py-4">Order Now</button>
        </div>
      </div>
    </div>
  )   
}

export default FeatureBanner
