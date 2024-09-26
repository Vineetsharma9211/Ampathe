import FaqAccordion from "./FaqAccordion";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  const faqData = [
    {
      question: "How does the mental health assessment work?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, cumque velit. Velit, ipsum, tempora sit et magni reprehenderit eius pariatur iusto sint nesciunt temporibus? Aperiam labore sequi molestias esse ipsam distinctio unde voluptatibus ratione?"
    },
    {
      question: "Is my data secure?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, cumque velit. Velit, ipsum, tempora sit et magni reprehenderit eius pariatur iusto sint nesciunt temporibus? Aperiam labore sequi molestias esse ipsam distinctio unde voluptatibus ratione?"
    },
    {
      question: "How do I find a doctor through the app?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, cumque velit. Velit, ipsum, tempora sit et magni reprehenderit eius pariatur iusto sint nesciunt temporibus? Aperiam labore sequi molestias esse ipsam distinctio unde voluptatibus ratione?"
    },
    {
      question: "What kind of community support is available?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, cumque velit. Velit, ipsum, tempora sit et magni reprehenderit eius pariatur iusto sint nesciunt temporibus? Aperiam labore sequi molestias esse ipsam distinctio unde voluptatibus ratione?"
    },
    {
      question: "Is there a cost to use the app?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, cumque velit. Velit, ipsum, tempora sit et magni reprehenderit eius pariatur iusto sint nesciunt temporibus? Aperiam labore sequi molestias esse ipsam distinctio unde voluptatibus ratione?"
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
