import Image from 'next/image';

interface Props {
    imgUrl: string;
    btnClass: string;
}

const SectionA: React.FC<Props> = ({ imgUrl, btnClass }) => {
    const box = "box box-content bg-purple-200 flex-1 text-center mt-8 rounded-md py-6";



    return (
        <>
            <div className="section1 box-border pt-20 pb-80">
                <div className="my-0 m-auto max-w-screen-xl flex flex-col gap-8 sm:flex-row">
                    <div className="flex-[3_3_0%]">
                        <h1 className="text-4xl font-extrabold text-black">Hello, I'm Eranda</h1>
                        <p>
                            I'm an intern Software engineer and Developer based in Tirana,
                            Albania. I strive to build immersive and beautiful web
                            applications through carefully crafted code and user-centric
                            design.
                        </p>
                        <div>
                            <button id="myBtn" className={btnClass}>Say Hello!</button>
                            {/* <div id="myModalBox" className="modalBox">
                            <div className="modalBox-content">
                                <div className="modalBox-header">
                                    <a href="javascript:void(0)" className="closeBox">&times;</a>
                                    <h2> Say Hello</h2>
                                </div>
                                <div className="modalBox-body">
                                    <p>This is my portfolio web page. If you have a project let's discuss.</p>
                                    <p>Feel free to share your ideas, we will make sure to realize them!</p>
                                </div>
                            </div>
                        </div> */}
                        </div>
                        <div className="flex gap-4">
                            <div className={box}>
                                <h3 className="text-2xl font-bold text-black">1Y.</h3>
                                <p>Experience</p>
                            </div>
                            <div className={box}>
                                <h3 className="text-2xl font-bold text-black">15+</h3>
                                <p>Project Completed</p>
                            </div>
                            <div className={box}>
                                <h3 className="text-2xl font-bold text-black">5</h3>
                                <p>Happy Client</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-[2_2_0%]">
                        <img className="soft_img w-full" src={imgUrl} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionA;