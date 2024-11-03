import { FaAlignLeft } from "react-icons/fa";
const NavBar = () => {
  return (
    <>
      <nav
        className={`bg-[#010018] h-20  overflow-hidden transition-all duration-500 z-[98] fixed top-0 left-0 right-0 border-b-2 border-[#0c0e3ad4] shadow-md shadow-slate-900`}
      >
        <div className="navbar align-element duration-500 ">
          <div className="navbar-start">
            <button className="text-blue-500 bg-transparent ml-6 text-2xl mt-2 lg:z-[99]"></button>
            {/* dRopDown */}
          </div>
          <div className="navbar-center lg:flex">
            <p className="text-3xl">Dashboard</p>
          </div>
          <div className="navbar-end  pr-3 lg:flex lg:mr-8 navbarend">
            <ul className="hidden lg:flex flex-row gap-0">
              <li>
                <a href="">Akram</a>
              </li>
              <li>
                <a href="">Akram</a>
              </li>
              <li>
                <a href="">Akram</a>
              </li>
              <li>
                <a href="">Akram</a>
              </li>
            </ul>
            <button className="text-blue-500 bg-transparent ml-6 text-2xl mt-2 lg:z-[99] opacity-100 lg:opacity-0">
              <FaAlignLeft />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
