import { Buttongreen } from "./ButtonGreen";

const Features = () => {
  return (
    <section className="w-full py-24 bg-[#f8f9fa] flex flex-col items-center">
      <Top />
      <div className="lg:w-[70%] w-[90%] max-w-[1920px]">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </div>
    </section>
  );
};

const FirstSection = () => {
  return (
    <div className="lg:flex lg:flex-row flex flex-col lg:gap-32   py-16">
      <div className="lg:w-1/2">
        <img src="undraw1.svg" alt="" />
      </div>
      <CardText number="1" title="How is your site performing?" />
    </div>
  );
};
const SecondSection = () => {
  return (
    <div className="lg:flex lg:flex-row flex flex-col-reverse lg:items-center py-16">
      <CardText
        number="2"
        title="Smart Site Conversion"
        text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
      />
      <div className="lg:w-1/2">
        <img src="undraw3.svg" alt="" />
      </div>
    </div>
  );
};
const ThirdSection = () => {
  return (
    <div className="lg:flex lg:flex-row flex flex-col lg:gap-32 items-center">
      <div className="lg:w-1/2">
        <img src="undraw2.svg" alt="" />
      </div>
      <CardText
        number="3"
        title="Speed Site Increase Ranks"
        text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

"
      />
    </div>
  );
};

const CardText = ({ number, title, text }) => {
  return (
    <div className="lg:w-1/2  ">
      <div className="rounded-full w-[40px] h-[40px] flex items-center justify-center text-white cursor-default mb-6 bg-[#24b800]">
        {number}
      </div>
      <h2 className="text-[24px] mb-4 font-bold text-[#24b800]">{title}</h2>
      <p className="text-[#00000080] mb-12 max-w-[550px] text-[14px]">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts. Separated they live in
        Bookmarksgrove right at the coast of the Semantics, a large language
        ocean.
      </p>
      <Buttongreen />
    </div>
  );
};
const Top = () => {
  return (
    <div className="flex mb-12  flex-col items-center">
      <h2 className="text-[#4877fb] font-bold text-[34px]">Features</h2>
      <p className="text-[14px] max-w-[800px] text-center text-[#00000080]">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </p>
    </div>
  );
};

export { Features };
