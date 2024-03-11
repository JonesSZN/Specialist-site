import { Button } from "../components/Button";

const SERVICE_CARDS = [
    {
        title: "How is your site performing?",
        image: "home/undraw1.svg",
        text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
        title: "Smart Site Conversion",
        image: "home/undraw3.svg",
        text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
        title: "Speed Site Increase Ranks",
        image: "home/undraw2.svg",
        text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
];

const ServiceCard = ({ card, number }) => {
    const CardImage = () => {
        return (
            <div className="lg:w-1/2">
                <img src={card.image} alt="" />
            </div>
        );
    };

    const CardText = () => {
        return (
            <div className="lg:w-1/2  ">
                <div className="rounded-full w-[40px] h-[40px] flex items-center justify-center text-white cursor-default mb-6 bg-[#24b800]">
                    {number + 1}
                </div>
                <h2 className="text-[24px] mb-4 font-bold text-[#24b800]">{card.title}</h2>
                <p className="text-[#00000080] mb-12 max-w-[550px] text-[14px]">{card.text}</p>
                <Button color={"green"} />
            </div>
        );
    };

    return (
        <div
            className={`lg:flex flex flex-col lg:gap-32 py-16 ${
                number % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
        >
            <CardImage />
            <CardText />
        </div>
    );
};

const Features = () => {
    const SectionHeadingText = () => {
        return (
            <div className="flex mb-12  flex-col items-center">
                <h2 className="text-[#4877fb] font-bold text-[34px]">Features</h2>
                <p className="text-[14px] max-w-[800px] text-center text-[#00000080]">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                    the blind texts.
                </p>
            </div>
        );
    };
    return (
        <section className="w-full py-24 bg-[#f8f9fa] flex flex-col items-center">
            <SectionHeadingText />

            <div className="lg:w-[70%] w-[90%] max-w-[1920px]">
                {SERVICE_CARDS.map((card, index) => (
                    <ServiceCard key={index} card={card} number={index} />
                ))}
            </div>
        </section>
    );
};

export { Features };
