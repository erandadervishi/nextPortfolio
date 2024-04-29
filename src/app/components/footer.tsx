const Footer: React.FC = () => {
  const name =
    "bg-purple-600 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl";

  return (
    <>
      <footer className="text-white py-20 px-8 bg-[#132238]">
        <div className="my-0 m-auto max-w-screen-xl">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <a className={name} href="#">
                E
              </a>
              <h3 className="text-white text-2xl font-bold">Eranda</h3>
            </div>
            <nav className="flex gap-4 items-center">
              <ul className="flex gap-8 navbar">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Process</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
              </ul>
            </nav>
            <p>
              Copyright <i className="fa-regular fa-copyright"></i> 2024 Honest
              Solutions
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
