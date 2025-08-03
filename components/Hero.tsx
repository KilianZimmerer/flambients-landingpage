import React, { FunctionComponent, SyntheticEvent } from "react";
import { useRouter } from "next/router";

import { Language } from "../pages/index";

interface HeroProps {
  language: Language;
}

const Hero: FunctionComponent<HeroProps> = ({ language }) => {
  const router = useRouter();
  const logoAction = async (e: SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    await router.push({ pathname: "/", query: { state: language } });
  };
  return (
    <div className="container-fluid decilo-background">
      <div className="row align-items-start" style={{ height: "100%" }}>
      <div className="col align-self-start ps-4">
        <span
        style={{
          color: "#fff",
          fontSize: "clamp(2.5rem, 10vw, 10rem)",
          letterSpacing: "0.05em",
          wordBreak: "break-word",
          display: "inline-block",
          lineHeight: 1.1,
        }}
        >
        flambients.
        </span>
      </div>
      {/* <div className="col align-self-end p-1">
        <img src={fancyObject.src} className="img-fluid float-end" alt="" />
      </div> */}
      </div>
    </div>
  );
};

export default Hero;
