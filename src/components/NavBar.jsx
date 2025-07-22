import { useRef, useState } from "react";
import { FaCode } from "react-icons/fa";
import logoAkram from "../assets/akramLOGO.png";

const NAV_LINKS = [
  { id: 0, page: "About me" },
  { id: 1, page: "Education" },
  { id: 2, page: "Skills" },
  { id: 3, page: "Projects" },
  { id: 4, page: "Contact Me" },
];

const NavBar = () => {
  const [clickRotation, setClickRotation] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const [activeLinkId, setActiveLinkId] = useState(0);

  const handleToggleDropdown = (e) => {
    e.preventDefault();
    setClickRotation(!clickRotation);
  };

  const handleSmoothScroll = (id, page) => {
    const element = document.getElementById(page);
    const headerHeight = 80; // Hauteur de la navbar fixe

    if (element) {
      const newPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: newPosition,
        behavior: "smooth",
      });
      setActiveLinkId(id);
      setClickRotation(false); // Ferme le menu mobile après le clic
    }
  };

  const linkStyles = {
    height: clickRotation
      ? `${linksRef.current?.getBoundingClientRect().height}px`
      : "0px",
    overflow: "hidden",
    transition: "height 0.5s ease",
  };

  return (
    <nav className="bg-[#010018] h-20 fixed top-0 left-0 right-0 border-b-2 border-[#0c0e3ad4] shadow-md shadow-slate-900 z-[98]">
      <div className="navbar flex justify-between items-center h-full px-4">
        {/* Logo ou titre */}
        <div className="navbar-start text-white text-xl font-bold ml-6 sm:!text-[15px] md:!text-[15px] lg:!text-[25px] !text-[18px]">
          Akram{" "}
          <img src={logoAkram} alt="" width={60} className="lg:w-[50px]" />
          <span className=" text-[#14008e]">ANOU</span>
        </div>

        {/* Menu principal */}
        <div className="navbar-end pr-3 lg:flex lg:mr-8 navbarend">
          {/* Menu Desktop */}
          <ul className="hidden lg:flex flex-row gap-4">
            {NAV_LINKS.map(({ page, id }) => (
              <li key={id}>
                <a
                  href={`#${page}`}
                  className={`nav-link text-white hover:text-[#14008e] transition-all duration-300 ${
                    id === activeLinkId ? "!text-[#14008e] text-[20px]" : ""
                  }`}
                  aria-current={id === activeLinkId ? "page" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSmoothScroll(id, page);
                  }}
                >
                  {page}
                </a>
              </li>
            ))}
          </ul>

          {/* Bouton menu mobile */}
          <button
            onClick={handleToggleDropdown}
            className={`text-[#14008e] bg-transparent ml-6 text-3xl mt-2 lg:opacity-0 transition-transform ${
              clickRotation ? "rotate-90" : ""
            }`}
            aria-label="Toggle navigation menu"
          >
            <FaCode />
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className="lg:hidden bg-[#010018] links-container"
        ref={linksContainerRef}
        style={linkStyles}
      >
        <ul className="links flex flex-col gap-4 px-6 py-4" ref={linksRef}>
          {NAV_LINKS.map(({ page, id }) => (
            <li key={id}>
              <a
                href={`#${page}`}
                className={`nav-link text-white hover:text-[#14008e] transition-all duration-300 ${
                  id === activeLinkId ? "!text-[#14008e] text-[20px]" : ""
                }`}
                aria-current={id === activeLinkId ? "page" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll(id, page);
                }}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
