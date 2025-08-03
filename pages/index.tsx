import React, { useState, FunctionComponent } from "react";
import { useRouter } from "next/router";

import Navbar, { NavbarData } from "../components/Navbar";
import Footer, { FooterData } from "../components/Footer";
import Hero from "../components/Hero";
import Abstract, { AbstractData } from "../components/Abstract";

import content from "../content/content.json";

interface LocalizedContent {
  Navbar: NavbarData;
  Abstract: AbstractData;
  Footer: FooterData;
}

export type Language = "en" | "de";

const Home: FunctionComponent = () => {
  const router = useRouter();
  const lang =
    router.query.state && router.isReady
      ? (router.query.state as Language)
      : "de";
  const [language, setLanguage] = useState<Language>(lang);
  const localizedContent: LocalizedContent = content[language];
  return (
    <div>
      <Navbar
      {...localizedContent["Navbar"]}
      setLanguage={setLanguage}
      language={language}
      />
      <Hero language={language} />
      <div className="container-fluid decilo-background" style={{ minHeight: "calc(100vh - 80px)" }}>
        <Abstract {...localizedContent["Abstract"]} />
        {/* Fill remaining space with devilo-background */}
        <div style={{ flex: 1, background: "var(--devilo-background)" }} />
      </div>
      {/* Footer always at the bottom */}
      <div style={{ position: "fixed", left: 0, bottom: 0, width: "100%", zIndex: 100 }}>
        <Footer {...localizedContent["Footer"]} language={language} />
      </div>
    </div>
  );
};

export default Home;
