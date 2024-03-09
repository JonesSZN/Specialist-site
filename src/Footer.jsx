import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Piano } from "lucide-react";
import { Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-12 lg:py-24 flex justify-center bg-[#efefef]">
      <div className="lg:w-[70%] w-[90%] max-w-[1920px]">
        <div className="lg:flex lg:flex-row flex flex-col gap-8 lg:gap-24">
          <LeftFooter />
          <div className="lg:flex lg:flex-row flex flex-col gap-8 lg:gap-36">
            <RightLinks />
            <CompanyLinks />
            <ContactLinks />
          </div>
        </div>
        <Bottom />
      </div>
    </footer>
  );
};

const LeftFooter = () => {
  return (
    <div className="lg:w-[35%]">
      <h2 className="text-black font-bold">About Foundation</h2>
      <p className="text-[14px] my-8 text-[#888888]">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </p>
      <h3 className="text-black font-bold mb-6">Connect</h3>
      <Socials />
    </div>
  );
};

const RightLinks = () => {
  const LinksArray = ["About us", "Services", "News", "Careers", "Contact"];
  return (
    <div className="w-full">
      <h2 className="text-black font-semibold mb-6">Links</h2>
      <ul className="flex flex-col gap-2">
        {LinksArray.map((item) => (
          <li className="text-[14px] hover:text-red-500 duration-300 transition-all cursor-pointer text-[#777777]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const CompanyLinks = () => {
  const CompanyArray = ["About us", "Services", "News", "Careers", "Contact"];
  return (
    <div className="w-full">
      <h2 className="text-black font-semibold mb-6">Company</h2>
      <ul className="flex flex-col gap-2">
        {CompanyArray.map((item) => (
          <li className="text-[14px] hover:text-red-500 duration-300 transition-all cursor-pointer text-[#777777]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ContactLinks = () => {
  const ContactArray = [
    "43 Raymouth Rd. Baltemoer, London 3910",
    "+1(123)-456-7890",
    "+1(123)-456-7890",
    "nfo@mydomain.com",
  ];
  return (
    <div className="w-full whitespace-nowrap">
      <h2 className="text-black font-semibold mb-6">Contact</h2>
      <div className="flex flex-col gap-3">
        {ContactArray.map((item) => (
          <p className="text-[14px] hover:text-red-500 duration-300 transition-all cursor-pointer text-[#777777]">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

const Socials = () => {
  const SocialArray = [
    <Instagram fill="white" />,
    <Twitter fill="white" />,
    <Facebook fill="white" />,
    <Linkedin fill="white" />,
    <Piano fill="white" />,
    <Globe fill="white" />,
  ];
  return (
    <div className="flex cursor-pointer gap-4">
      {SocialArray.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};

const Bottom = () => {
  return (
    <div className="flex justify-center text-center text-[14px] text-[#777777] pt-24 pb-12 lg:pb-0 lg:py-24">
      Copyright ©2024 All rights reserved | This template is made with by{" "}
      <span className="text-[#24b800] cursor-pointer">Colorlib</span>
    </div>
  );
};

export { Footer };
