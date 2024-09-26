import { useState } from "react";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-left text-13xl text-primary font-monomaniac-one z-[100] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between py-[17px] px-20 box-border max-w-full gap-5 mq825:flex-wrap mq825:pl-10 mq825:pr-10 mq825:box-border">
        <a
          href="#"
          className="[text-decoration:none] relative tracking-[0.14em] text-[inherit] mq450:text-lgi mq825:text-7xl hover:text-blue-500"
        >
          AMPATHE
        </a>
        {/* Desktop Navigation */}
        <nav className="m-0 w-[482px] flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0 box-border max-w-full mq450:hidden">
          <nav className="m-0 self-stretch flex flex-row items-start justify-start gap-[23.1px] whitespace-nowrap text-center text-5xl text-heading font-lato mq825:flex-wrap">
            <a
              href="#"
              className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[66px] mq450:text-lgi hover:text-blue-500"
            >
              About
            </a>
            <a
              href="#"
              className="[text-decoration:none] flex-1 relative font-medium text-[inherit] inline-block min-w-[60px] mq450:text-lgi hover:text-blue-500"
            >
              Features
            </a>
            <a
              href="#"
              className="[text-decoration:none] flex-1 relative font-medium text-[inherit] inline-block min-w-[57px] mq450:text-lgi hover:text-blue-500"
            >
              Reviews
            </a>
            <a
              href="#"
              className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[58px] mq450:text-lgi hover:text-blue-500"
            >
              FAQs
            </a>
            <a
              href="#"
              className="[text-decoration:none] flex-1 relative font-medium text-[inherit] inline-block min-w-[57px] mq450:text-lgi hover:text-blue-500"
            >
              Contact
            </a>
          </nav>
        </nav>
        {/* Mobile Dropdown Toggle Button */}
        <button
          onClick={toggleDropdown}
          className="mq450:block hidden text-14xl font-semibold z-[105] text-[inherit] hover:text-blue-500"
          style={{ fontSize: "20px" }} // Increase button size
        >
          ☰
        </button>
        {/* Mobile Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute top-[60px] left-0 right-0 bg-white shadow-lg z-[200] flex flex-col items-start justify-start text-center text-5xl text-heading font-lato">
            <a
              href="#"
              className="[text-decoration:none] relative font-medium text-[inherit] py-3 px-5 block hover:text-blue-500"
            >
              About
            </a>
            <a
              href="#"
              className="[text-decoration:none] relative font-medium text-[inherit] py-3 px-5 block hover:text-blue-500"
            >
              Features
            </a>
            <a
              href="#"
              className="[text-decoration:none] relative font-medium text-[inherit] py-3 px-5 block hover:text-blue-500"
            >
              Reviews
            </a>
            <a
              href="#"
              className="[text-decoration:none] relative font-medium text-[inherit] py-3 px-5 block hover:text-blue-500"
            >
              FAQs
            </a>
            <a
              href="#"
              className="[text-decoration:none] relative font-medium text-[inherit] py-3 px-5 block hover:text-blue-500"
            >
              Contact
            </a>
          </div>
        )}
      </div>
      <div className="self-stretch bg-lightblue-200 border-whitesmoke-200 border-t-[1px] border-solid border-whitesmoke-200 border-b-[1px] border-solid flex items-center justify-center py-1.5 px-5 z-[100] text-sm text-black font-inter">
        <blockquote className="m-0 relative text-center flex justify-center items-center w-full mq450:text-center">
          <span className="inline-block">“Join our Waitlist to get FIRST experience of our Application.”</span>
        </blockquote>
      </div>
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
