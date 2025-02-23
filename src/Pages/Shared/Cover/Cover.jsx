import { Parallax } from 'react-parallax';

const Cover = ({ img, title , message }) => {
    return (
        <Parallax
            strength={-200}
            bgImage={img}
            bgImageAlt="the dog"
            blur={{ min: -100, max: 100 }}
        >
            <div className="relative h-[500px]">
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="max-w-md mx-auto ">
                        <h1 className="text-5xl font-bold uppercase">{title}</h1>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;