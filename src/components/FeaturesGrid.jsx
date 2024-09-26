import CompletedProjects from "./CompletedProjects";
import PropTypes from "prop-types";

const FeaturesGrid = ({ className = "" }) => {
  // Array of feature data with updated paths to the assets folder
  const features = [
    {
      chatting5: "./src/assets/chatting5.svg",  // Updated path to assets folder
      aIChat: "AI Chat",
      quickMentalHealthCheck: "Quick Mental Health Check",
      answerFewQuestionsToGetAQ:
        "Answer a few questions to get a quick assessment of your mental health.",
    },
    {
      chatting5: "./src/assets/doctor140-1.svg",  // Updated path to assets folder
      aIChat: "Booking Therapist",
      quickMentalHealthCheck: "Personalized Doctor Suggestions",
      answerFewQuestionsToGetAQ:
        "Get personalized therapist recommendations based on your results.",
    },
    {
      chatting5: "./src/assets/diversity90.svg",  // Updated path to assets folder
      aIChat: "Community",
      quickMentalHealthCheck: "Explore and Connect",
      answerFewQuestionsToGetAQ:
        "Join our community to explore topics like meditation and exercise.",
    },
  ];

  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start gap-9 max-w-full text-center text-13xl text-heading font-lato mq825:gap-[18px] ${className}`}
    >
      <div className="self-stretch relative font-semibold text-[24px]">
        Features
      </div>
      <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-5 text-5xl lg:flex-wrap lg:justify-center mq450:flex-wrap mq450:justify-center mq1425:flex-wrap mq1425:justify-center mq825:flex-wrap mq825:justify-center">
        {features.map((feature, index) => (
          <CompletedProjects
            key={index}
            chatting5={feature.chatting5}
            aIChat={feature.aIChat}
            quickMentalHealthCheck={feature.quickMentalHealthCheck}
            answerFewQuestionsToGetAQ={feature.answerFewQuestionsToGetAQ}
          />
        ))}
      </div>
    </div>
  );
};

FeaturesGrid.propTypes = {
  className: PropTypes.string,
};

export default FeaturesGrid;
