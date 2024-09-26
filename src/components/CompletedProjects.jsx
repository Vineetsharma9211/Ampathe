import PropTypes from "prop-types";

const CompletedProjects = ({
  className = "",
  chatting5,
  aIChat,
  quickMentalHealthCheck,
  answerFewQuestionsToGetAQ,
}) => {
  return (
    <div
      className={`w-[411px] flex flex-col items-center justify-center gap-4 max-w-full text-center text-5xl text-heading font-lato ${className}`}
    >
      <img
        className="w-[120px] h-[120px] relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src={chatting5} // Ensure that chatting5 is passed as a prop with the correct path
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-2">
        <div className="self-stretch relative font-semibold mq450:text-lgi">
          {aIChat}
        </div>
        <div className="self-stretch relative mq450:text-lgi">
          {quickMentalHealthCheck}
        </div>
      </div>
      <div className="self-stretch relative text-xl text-body mq450:text-base">
        {answerFewQuestionsToGetAQ}
      </div>
    </div>
  );
};

CompletedProjects.propTypes = {
  className: PropTypes.string,
  chatting5: PropTypes.string.isRequired, // Ensure the image path is passed as a prop
  aIChat: PropTypes.string.isRequired,
  quickMentalHealthCheck: PropTypes.string.isRequired,
  answerFewQuestionsToGetAQ: PropTypes.string.isRequired,
};

export default CompletedProjects;
