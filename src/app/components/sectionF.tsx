import Image from "next/image";

const SectionF: React.FC = () => {
  return (
    <>
      <div id="blog" className="section6">
        <div className="my-0 m-auto max-w-screen-xl">
          <div className="text-center mb-12">
            <h2 className="pb-2 text-4xl font-bold text-black">Blog</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              quaerat alias omnis fugit sed est qui necessitatibus ea placeat
              id!
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4 mb-12">
            <div className="rounded-xl border-2 border-solid border-[#ddd] bg-[#fff] overflow-hidden hover:shadow-2xl">
              <img className="myImages" src="./blog1.png" alt="" />
              <div className="p-4">
                <p>05 Apr, 2024 / 10 Comments</p>
                <p className="text-black font-semibold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
                {/* <div id="myModal" className="modal">
                                <span className="close">&times;</span>
                                <img className="modal-content" id="img01">
                            </div> */}
              </div>
            </div>
            <div className="rounded-xl border-2 border-solid border-[#ddd] bg-[#fff] overflow-hidden hover:shadow-2xl">
              <img className="myImages" src="./blog2.png" alt="" />
              <div className="p-4">
                <p>05 Apr, 2024 / 10 Comments</p>
                <p className="text-black font-semibold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
                {/* <div id="myModal" className="modal">
                                <span className="close">&times;</span>
                                <img className="modal-content" id="img01">
                            </div> */}
              </div>
            </div>
            <div className="rounded-xl border-2 border-solid border-[#ddd] bg-[#fff] overflow-hidden hover:shadow-2xl">
              <img className="myImages" src="./blog3.png" alt="" />
              <div className="p-4">
                <p>05 Apr, 2024 / 10 Comments</p>
                <p className="text-black font-semibold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
                {/* <div id="myModal" className="modal">
                                <span className="close">&times;</span>
                                <img className="modal-content" id="img01">
                            </div> */}
              </div>
            </div>
            <div className="rounded-xl border-2 border-solid border-[#ddd] bg-[#fff] overflow-hidden hover:shadow-2xl">
              <img className="myImages" src="./blog4.png" alt="" />
              <div className="p-4">
                <p>05 Apr, 2024 / 10 Comments</p>
                <p className="text-black font-semibold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
                {/* <div id="myModal" className="modal">
                                <span className="close">&times;</span>
                                <img className="modal-content" id="img01">
                            </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionF;
