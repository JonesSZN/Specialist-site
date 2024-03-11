import { Notebook, Database, Rocket, Lightbulb, ArrowRight } from "lucide-react";

const CARDS = [
    {
        image: <Notebook color="#4877fb" size={50} />,
        title: "Easy to search",
        text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    },
    {
        image: <Database color="#4877fb" size={50} />,
        title: "Improve business insight",
        text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    },
    {
        image: <Rocket color="#4877fb" size={50} />,
        title: "Fast as lightning",
        text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    },
    {
        image: <Lightbulb color="#4877fb" size={50} />,
        title: "Grow business",
        text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    },
];

const Card = ({ card }) => {
    return (
        <div className="p-8 bg-white flex border-t-none hover:-translate-y-2 duration-300 transition-all hover:border-t border-t-[#4877fb] flex-col gap-4">
            {card.image}
            <h2 className="text-black font-semibold">{card.title}</h2>
            <p className="text-[#8a8a8a] text-[14px]">{card.text}</p>
            <ArrowRight color="#4877fb" size={35} />
        </div>
    );
};

const CardsSection = () => {
    return (
        <section className="bg-[#f8f9fa] py-24  w-full flex justify-center">
            <div className="lg:w-[70%] w-[90%] max-w-[1920px]">
                <div className="lg:flex lg:flex-row flex flex-col gap-2">
                    {CARDS.map((card) => (
                        <Card card={card} key={card.title} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export { CardsSection };
