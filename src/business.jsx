import { Notebook } from "lucide-react";
import { Database } from "lucide-react";
import { Rocket } from "lucide-react";
import { Lightbulb } from "lucide-react";
import { ArrowRight } from "lucide-react";

const Business = () => {
  return (
    <section className="bg-[#f8f9fa] py-24  w-full flex justify-center">
      <div className="lg:w-[70%] w-[90%] max-w-[1920px]">
        <div className="lg:flex lg:flex-row flex flex-col gap-2">
          <Cards />
        </div>
      </div>
    </section>
  );
};

const Cards = () => {
  const CardsObject = [
    {
      image: <Notebook color="#4877fb" size={50} />,
      title: "Easy to search",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
      icon: <ArrowRight color="#4877fb" size={35} />,
    },
    {
      image: <Database color="#4877fb" size={50} />,
      title: "Improve business insight",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
      icon: <ArrowRight color="#4877fb" size={35} />,
    },
    {
      image: <Rocket color="#4877fb" size={50} />,
      title: "Fast as lightning",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
      icon: <ArrowRight color="#4877fb" size={35} />,
    },
    {
      image: <Lightbulb color="#4877fb" size={50} />,
      title: "Grow business",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
      icon: <ArrowRight color="#4877fb" size={35} />,
    },
  ];

  return (
    <>
      {CardsObject.map((item) => (
        <div className="p-8 bg-white flex border-t-none hover:-translate-y-2 duration-300 transition-all hover:border-t border-t-[#4877fb] flex-col gap-4">
          {item.image}
          <h2 className="text-black font-semibold">{item.title}</h2>
          <p className="text-[#8a8a8a] text-[14px]">{item.text}</p>
          {item.icon}
        </div>
      ))}
    </>
  );
};

export { Business };
