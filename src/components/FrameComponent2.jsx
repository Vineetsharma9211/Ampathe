import FaqAccordion from "./FaqAccordion";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  const faqData = [
  {
    question: "How does the mental health assessment work?",
    answer: "The mental health assessment typically involves an interview with a licensed professional and may include questionnaires. It evaluates your emotional, psychological, and social well-being, helping to identify areas where you might need support or treatment. After the assessment, recommendations are provided based on the findings."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, your data is secure. We use industry-standard encryption and data protection protocols to ensure that your personal information remains confidential and is only shared with your consent or as required by law."
  },
  {
    question: "How do I find a doctor through the app?",
    answer: "You can find a doctor by using the search feature within the app. Simply enter your location and the type of healthcare professional you need, and you'll be presented with a list of available providers. You can view profiles, read reviews, and book appointments directly through the app."
  },
  {
    question: "What kind of community support is available?",
    answer: "Our app offers various community support options, including forums, support groups, and peer-to-peer counseling. You can connect with others who have similar experiences, share your thoughts, and receive support from a compassionate community."
  },
  {
    question: "Is there a cost to use the app?",
    answer: "The app is free to download and offers several features at no cost. However, some advanced features, such as therapy sessions or premium content, may require a subscription or one-time fee."
  }
];


  return (
    <div
      className={`self-stretch flex flex-col items-center justify-center py-5 px-5 box-border max-w-full text-center text-13xl text-heading font-lato ${className} mq450:mt-0 mt-0`} 
    >
      <div className="w-full max-w-[1118px] flex flex-col items-center justify-start gap-8 md:gap-6 lg:gap-8">
        <div className="text-[24px] font-semibold mt-1 md:mt-3">
          FAQ’s
        </div>
        <div className="w-full flex flex-col items-center gap-3 md:gap-5 text-left text-2xl md:text-3xl lg:text-4xl">
          {faqData.map((faq, index) => (
            <FaqAccordion
              key={index}
              howDoesTheMentalHealthAss={faq.question}
              answer={faq.answer}
              propDisplay={index % 2 === 0 ? "inline-block" : "unset"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
