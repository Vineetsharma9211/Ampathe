import PropTypes from "prop-types";

const AboutIntro = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start gap-9 max-w-full text-center text-13xl text-heading font-lato mq825:gap-[18px] ${className}`}
    >
      <div className="self-stretch relative font-semibold text-[24px]">
        About Us
      </div>
      <div className="self-stretch flex flex-row items-center justify-center py-0 px-0 box-border relative gap-[11px] max-w-full text-left text-5xl mq1425:flex-wrap">
        <div className="w-[628px] flex flex-col items-start justify-start gap-4 min-w-[628px] max-w-full shrink-0 lg:min-w-full mq1425:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-4">
            <div className="self-stretch relative font-medium mq450:text-lgi font-semibold">
              Ampathe
            </div>
            <div className="self-stretch relative text-xl text-body mq450:text-base">
              We designed to support your well-being through innovative features
              and a compassionate community.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-2">
            <div className="self-stretch flex flex-col items-start justify-start gap-4">
              <div className="self-stretch relative font-medium mq450:text-lgi font-semibold">
                Our Goal
              </div>
              <div className="self-stretch relative text-xl text-body mq450:text-base">
                Break the stigma and encourage open conversations about mental
                health.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center gap-4 text-xl">
              <div className="relative mq450:text-base">
                <p className="m-0">
                  <span>
                    <span className="font-semibold">
                      Rising Awareness and Support:
                    </span>
                    <span className="font-medium font-lato">{` `}</span>
                  </span>
                </p>
                <p className="m-0 text-body">
                  With over 14% of the population experiencing mental health
                  issues, our app helps break the stigma and encourages open
                  conversations.
                </p>
              </div>
              <div className="self-stretch relative mq450:text-base">
                <p className="m-0">
                  <span>
                    <span className="font-semibold">
                      Post-COVID Resilience:
                    </span>
                    <span className="font-medium font-lato">{` `}</span>
                  </span>
                </p>
                <p className="m-0 text-body">
                  30.4% of Indians are actively addressing their mental health
                  post-pandemic. Our app supports this resilience effectively.
                </p>
              </div>
              <div className="self-stretch relative mq450:text-base">
                <p className="m-0">
                  <span>
                    <span className="font-semibold">
                      Positive Attitudes and Empathy:
                    </span>
                    <span className="font-medium font-lato">{` `}</span>
                  </span>
                </p>
                <p className="m-0 text-body">
                  Built on empathy, our app creates a compassionate space where
                  everyone feels understood and valued.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-[652px] relative max-h-full object-cover max-w-full shrink-0 mq1425:flex-1"
          alt=""
          src="./src/assets/61772removebgpreview-1@2x.png"
        />
        <img
          className="h-3.5 w-3.5 absolute !m-[0] top-[240px] left-[1062px] z-[1]"
          loading="lazy"
          alt=""
          src="./src/assets/group-1.svg"
        />
        <img
          className="h-3.5 w-3.5 absolute !m-[0] top-[179px] left-[1118px] z-[1]"
          loading="lazy"
          alt=""
          src="./src/assets/group-1.svg"
        />
        <img
          className="h-3.5 w-3.5 absolute !m-[0] top-[254px] left-[925px] z-[1]"
          loading="lazy"
          alt=""
          src="./src/assets/group-1.svg"
        />
        <img
          className="h-3.5 w-3.5 absolute !m-[0] top-[217px] left-[785px] z-[1]"
          loading="lazy"
          alt=""
          src="./src/assets/group-1.svg"
        />
        <img
          className="h-3.5 w-3.5 absolute !m-[0] top-[141px] left-[1033px] z-[1]"
          loading="lazy"
          alt=""
          src="./src/assets/group-1.svg"
        />
        <img
          className="h-3.5 w-3.5 absolute !m-[0] top-[88px] left-[897px] z-[1]"
          loading="lazy"
          alt=""
          src="./src/assets/group-1.svg"
        />
      </div>
    </div>
  );
};

AboutIntro.propTypes = {
  className: PropTypes.string,
};

export default AboutIntro;
