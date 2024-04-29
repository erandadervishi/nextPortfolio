import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";

interface Props {
  imgUrl: string;
  btnClass: string;
  secondBtn: string;
  boxCard: string;
}

const SectionB: React.FC<Props> = ({
  imgUrl,
  btnClass,
  secondBtn,
  boxCard,
}) => {
  const socialIcons =
    "w-64 h-14 relative bg-white flex items-center justify-evenly text-2xl -m-8 mx-auto p-2 shadow-md text-[#a53dff]";

  return (
    <>
      <div className="pb-56 relative bg-[#f5f5f5]">
        <div className={boxCard}>
          <div className="flex-[2_2_0%]">
            <img className="soft_img" src={imgUrl} alt="" />
            <div className={socialIcons}>
              <FontAwesomeIcon
                icon={faFacebook}
                className="w-7 hover:text-[#fff] hover:bg-[#a53dff]"
              />
              <a
                href="https://github.com/erandadervishi/portfolio"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="w-6 hover:text-[#fff] hover:bg-[#a53dff]"
                />
              </a>
              <FontAwesomeIcon
                icon={faLinkedin}
                className="w-7 hover:text-[#fff] hover:bg-[#a53dff]"
              />
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-7 hover:text-[#fff] hover:bg-[#a53dff]"
              />
            </div>
          </div>
          <div className="flex-[3_3_0%]">
            <h2 className="pb-2 text-4xl font-bold text-black">
              I am Professional User Experience Designer
            </h2>
            <p>
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences.
            </p>
            <p>
              I design and develop services for customers specializing creating
              stylish, modern websites, web services Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Voluptatibus iure suscipit dolorem,
              impedit commodi placeat sint <span id="dots">...</span>
              <span id="moreTxt">
                {" "}
                ea vero sed quam vel quibusdam ullam harum! Culpa perspiciatis,
                corrupti deserunt omnis sed eveniet velit maxime ducimus
                exercitationem! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Enim, unde. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Nemo, distinctio.
              </span>
            </p>
            <div className="flex gap-8">
              <button id="myBtnr" className={btnClass}>
                Read More
              </button>
              <button className={`${secondBtn} + gap-2`}>
                <FontAwesomeIcon icon={faDownload} className="w-6" />
                <a href="#">Download CV</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionB;
