import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menu = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 py-8 px-6 bg-[#FFC700] dark:bg-neutral-900 items-center w-full z-50">
      <div className="flex justify-between items-center w-full">
        <button
          onClick={toggleMenu}
          className="focus:outline-none ml-auto mr-14 mt-5"
        >
          <img src="/images/expand.png" alt="menu icon" className="w-6 h-6" />
        </button>
      </div>
      <div
        ref={menu}
        className={`absolute top-0 left-0 right-0 bg-white dark:bg-neutral-900 shadow-lg w-full py-12 px-4 md:flex transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col space-y-2 mr-80 ml-20">
          <h1 className="text-lg font-light">Nour Tawfik</h1>
          <p className="text-sm">Computer Science + Design Student</p>
        </div>
        <div className="flex flex-col space-y-4 mr-10 ml-40">
          <Link
            to="/"
            className="text-sm text-neutral-800 dark:text-neutral-100"
          >
            <h2 className="font-semibold">Menu</h2>
          </Link>
          <Link
            to="/"
            className="text-sm text-neutral-800 dark:text-neutral-100"
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className="text-sm text-neutral-800 dark:text-neutral-100"
          >
            Portfolio
          </Link>
          <Link
            to="/resume"
            className="text-sm text-neutral-800 dark:text-neutral-100"
          >
            Resume
          </Link>
        </div>
        <div className="flex flex-col space-y-4 mr-10">
          <Link
            to="/portfolio"
            className="text-sm text-neutral-800 dark:text-neutral-100"
          >
            <h2 className="font-semibold">UX Projects</h2>
          </Link>
          <Link
            to="/projects/filter-improvement"
            className="text-sm text-neutral-800 dark:text-neutral-100"
          >
            Filter Improvement
          </Link>
          <Link
            to="/projects/payment-portal"
            className="text-sm text-neutral-800 dark:text-neutral-100"
          >
            Payment Portal
          </Link>
          <Link
            to="/projects/header-improvement"
            className="text-sm text-neutral-800 dark:text-neutral-100"
          >
            Header Improvement
          </Link>
        </div>
        <div className="flex flex-col space-y-4 mr-10">
          <Link
            to="/portfolio"
            className="text-sm text-neutral-800 dark:text-neutral-100"
          >
            <h2 className="font-semibold">Software Projects</h2>
          </Link>
          <Link
            to="/projects/tubender"
            className="text-sm text-neutral-800 dark:text-neutral-100"
          >
            Tubender
          </Link>
          <Link
            to="/projects/personal-website"
            className="text-sm text-neutral-800 dark:text-neutral-100"
          >
            Personal Website
          </Link>
          <Link
            to="/projects/bmc-research"
            className="text-sm text-neutral-800 dark:text-neutral-100"
          >
            BMC Research
          </Link>
        </div>
        <div className="flex flex-col space-y-2 mr-30 ml-20">
          <button
            onClick={toggleMenu}
            className="focus:outline-none ml-auto mr-10"
          >
            <img
              src="/images/collapse.png"
              alt="menu icon"
              className="w-8 h-8"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
