import { useMemo } from "react";
import PropTypes from "prop-types";

const TestimonialCards = ({
  className = "",
  propPadding,
  aGameChangerFor,
  mentalHealth,
  theAIChatIsIntuitiveAndEa,
  moreAuthorImages,
  priyaS,
  propMinWidth,
}) => {
  const testimonialCardsStyle = useMemo(() => {
    return {
      padding: propPadding,
      transition: "transform 0.3s ease", // Smooth zoom transition
    };
  }, [propPadding]);

  const priyaSStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`flex-1 shadow-[0px_8px_10px_rgba(0,_0,_0,_0.1)] rounded-lg bg-white flex flex-col items-start justify-center py-7 px-4 box-border gap-4 min-w-[308px] max-w-full text-left text-5xl text-heading font-lato transform hover:scale-110 ${className}`} 
      style={testimonialCardsStyle}
    >
      <div className="self-stretch relative font-semibold mq450:text-lgi">
        <p className="m-0">{aGameChangerFor}</p>
        <p className="m-0">{mentalHealth}</p>
      </div>
      <div className="self-stretch relative text-xl text-body mq450:text-base">
        {theAIChatIsIntuitiveAndEa}
      </div>
      <div className="flex flex-row items-start justify-start gap-2 text-base">
        <img
          className="h-[50px] w-[50px] relative rounded-[50%] object-cover"
          loading="lazy"
          alt=""
          src={moreAuthorImages}
        />
        <div className="flex flex-col items-start justify-start gap-2">
          <div
            className="relative font-semibold inline-block min-w-[49px]"
            style={priyaSStyle}
          >
            {priyaS}
          </div>
          <div className="flex flex-row items-center justify-start gap-[1.3px]">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
              loading="lazy"
              alt=""
              src="./src/assests/frame.svg"
            />
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
              alt=""
              src="./src/assests/frame-1.svg"
            />
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
              alt=""
              src="./src/assests/frame-2.svg"
            />
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
              alt=""
              src="./src/assests/frame.svg"
            />
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
              alt=""
              src="./src/assests/frame-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

TestimonialCards.propTypes = {
  className: PropTypes.string,
  aGameChangerFor: PropTypes.string,
  mentalHealth: PropTypes.string,
  theAIChatIsIntuitiveAndEa: PropTypes.string,
  moreAuthorImages: PropTypes.string,
  priyaS: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default TestimonialCards;
