import TestimonialCards from "./TestimonialCards";
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start gap-8 max-w-full text-center text-13xl text-heading font-lato mq825:gap-4 ${className}`}
    >
      <div className="self-stretch relative font-semibold text-[24px]">
        Reviews
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-0 box-border gap-6 max-w-full text-left text-5xl mq1425:flex-wrap">
        <TestimonialCards
          aGameChangerFor="“A Game-Changer for "
          mentalHealth="Mental Health!”"
          theAIChatIsIntuitiveAndEa="The AI chat is intuitive and easy to use. I got my mental health score instantly. I highly recommend this who needs to check the mental health fast and precise."
          moreAuthorImages="./src/assets/ellipse-11@2x.png"
          priyaS="Priya S"
          className="flex-1"
        />
        <TestimonialCards
          aGameChangerFor="“Excellent Initiative and Easy "
          mentalHealth="to Use”"
          theAIChatIsIntuitiveAndEa="I love the tailored suggestions and the supportive community feature. Kudos to the team for a great initiative and a mind-blowing user experience throughout the process."
          moreAuthorImages="./src/assets/ellipse-11-1@2x.png"
          priyaS="Priya, Delhi"
          propMinWidth="81px"
          className="flex-1"
        />
        <div className="flex-1 shadow-[0px_8px_10px_rgba(0,_0,_0,_0.1)] rounded-lg bg-white flex flex-col items-start justify-between p-4 box-border min-w-[308px] h-[292px] max-w-full mq1425:h-auto transform transition-transform duration-300 ease-in-out hover:scale-110">
          <div className="self-stretch relative font-semibold mq450:text-lgi transform transition-transform duration-300 ease-in-out hover:scale-105">
            “Great for Daily Use”
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-4 text-xl text-body">
            <div className="self-stretch relative mq450:text-base">
              The daily check for mental health suggests, and the app provides
              clear guidance based on my score. The community feature is
              wonderful for support.
            </div>
            <div className="flex flex-row items-start justify-start gap-2 text-base text-heading">
              <img
                className="h-[50px] w-[50px] relative rounded-[50%] object-cover"
                alt=""
                src="./src/assets/ellipse-11-2@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-2">
                <div className="relative font-semibold inline-block min-w-[113px]">
                  Amit, Bangalore
                </div>
                <div className="flex flex-row items-center justify-start gap-[1.3px]">
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                    alt=""
                    src="./src/assets/frame.svg"
                  />
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                    alt=""
                    src="./src/assets/frame-1.svg"
                  />
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                    alt=""
                    src="./src/assets/frame-2.svg"
                  />
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                    alt=""
                    src="./src/assets/frame.svg"
                  />
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                    alt=""
                    src="./src/assets/frame-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
