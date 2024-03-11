const Button = ({ color }) => {
    const colorObject = {
        blue: "bg-[#ffffff33] text-white hover:bg-white hover:text-[#4877fb]",
        green: "bg-[#24b80033] text-[#24b800] hover:text-white hover:bg-[#24b800]",
    };

    return (
        <button
            className={`rounded-full text-[14px] font-bold py-3 px-[30px] duration-300 transition-all hover:shadow-2xl ${colorObject[color]}`}
        >
            SEE OUR SERVICES
        </button>
    );
};

export { Button };
