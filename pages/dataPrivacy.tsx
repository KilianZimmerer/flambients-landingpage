import React, { useState, FunctionComponent } from "react";
import { useRouter } from "next/router";
import parse from "html-react-parser";
import * as R from "ramda";

import Navbar, { NavbarData } from "../components/Navbar";

import html from "../content/dataPrivacy.html";
import content from "../content/content.json";

interface LocalizedContent {
  Navbar: NavbarData;
}

export type Language = "en" | "de";

const DataPrivacy: FunctionComponent = () => {
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
              <div className="text-white"> {parse(styleHTML(html))} </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function styleHTML(html: string): any {
  const replaceAll = R.invoker(2, "replaceAll");

  return R.pipe(
    replaceAll("<html>", ""),
    replaceAll("</html>", ""),
    replaceAll("<h3", "<p classname='fs-5'"),
    replaceAll("</h3>", "</p>"),
    replaceAll("<h2", '<p classname="fs-5"'),
    replaceAll("</h2>", "</p>"),
    replaceAll("<h1", "<h4"),
    replaceAll("</h1>", "</h4>")
  )(html);
}

export default DataPrivacy;
