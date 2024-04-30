import Head from "next/head";

const Header: React.FC = () => {
  const btnClass =
    "bg-purple-600 border-none box-border rounded-md px-3 py-2 text-white text-base no-underline cursor-pointer";
  const name =
    "bg-purple-600 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl";

  return (
    <>
      <header className="py-5">
        <div className="max-w-screen-xl my-0 m-auto">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <a className={name} href="#">
                E
              </a>
              <h3 className="text-2xl font-bold text-black">Eranda</h3>
            </div>
            <nav className="flex items-center">
              <ul id="top_nav" className="gap-8 flex items-center">
                <li>
                  <a href="#" className="text-black no-underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black no-underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#process" className="text-black no-underline">
                    Process
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-black no-underline">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-black no-underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black no-underline">
                    Services
                  </a>
                </li>
                <a href="#contact" className={btnClass}>
                  Contact
                </a>
              </ul>
              <div className="flex gap-4 items-center">
                <a href="#" className="icon_nav">
                  <i className="fa fa-bars"></i>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
