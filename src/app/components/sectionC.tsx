import Image from 'next/image';
import "../css/sectionC.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChartLine, faPen, faLaptop } from '@fortawesome/free-solid-svg-icons';

const SectionC: React.FC = () => {

    return (
        <>
            <div id="process" className="bg-[#f5f5f5] py-36 px-0">
            <div className="my-0 m-auto max-w-screen-xl flex gap-8 items-center">
                <div className="work_process">
                    <h2 className='pb-2 text-4xl font-bold text-black'>Work Process</h2>
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
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#fff] p-6 rounded-2xl hover:shadow-xl">
                    <FontAwesomeIcon icon={faBook} className="w-6 text-[#a53dff] text-3xl mb-4" />
                        <h5 className='text-[#000] text-xl font-bold my-2.5 mx-0 '>1.Research</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                            assumenda aut quibusdam!
                        </p>
                    </div>
                    <div className="bg-[#fff] p-6 rounded-2xl hover:shadow-xl">
                    <FontAwesomeIcon icon={faChartLine} className="w-6 text-[#a53dff] text-3xl mb-4" />
                        <h5 className='text-[#000] text-xl font-bold my-2.5 mx-0 '>2.Analyze</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                            assumenda aut quibusdam!
                        </p>
                    </div>
                    <div className="bg-[#fff] p-6 rounded-2xl hover:shadow-xl">
                    <FontAwesomeIcon icon={faPen} className="w-6 text-[#a53dff] text-3xl mb-4" />
                        <h5 className='text-[#000] text-xl font-bold my-2.5 mx-0 '>3.Design</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                            assumenda aut quibusdam!
                        </p>
                    </div>
                    <div className="bg-[#fff] p-6 rounded-2xl hover:shadow-xl">
                    <FontAwesomeIcon icon={faLaptop} className="w-6 text-[#a53dff] text-3xl mb-4" />
                        <h5 className='text-[#000] text-xl font-bold my-2.5 mx-0 '>4.Launch</h5>
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

export default SectionC;