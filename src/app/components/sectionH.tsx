import Image from 'next/image';


const SectionH: React.FC = () => {

    return (
        <>
            <div className="py-36 px-0">
                <div className="my-0 m-auto max-w-screen-xl">
                    <div className='text-center'>
                        <h2 className='pb-2 text-4xl font-bold text-black mb-4'>Happy Clients</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
                            doloremque similique quisquam sint corrupti qui. Aliquid.
                        </p>
                    </div>
                    <div className="flex items-center">
                        <img src="./google.svg" alt="" />
                        <img src="./dribbble.svg" alt="" />
                        <img src="./linkedin.svg" alt="" />
                        <img src="./amazon.svg" alt="" />
                        <img src="./medium.svg" alt="" />
                        <img src="./spotify.svg" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionH;