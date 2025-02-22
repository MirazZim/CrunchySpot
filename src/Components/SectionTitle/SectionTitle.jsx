

const SectionTitle = ({heading, subHeading }) => {
    return (
        <div className="md:w-3/12 mx-auto text-center my-8 ">
            <p className="text-yellow-500 mb-2 text-l">--- {subHeading} ---</p>
            <h2 className="text-3xl text-center uppercase mb-8 border-y-4 border-gray-300 text-black py-4">
                {heading}
            </h2>
        </div>
    );
};

export default SectionTitle;