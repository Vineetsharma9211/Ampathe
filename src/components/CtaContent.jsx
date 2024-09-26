import PropTypes from "prop-types";

const CtaContent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[250px] relative bg-lightblue-100 max-w-full text-center text-13xl text-heading font-lato ${className} mq450:h-[280px]`}
    >
      <div className="absolute top-[36px] left-[0px] w-full flex flex-col items-center justify-center font-semibold inline-block w-[1440px] mq450:text-lgi mq825:text-7xl">
        Join our 20M+ users today
      </div>
      <div className="absolute top-[90px] left-[0px] w-full flex flex-col items-start justify-start gap-4 max-w-full text-5xl">
        <div className="self-stretch relative font-medium mq450:text-lgi">
          you gain access to a wealth of resources designed to help you lead a
          happier, healthier life.
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-base text-body mt-2">
          <div className="w-[403px] flex flex-row flex-wrap items-start justify-center gap-6 max-w-full">
            <div className="flex-1 rounded-24xl bg-white flex flex-row items-center justify-center py-[18.5px] px-[35px] box-border min-w-[116px] whitespace-nowrap">
              <div className="relative text-base font-semibold inline-block min-w-[116px] text-center">
                Enter your email
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[18.5px] px-9 bg-primary rounded-24xl flex flex-row items-start justify-start hover:bg-steelblue">
              <div className="relative text-base font-semibold font-lato text-white text-left inline-block min-w-[69px]">
                Subscribe
              </div>
            </button>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[30px] left-[1250px] w-[159px] h-[184px] flex flex-col object-cover lgcustom:hidden"
        loading="lazy"
        alt="Illustrative image"
        src="src/assets/image-216@2x.png" // Updated path
      />
      <div className="absolute top-[53px] left-[83.5px] w-[157px] h-[137px] flex flex-col items-start justify-start gap-0.5 lgcustom:hidden">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt="Supporting image"
          src="src/assets/image-219@2x.png" // Updated path
        />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[25px]">
          <div className="h-[6px] flex-1 relative rounded-[50%] bg-skyblue mq450:h-[6px]" />
        </div>
      </div>
    </div>
  );
};

CtaContent.propTypes = {
  className: PropTypes.string,
};

export default CtaContent;
