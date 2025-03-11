import { FaClock, FaMapMarkerAlt, FaPaperPlane, FaPhone } from 'react-icons/fa'
import Conntact_Us_banner from '../../../src/assets/contact/banner.jpg'
import SectionTitle from '../../Components/SectionTitle/SectionTitle'
import Cover from '../Shared/Cover/Cover'
const ContactUs = () => {
    return (
        <div>
            <Cover img={Conntact_Us_banner} title="Contact Us" />
            <SectionTitle subHeading={"Visit Us"} heading={"Our Address"} />
            <div className="flex flex-wrap gap-4 p-6 bg-[#f5f0f0] border border-gray-200 rounded-lg shadow-xl">

                {/* Phone Card */}
                <div className="flex-1 max-w-sm text-center shadow-lg">
                    <div className="bg-[#16453D] text-white py-4 rounded-t-lg flex items-center justify-center">
                        <FaPhone className="text-2xl" />
                    </div>
                    <div className="p-4 bg-gray-100 rounded-b-lg">
                        <h3 className="text-lg font-bold text-black">PHONE</h3>
                        <p className="text-black">01977766048</p>
                    </div>
                </div>

                {/* Address Card */}
                <div className="flex-1 max-w-sm text-center shadow-lg">
                    <div className="bg-[#16453D] text-white py-4 rounded-t-lg flex items-center justify-center">
                        <FaMapMarkerAlt className="text-2xl" />
                    </div>
                    <div className="p-4 bg-gray-100 rounded-b-lg">
                        <h3 className="text-lg font-bold text-black">ADDRESS</h3>
                        <p className="text-black">Dhaka, Bangladesh</p>
                    </div>
                </div>

                {/* Working Hours Card */}
                <div className="flex-1 max-w-sm text-center shadow-lg">
                    <div className="bg-[#16453D] text-white py-4 rounded-t-lg flex items-center justify-center">
                        <FaClock className="text-2xl" />
                    </div>
                    <div className="p-4 bg-gray-100 rounded-b-lg">
                        <h3 className="text-lg font-bold text-black">WORKING HOURS</h3>
                        <p className="text-black">Mon - Fri: 08:00 - 22:00</p>
                        <p className="text-black">Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
            </div>

            <SectionTitle heading={"Contact form"} />

            <div className="max-w-4xl mx-auto p-8 mt-6 bg-white rounded-xl shadow-md border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Have a little inquiry? Don't worry send us a message !</h2>
                <form className="space-y-6">
                    {/* name  */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name*</label>
                        <input type="text" id="name" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#16453D] focus:outline-none bg-white" placeholder="Enter your name" required  />
                    </div>
                    {/* email  */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email*</label>
                        <input type="email" id="email" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#16453D] focus:outline-none bg-white" placeholder="Enter your email" required  />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone*</label>
                        <input type="tel" id="phone" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#16453D] focus:outline-none bg-white" placeholder="Enter your phone number" required  />
                    </div>
                    {/* message  */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message*</label>
                        <textarea id="message" rows="4" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#16453D] focus:outline-none bg-white" placeholder="Enter your message..." required  />
                    </div>
                    {/* submit  */}
                    <button type="submit" className="w-full flex items-center justify-center bg-[#16453D] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#1B4A63] transition-all duration-300">
                        <FaPaperPlane className="mr-2" /> Send Message
                    </button>
                </form>
            </div>
        </div>

    )
}

export default ContactUs