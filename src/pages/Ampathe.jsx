import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import FeaturesGrid from "../components/FeaturesGrid";
import AboutIntro from "../components/AboutIntro";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import CtaContent from "../components/CtaContent";
import FrameComponent2 from "../components/FrameComponent2";
import FooterContent from "../components/FooterContent";

const Ampathe = () => {
  return (
    <div className="w-full relative bg-whitesmoke-100 overflow-hidden flex flex-col items-start justify-start gap-10 leading-[normal] tracking-[normal] mq825:gap-5">
      <section className="self-stretch bg-blue-blue-50 flex flex-col items-start justify-start pt-0 px-0 pb-[117px] box-border gap-[120px] max-w-full mq450:gap-[30px] mq825:gap-[60px] mq825:pb-[76px] mq825:box-border">
        <div className="self-stretch h-[730px] relative bg-blue-blue-50 hidden" />
        <FrameComponent />
        <FrameComponent1 />
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-20 pb-10 box-border max-w-full mq825:pl-10 mq825:pr-10 mq825:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-20 max-w-full mq450:gap-5 mq825:gap-10">
          <FeaturesGrid />
          <AboutIntro />
          <FrameComponent3 />
          <FrameComponent4 />
        </div>
      </section>
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[21px] box-border gap-20 max-w-full mq450:gap-5 mq825:gap-10">
        <CtaContent />
        <FrameComponent2 />
      </section>
      <FooterContent />
    </div>
  );
};

export default Ampathe;
