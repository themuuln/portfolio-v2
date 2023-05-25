import React from "react";
import SocialLinks from "./SocialLinks";
import HeaderButtons from "./HeaderButtons";
import { buttonData } from "./data/ButtonData";

const Header = () => {
  return (
    <nav className="h-screen flex flex-col justify-between sticky top-20 w-[50%]">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold sm:text-5xl">
          <a href="/">Temuulen Undrakhbayar</a>
        </h1>
        <h3 className="mt-3 text-lg font-medium sm:text-xl">Front-end Developer</h3>
        <p>
          I create stunning, immersive web experiences that captivate and leave a lasting impression. From visually
          impressive designs to engaging animations, I bring creativity to life, delivering exceptional websites that
          stand out. Trust me to make your online presence unforgettable.
        </p>
        <ul className="flex mt-10 w-fit text-zinc-500 font-bold flex-col gap-2">
          {buttonData.map((button, index) => (
            <HeaderButtons key={index} href={button.href}>
              {button.title}
            </HeaderButtons>
          ))}
        </ul>
      </div>
      <div className="">
        <ul className="w-fit flex flex-col gap-1 text-2xl font-medium">
          <SocialLinks href="https://www.facebook.com/themuln">Facebook</SocialLinks>
          <SocialLinks href="https://www.instagram.com/themuuln">Instagram</SocialLinks>
          <SocialLinks href="https://www.github.com/themuuln">Github</SocialLinks>
          <SocialLinks href="https://www.linkedin.com/in/themuuln/">LinkedIn</SocialLinks>
          <SocialLinks href="https://www.twitter.com/themuln">Twitter</SocialLinks>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
