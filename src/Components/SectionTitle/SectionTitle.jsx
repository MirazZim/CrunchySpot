const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="md:w-3/12 mx-auto text-center mb-20">
            <div className="mb-6">
                <hr className="border-t-2 border-gray-300" />
                <hr className="border-t-2 border-gray-300" />
            </div>
            <p className="text-xl text-gray-600 mb-6">{subHeading}</p>
            <h2 className="text-3xl text-black font-bold tracking-wide text-center uppercase">
                {heading}
            </h2>
            <div className="mt-6">
                <hr className="border-t-2 border-gray-300" />
                <hr className="border-t-2 border-gray-300" />
            </div>
        </div>
    );
};

export default SectionTitle;