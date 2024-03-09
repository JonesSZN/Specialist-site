const Testimonials = () => {
  return (
    <section className="lg:w-full  flex justify-center py-16 bg-[#EFEFEF]">
      <div className="flex flex-col">
        <Top />
        <div className="lg:flex lg:flex-row flex flex-col gap-2 max-w-[1920px]">
          <Cards />
        </div>
      </div>
    </section>
  );
};

const Cards = () => {
  const CardObject = [
    {
      title:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      image: "person2.webp ",
      name: "Ben Smith",
      agency: "Advertising Agency",
    },
    {
      title:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      image: "person3.webp",
      name: "Ben Smith",
      agency: "Advertising Agency",
    },
    {
      title:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      image: "person4.webp",
      name: "Ben Smith",
      agency: "Advertising Agency",
    },
  ];
  return (
    <>
      {CardObject.map((item) => (
        <div className="w-full bg-white flex flex-col gap-4 p-[30px]">
          <p className="text-[14px] text-[#00000080]">{item.title}</p>
          <div className="flex gap-2 items-center">
            <img
              className="rounded-full w-[80px] h-[80px]"
              src={item.image}
              alt=""
            />
            <div>
              <p className="text-black font-[700]">{item.name}</p>
              <p className="text-[14px] text-[#00000080]">{item.agency}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const Top = () => {
  return (
    <div className="flex mb-12  flex-col items-center">
      <h2 className="text-[#4877fb] font-bold text-[34px]">Testimonials</h2>
      <p className="text-[14px] max-w-[800px] text-center text-[#00000080]">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </p>
    </div>
  );
};

export { Testimonials };
