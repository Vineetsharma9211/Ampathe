import PropTypes from "prop-types";

const FooterContent = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-primary flex flex-col items-start justify-start pt-8 px-20 pb-[17px] box-border gap-[35px] max-w-full text-left text-13xl text-white font-monomaniac-one mq825:gap-[17px] mq825:pl-10 mq825:pr-10 mq825:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 lg:flex-wrap">
        <div className="w-[247px] flex flex-col items-start justify-start gap-3 min-w-[247px] lg:flex-1">
          <div className="relative tracking-[0.14em] mq450:text-lgi mq825:text-7xl">
            AMPATHE
          </div>
          <div className="self-stretch relative text-base font-lato">
            Connect with our community of experts to get your doubts clarified
            and receive personalized advice.
          </div>
        </div>
        <div className="w-[696px] flex flex-row items-start justify-start gap-[120px] min-w-[696px] max-w-full text-5xl font-lato lg:flex-1 lg:min-w-full mq450:gap-[30px] mq825:flex-wrap mq825:gap-[60px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-3 min-w-[99px]">
            <div className="self-stretch relative font-semibold mq450:text-lgi">
              Company
            </div>
            <div className="flex flex-col items-start justify-center gap-2 text-xl">
              <div className="relative font-medium inline-block min-w-[80px] mq450:text-base">
                About us
              </div>
              <div className="relative font-medium inline-block min-w-[123px] mq450:text-base">
                Privacy Policy
              </div>
              <div className="relative font-medium mq450:text-base">
                Terms of services
              </div>
              <div className="relative font-medium inline-block min-w-[95px] mq450:text-base">
                Contact us
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-3 min-w-[99px]">
            <div className="self-stretch relative font-semibold mq450:text-lgi">
              Need Help
            </div>
            <div className="self-stretch flex flex-col items-start justify-center py-0 pl-0 pr-5 gap-2 text-xl">
              <div className="relative font-medium inline-block min-w-[95px] mq450:text-base">
                Contact us
              </div>
              <div className="relative font-medium inline-block min-w-[52px] mq450:text-base">
                FAQ’s
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-3">
            <div className="relative font-semibold mq450:text-lgi">
              Keep In Touch
            </div>
            <div className="w-5 flex flex-row items-center justify-start py-0 px-0 box-border gap-2">
              <div className="flex flex-row items-start justify-start">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0"
                  alt="Facebook"
                  src="/assets/frame-15.svg"  
                />
              </div>
              <div className="flex flex-row items-start justify-start">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0"
                  alt="Twitter"
                  src="/assets/frame-16.svg"  
                />
              </div>
              <div className="flex flex-row items-start justify-start">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0"
                  alt="Instagram"
                  src="/assets/frame-17.svg"  
                />
              </div>
              <div className="flex flex-row items-start justify-start">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0"
                  alt="LinkedIn"
                  src="/assets/frame-18.svg"  
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center max-w-full font-lato text-xxs">
        <div className="relative inline-block text-center w-full max-w-full">
          Copyright © 2024 Ampathe. All rights reserved to Claponn Infotech
          Private Limited
        </div>
      </div>
    </footer>
  );
};

FooterContent.propTypes = {
  className: PropTypes.string,
};

export default FooterContent;
