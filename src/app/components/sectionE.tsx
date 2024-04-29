import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface Props {
  btnClass: string;
}

const SectionE: React.FC<Props> = ({ btnClass }) => {
  return (
    <>
      <div className="bg-[#132238] py-36 px-0 text-center">
        <div className="m-8">
          <h1 className="text-3xl font-extrabold text-white">
            Do you have Project Idea?
          </h1>
          <h1 className="text-3xl font-extrabold text-white">
            Let's discuss your project!
          </h1>
          <p className="m-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eaque
            commodi nesciunt.
          </p>
          <button
            className={`${btnClass} + flex gap-2 my-0 mx-auto block text-white`}
          >
            <a href="#">Let’s work Together</a>
            <FontAwesomeIcon icon={faArrowRight} className="w-4 text-[#fff]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SectionE;
