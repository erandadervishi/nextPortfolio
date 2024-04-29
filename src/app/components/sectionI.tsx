import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faArrowRight,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  btnClass: string;
}

const SectionI: React.FC<Props> = ({ btnClass }) => {
  return (
    <>
      <div id="contact" className="px-0">
        <div className="box-border p-16 bg-white w-full gap-12 rounded-xl shadow-md max-w-screen-xl flex align-center relative -mb-8 mx-auto max-w-screen-xl flex gap-8">
          <div className="flex-[2_2_0%]">
            <h2 className="pb-2 text-4xl font-bold text-black">
              Let’s discuss your Project
            </h2>
            <p className="px-0 py-6">
              There are many variations of passages of Lorem Ipsu available. but
              the majority have suffered alte.
            </p>
            <div className="p-4 mb-2 w-3/4 mt-2 hover:shadow-2xl rounded-md flex align-center">
              <FontAwesomeIcon
                icon={faMapLocationDot}
                className="w-12 text-2xl text-center text-purple-600 py-3 px-4 bg-purple-200 rounded-md box-border m-2 ml-1 mr-3 hover:bg-[#a53dff]"
              />
              <div>
                <h5>Address:</h5>
                <h4 className="pb-2 text-lg font-bold text-black">
                  Tirana, Albania
                </h4>
              </div>
            </div>
            <div className="p-4 mb-2 w-3/4 mt-2 hover:shadow-2xl rounded-md flex align-center">
              <FontAwesomeIcon
                icon={faMapLocationDot}
                className="w-12 text-2xl text-center text-purple-600 py-3 px-4 bg-purple-200 rounded-md box-border m-2 ml-1 mr-3"
              />
              <div>
                <h5>My Email:</h5>
                <h4 className="pb-2 text-base font-bold text-black">
                  eranda@honestsolutions.co.uk
                </h4>
              </div>
            </div>
            <div className="p-4 mb-2 w-3/4 mt-2 hover:shadow-2xl rounded-md flex align-center">
              <FontAwesomeIcon
                icon={faMapLocationDot}
                className="w-12 text-2xl text-center text-purple-600 py-3 px-4 bg-purple-200 rounded-md box-border m-2 ml-1 mr-3"
              />
              <div>
                <h5>Call Me Now:</h5>
                <h4 className="pb-2 text-lg font-bold text-black">
                  00-1234 1200
                </h4>
              </div>
            </div>
            <div className="w-64 h-12 relative bg-white flex items-center justify-between text-xl">
              <FontAwesomeIcon
                icon={faFacebook}
                className="w-7 text-[#a53dff] hover:text-[#fff] hover:bg-[#a53dff]"
              />
              <a
                href="https://github.com/erandadervishi/portfolio"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="w-6 text-[#a53dff] hover:text-[#fff] hover:bg-[#a53dff]"
                />
              </a>
              <FontAwesomeIcon
                icon={faLinkedin}
                className="w-7 text-[#a53dff] hover:text-[#fff] hover:bg-[#a53dff]"
              />
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-7 text-[#a53dff] hover:text-[#fff] hover:bg-[#a53dff]"
              />
            </div>
          </div>
          <div className="flex-[3_3_0%] content-center">
            <p className="mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              facere.
            </p>
            <form className="flex flex-wrap contact-form">
              <input
                className="w-full mb-2 border-0 border-b border-gray-300 py-4 focus:border-0 focus:border-b-2 focus:border-[#a53dff] focus:outline-none focus:text-[#000]"
                type="Name"
                placeholder="Name*"
              />
              <input
                className="w-full mb-2 border-0 border-b border-gray-300 py-4 focus:border-0 focus:border-b-2 focus:border-[#a53dff] focus:outline-none focus:text-[#000]"
                type="email"
                placeholder="Email*"
              />
              <input
                className="w-full mb-2 border-0 border-b border-gray-300 py-4 focus:border-0 focus:border-b-2 focus:border-[#a53dff] focus:outline-none focus:text-[#000]"
                type="location"
                placeholder="Location"
              />
              <div className="flex w-full gap-4">
                <input
                  className="w-1/4 mb-2 border-0 border-b border-gray-300 py-4 focus:border-0 focus:border-b-2 focus:border-[#a53dff] focus:outline-none focus:text-[#000]"
                  type="budget"
                  placeholder="Budget*"
                />
                <input
                  className="w-3/4 mb-2 border-0 border-b border-gray-300 py-4 focus:border-0 focus:border-b-2 focus:border-[#a53dff] focus:outline-none focus:text-[#000]"
                  type="subject"
                  placeholder="Subject*"
                />
              </div>
              <input
                className="w-full mb-2 border-0 border-b border-gray-300 py-4 focus:border-0 focus:border-b-2 focus:border-[#a53dff] focus:outline-none focus:text-[#000]"
                type="message"
                placeholder="Message*"
              />
              <button
                className={`${btnClass} flex gap-2 my-0 block text-white justify-start`}
              >
                <a href="#">Submit</a>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="w-4 text-[#fff]"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionI;
