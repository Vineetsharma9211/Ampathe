import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch z-10 flex flex-row items-start justify-start py-0 px-20 box-border max-w-full text-left text-29xl text-heading font-lato mq825:pl-10 mq825:pr-10 mq825:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-5 z-[1] mq1425:flex-wrap">
        <div className="w-[663px] flex flex-col items-start justify-start py-5 px-0 box-border gap-6 min-w-[663px] max-w-full lg:min-w-full mq1425:flex-1">
          <h1 className="m-0 self-stretch relative text-inherit font-medium font-[inherit] mq450:text-10xl mq825:text-19xl">
            Are You Truly Understanding Your Mental Health?
          </h1>
          <div className="w-[611px] relative text-5xl leading-[120%] font-medium text-body inline-block max-w-full mq450:text-lgi mq450:leading-[23px]">
            Discover insights about your mental well-being through AI-powered
            conversations, connect with professionals, and join a supportive
            community.
          </div>
          <button className="cursor-pointer [border:none] py-[18.5px] px-[35px] bg-primary rounded-24xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-steelblue">
            <div className="relative text-base leading-[19.2px] font-semibold font-lato text-white text-left">
              Start Your Journey
            </div>
          </button>
        </div>
        <img
          className="w-[566px] relative max-h-full object-cover max-w-full mq1425:flex-1"
          loading="lazy"
          alt="Mental Health Insights"
          src="./src/assests/image-1@2x.png"
        />
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
