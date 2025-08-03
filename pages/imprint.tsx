import React, { useState, FunctionComponent } from "react";
import { useRouter } from "next/router";

import Navbar, { NavbarData } from "../components/Navbar";

import content from "../content/content.json";

type ImprintPageContent = Record<string, string | Record<string, string>>;

interface LocalizedContent {
  Navbar: NavbarData;
}

export type Language = "en" | "de";

const Imprint: FunctionComponent = () => {
  const router = useRouter();
  const lang =
    router.query.state && router.isReady
      ? (router.query.state as Language)
      : "de";
  const [language, setLanguage] = useState<Language>(lang);
  const ImprintPageContent: ImprintPageContent = content[language]["Imprint"];
  const localizedContent: LocalizedContent = content[language];
  return (
    <div>
      <Navbar
      {...localizedContent["Navbar"]}
      setLanguage={setLanguage}
      language={language}
      />
      <div className={"container-fluid decilo-background"} style={{ minHeight: "calc(100vh - 80px)" }}>
      <div className="container-fluid">
        <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-sm align-self-start">
            <a
            href="/"
            style={{
              textDecoration: "underline",
              color: "#fff",
              cursor: "pointer",
              display: "inline-block",
              marginBottom: "2rem",
              fontSize: "1.25rem",
              fontWeight: 500,
              marginTop: "0.5rem"
            }}
            >
            &larr; zurück
            </a>
          <h4 className="text text-white pb-4">
          {ImprintPageContent["header"]}
          </h4>
        </div>
        <div className="col-lg-1"></div>
        </div>
        <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-sm align-self-start">
          <div className="text-white">
          {renderTextBlock(ImprintPageContent["address"])}
          </div>
          {/* 
          <div className="text text-dark">
          {renderTextBlock(ImprintPageContent["contact"])}
          </div>
          */}
          {/* <div className="text text-white">
          {renderTextBlock(ImprintPageContent["email"])}
          </div>
          <div className="text text-white">
          {renderTextBlock(ImprintPageContent["taxId"])}
          </div>
          <div className="text text-white">
          {renderTextBlock(ImprintPageContent["registerDetails"])}
          </div>
          <div className="text text-white">
          {renderTextBlock(ImprintPageContent["managingDirector"])}
          </div> */}
        </div>
        <div className="col-sm-1"></div>
        </div>
      </div>
      </div>
    </div>
  );
};

function renderTextBlock(textBlock: string | Record<string, string>) {
  return (
    <div>
      {Object.entries(textBlock).map(([key, value]) => (
        <p key={key} className="m-0">
          {value}
        </p>
      ))}
      <br />
    </div>
  );
}

export default Imprint;
