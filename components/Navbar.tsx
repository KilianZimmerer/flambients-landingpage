import React, { FunctionComponent, SyntheticEvent } from "react";
import { useRouter } from "next/router";

import { Language } from "../pages/index";

export interface NavbarData {
  buttonDE: string;
  buttonEN: string;
}

interface NavbarProps {
  buttonDE: string;
  buttonEN: string;
  language: Language;
  setLanguage: CallableFunction;
}

const Navbar: FunctionComponent<NavbarProps> = ({
  buttonDE,
  buttonEN,
  language,
  setLanguage,
}) => {
  const router = useRouter();

  function setLanguageToDE() {
    setLanguage("de");
  }

  function setLanguageToEN() {
    setLanguage("en");
  }

  return (
    <div className="container-fluid decilo-background p-1">
      <nav className="navbar bg-transparent navbar-expand sticky-top decilo-background">
        <div className="container-fluid">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a
                type="button"
                className={
                  language === "de"
                    ? "btn pe-2 text-white fw-bold"
                    : "btn pe-2 pe-1 text-white"
                }
                onClick={setLanguageToDE}
              >
                {buttonDE}
              </a>
            </li>
            <li className="pt-2 text-white">|</li>
            <li className="nav-item active">
              <a
                type="button"
                className={
                  language === "en"
                    ? "btn ps-1 pe-2 text-white fw-bold"
                    : "btn ps-1 pe-2 text-white"
                }
                onClick={setLanguageToEN}
              >
                {buttonEN}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
