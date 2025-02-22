const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="md:w-3/12 mx-auto text-center mb-20">
            <p className="text-xl text-gray-600 mb-6">{subHeading}</p>
            <h2 className="text-3xl text-black font-bold tracking-wide text-center uppercase mb-12 border-b-2 border-gray-300">
                {heading}
            </h2>
        </div>
    );
};

export default SectionTitle;