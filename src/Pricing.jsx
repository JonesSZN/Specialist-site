import { Check } from "lucide-react";
import { Buttongreen } from "./ButtonGreen";

const Pricing = () => {
  return (
    <section className="w-full py-16 bg-[#EFEFEF] flex justify-center">
      <div className="lg:w-[70%] w-[90%] max-w-[1920px]">
        <div className="lg:flex lg:flex-row flex flex-col gap-3">
          <Card />
        </div>
      </div>
    </section>
  );
};

const Card = () => {
  const CardObject = [
    {
      title: "Basic",
      price: "$19.99",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    },
    {
      title: "Standard",
      price: "$299.99",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    },
    {
      title: "Advanced",
      price: "$799.9",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    },
  ];

  return (
    <>
      {CardObject.map((item) => (
        <div className="bg-white text-center  gap-4 items-center p-[40px]">
          <h2 className="text-[18px] text-black font-semibold">{item.title}</h2>
          <p className="text-[#4877fb] my-8 font-bold text-[40px]">
            {item.price}
          </p>
          <p className="text-[14px] my-8 text-[#00000080]">{item.text}</p>
          <List />
          <Buttongreen />
        </div>
      ))}
    </>
  );
};

const List = () => {
  const ListObject = [
    {
      image: <Check color="green" />,
      text: "Vokalia and Consonantia",
    },
    {
      image: <Check color="green" />,
      text: "Bookmarksgrove right at the coast",
    },
    {
      image: <Check color="green" />,
      text: "Semantics a large language ocean",
    },
  ];
  return (
    <div className="mb-12">
      {ListObject.map((item) => (
        <div className="flex text-[14px]  text-[#00000080] gap-2">
          {item.image}
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export { Pricing };
