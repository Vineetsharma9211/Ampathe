import { useState, useMemo } from "react";
import PropTypes from "prop-types";

const FaqAccordion = ({
  className = "",
  howDoesTheMentalHealthAss,
  answer,
  propDisplay = "block",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const howDoesTheStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div
      className={`self-stretch rounded-lg bg-white hover:bg-blue-100 transform hover:scale-105 flex flex-col p-4 box-border gap-4 max-w-full text-left text-5xl text-heading font-lato ${className} mq450:flex-col mq450:items-start mq450:gap-2`}
    >
      <div
        className="flex items-center justify-between cursor-pointer w-full mq450:w-full"
        onClick={handleToggle}
      >
        <div
          className="relative font-semibold text-base md:text-lg lg:text-xl flex-1 mq450:text-left"
          style={{ ...howDoesTheStyle, flexGrow: 1 }}
        >
          {howDoesTheMentalHealthAss}
        </div>
        <div
          className={`h-8 w-8 rounded-full bg-white-100 flex items-center justify-center transition-transform duration-300 ml-auto ${isOpen ? 'rotate-45' : ''}`}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-black-500"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-black-500"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="mt-4 text-base md:text-lg lg:text-xl text-gray-500">
          {answer}
        </div>
      )}
    </div>
  );
};

FaqAccordion.propTypes = {
  className: PropTypes.string,
  howDoesTheMentalHealthAss: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  propDisplay: PropTypes.string,
};

export default FaqAccordion;
