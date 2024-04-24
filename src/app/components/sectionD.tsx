import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface Props {
    btnClass: string;
    secondBtn: string;
}

const SectionD: React.FC<Props> = ({btnClass, secondBtn}) => {

    return (
        <>
            <div id="portfolio" className="py-20 px-0">
                <div className="my-0 m-auto max-w-screen-xl">
                    <div className="mb-20 text-center">
                        <h2 className='pb-2 text-4xl font-bold text-black mb-2'>Portfolio</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                            vero minus voluptatem ratione provident quos.
                        </p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-12">
                        <div className="rounded-2xl border-2 border-solid border-[#ddd] hover:shadow-2xl">
                            <img src="./unsplash1.png" alt="" />
                            <div className="p-4">
                                <p>HTML-CSS DESIGN</p>
                                <h4 className='text-2xl font-bold text-black my-2'>Product Admin Dashboard</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <button className={`${secondBtn} + gap-1`}>
                                    <a href="#">Case Study</a>
                                    <FontAwesomeIcon icon={faArrowRight} className="w-4 text-[#a53dff]" />
                                </button>
                            </div>
                        </div>
                        <div className="rounded-2xl border-2 border-solid border-[#ddd] hover:shadow-2xl">
                            <img src="./unsplash2.png" alt="" />
                            <div className="p-4">
                                <p>HTML-CSS DESIGN</p>
                                <h4 className='text-2xl font-bold text-black my-2'>Product Admin Dashboard</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <button className={`${secondBtn} + gap-1`}>
                                    <a href="#">Case Study</a>
                                    <FontAwesomeIcon icon={faArrowRight} className="w-4 text-[#a53dff]" />
                                </button>
                            </div>
                        </div>
                        <div className="rounded-2xl border-2 border-solid border-[#ddd] hover:shadow-2xl">
                            <img src="./unsplash3.png" alt="" />
                            <div className="p-4">
                                <p>HTML-CSS DESIGN</p>
                                <h4 className='text-2xl font-bold text-black my-2'>Product Admin Dashboard</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <button className={`${secondBtn} + gap-1`}>
                                    <a href="#">Case Study</a>
                                    <FontAwesomeIcon icon={faArrowRight} className="w-4 text-[#a53dff]" />
                                </button>
                            </div>
                        </div>
                        <div className="rounded-2xl border-2 border-solid border-[#ddd] hover:shadow-2xl">
                            <img src="./unsplash4.png" alt="" />
                            <div className="p-4">
                                <p>HTML-CSS DESIGN</p>
                                <h4 className='text-2xl font-bold text-black my-2'>Product Admin Dashboard</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <button className={`${secondBtn} + gap-1`}>
                                    <a href="#">Case Study</a>
                                    <FontAwesomeIcon icon={faArrowRight} className="w-4 text-[#a53dff]" />
                                </button>
                            </div>
                        </div>
                        <div className="rounded-2xl border-2 border-solid border-[#ddd] hover:shadow-2xl">
                            <img src="./unsplash5.png" alt="" />
                            <div className="p-4">
                                <p>HTML-CSS DESIGN</p>
                                <h4 className='text-2xl font-bold text-black my-2'>Product Admin Dashboard</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <button className={`${secondBtn} + gap-1`}>
                                    <a href="#">Case Study</a>
                                    <FontAwesomeIcon icon={faArrowRight} className="w-4 text-[#a53dff]" />
                                </button>
                            </div>
                        </div>
                        <div className="rounded-2xl border-2 border-solid border-[#ddd] hover:shadow-2xl">
                            <img src="./unsplash6.png" alt="" />
                            <div className="p-4">
                                <p>HTML-CSS DESIGN</p>
                                <h4 className='text-2xl font-bold text-black my-2'>Product Admin Dashboard</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <button className={`${secondBtn} + gap-1`}>
                                    <a href="#">Case Study</a>
                                    <FontAwesomeIcon icon={faArrowRight} className="w-4 text-[#a53dff]" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <button className={`${btnClass} + my-0 mx-auto block`}>More Projects</button>
                </div>
            </div>
        </>
    );
};

export default SectionD;