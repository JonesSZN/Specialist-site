import { Buttonblue } from "./ButtonBlue";

const Hero = () => {
  return (
    <section className="w-full pt-16 pb-32 flex justify-center bg-[#4877fb]">
      <div className="lg:w-[70%] w-[90%] max-w-[1920px]">
        <div className="lg:flex lg:flex-row flex flex-col items-center">
          <Left />
          <Right />
        </div>
      </div>
    </section>
  );
};

const Left = () => {
  return (
    <div className="lg:w-[60%]">
      <h1 className="text-white leading-snug max-w-[600px] font-[700] text-5xl">
        We are a group of financial specialists
      </h1>
      <p className="text-[14px] mb-12 max-w-[650px] text-[#ffffff80]">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </p>
      <Buttonblue />
    </div>
  );
};

const Right = () => {
  return (
    <div className="lg:w-[40%] lg:pt-0 pt-12">
      <img
        className="rounded-md shadow-lg hover:-translate-y-2 duration-300 cursor-pointer transition-all"
        src="plant.webp"
        alt=""
      />
    </div>
  );
};

export { Hero };
