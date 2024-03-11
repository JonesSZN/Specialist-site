import { Button } from "../components/Button";

const Work = () => {
    return (
        <section className="w-full bg-[#4877fb] py-12 flex justify-center">
            <div className="lg:w-[70%] w-[90%] max-w-[1920px]">
                <div className="lg:flex lg:flex-row flex flex-col  lg:justify-between items-center">
                    <Left />
                    <Right />
                </div>
            </div>
        </section>
    );
};

const Left = () => {
    return (
        <div>
            <h2 className="lg:text-[28px] lg:text-left text-center text-[23px] text-white font-semibold">
                Let's get to work
            </h2>
            <p className="text-[14px] lg:mb-0 mb-4 lg:text-left text-center max-w-[700px] text-[#ffffff80]">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts
            </p>
        </div>
    );
};
const Right = () => {
    return (
        <div>
            <Button color={"blue"} />
        </div>
    );
};

export { Work };
