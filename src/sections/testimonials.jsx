const TESTIMONIALS = [
    {
        title: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        image: "home/person2.webp ",
        name: "Ben Smith",
        agency: "Advertising Agency",
    },
    {
        title: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        image: "home/person3.webp",
        name: "Ben Smith",
        agency: "Advertising Agency",
    },
    {
        title: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        image: "home/person4.webp",
        name: "Ben Smith",
        agency: "Advertising Agency",
    },
];

const Testimonials = () => {
    const SectionHeadingText = () => {
        return (
            <div className="flex mb-12  flex-col items-center">
                <h2 className="text-[#4877fb] font-bold text-[34px]">Testimonials</h2>
                <p className="text-[14px] max-w-[800px] text-center text-[#00000080]">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                    the blind texts.
                </p>
            </div>
        );
    };
    return (
        <section className="lg:w-full  flex justify-center py-16 bg-[#EFEFEF]">
            <div className="flex flex-col">
                <SectionHeadingText />

                <div className="lg:flex lg:flex-row flex flex-col gap-2 max-w-[1920px]">
                    {TESTIMONIALS.map((testimonial, index) => {
                        return <TestimonialCard key={index} testimonial={testimonial} />;
                    })}
                </div>
            </div>
        </section>
    );
};

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="w-full bg-white flex flex-col gap-4 p-[30px]">
            <p className="text-[14px] text-[#00000080]">{testimonial.title}</p>
            <div className="flex gap-2 items-center">
                <img className="rounded-full w-[80px] h-[80px]" src={testimonial.image} alt="" />

                <div>
                    <p className="text-black font-[700]">{testimonial.name}</p>
                    <p className="text-[14px] text-[#00000080]">{testimonial.agency}</p>
                </div>
            </div>
        </div>
    );
};

export { Testimonials };
