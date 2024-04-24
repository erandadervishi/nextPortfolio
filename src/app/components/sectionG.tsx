import Image from 'next/image';

const SectionG: React.FC = () => {

    return (
        <>
            <div className="bg-[#d3d3d391] py-36 px-0">
            <div className="my-0 m-auto max-w-screen-xl flex gap-8 items-center">
                <div className="flex-[2_2_0%]">
                    <h2 className='pb-2 text-4xl font-bold text-black'>What I do</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                        purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris
                        ultrices eget lorem ac vestibulum. Suspendis imperdiet,
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                        accusantium.
                    </p>
                </div>
                <div className="flex-[2_2_0%]">
                    <div className="bg-[#fff] p-6 rounded-2xl mb-4 hover:border-l-4 border-solid border-[#a53dff]">
                        <h5 className='font-bold mb-4 text-lg text-black'>HTML</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                            assumenda aut quibusdam!
                        </p>
                    </div>
                    <div className="bg-[#fff] p-6 rounded-2xl mb-4 hover:border-l-4 border-solid border-[#a53dff]">
                        <h5 className='font-bold mb-4 text-lg text-black'>CSS</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                            assumenda aut quibusdam!
                        </p>
                    </div>
                    <div className="bg-[#fff] p-6 rounded-2xl mb-4 hover:border-l-4 border-solid border-[#a53dff]">
                        <h5 className='font-bold mb-4 text-lg text-black'>JavaScript</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                            assumenda aut quibusdam!
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default SectionG;