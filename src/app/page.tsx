import Footer from "./components/footer";
import Header from "./components/header";
import SectionA from "./components/sectionA";
import SectionB from "./components/sectionB";
import SectionC from "./components/sectionC";
import SectionD from "./components/sectionD";
import SectionE from "./components/sectionE";
import SectionF from "./components/sectionF";
import SectionG from "./components/sectionG";
import SectionH from "./components/sectionH";
import SectionI from "./components/sectionI";

const btnClass = "bg-purple-600 border-none box-border rounded-md px-3 py-2 mt-4 text-white text-sm no-underline cursor-pointer";
const secondBtn ="bg-white flex rounded-md px-3 py-2 text-purple-600 text-m mt-4 border-none items-center box-border cursor-pointer no-underline"
const boxCard = "box-card box-content p-16 bg-white absolute left-1/2 w-full gap-12 -top-60 transform -translate-x-1/2 rounded-xl shadow-md  my-0 m-auto max-w-screen-xl flex align-center";

export default function Home() {
  return (
    <>
      <Header/>
      <SectionA imgUrl={"./soft.jpg"} btnClass={btnClass}/>
      <SectionB imgUrl={"./soft.jpg"} btnClass={btnClass} secondBtn={secondBtn} boxCard={boxCard}/>
      <SectionC/>
      <SectionD btnClass={btnClass} secondBtn={secondBtn}/>
      <SectionE btnClass={btnClass}/>
      <SectionF/>
      <SectionG/>
      <SectionH/>
      <SectionI btnClass={btnClass}/>
      <Footer/>
    </>
  );
}
