import React, { FunctionComponent } from "react";
import Link from "next/link";
import { Instagram, Facebook, Linkedin, Github } from "react-bootstrap-icons";

import { Language } from "../pages/index";

export interface FooterData {
  imprintLinkText: string;
  disclaimerLinkText: string;
  cookiePolicyLinkText: string;
  contactLinkText: string;
  githubLink: string;
  linkedinLink: string;
  instagramLink: string;
  facebookLink: string;
}

interface FooterProps {
  imprintLinkText: string;
  disclaimerLinkText: string;
  cookiePolicyLinkText: string;
  contactLinkText: string;
  githubLink: string;
  linkedinLink: string;
  instagramLink: string;
  facebookLink: string;
  language: Language;
}

const Footer: FunctionComponent<FooterProps> = ({
  imprintLinkText,
  disclaimerLinkText,
  cookiePolicyLinkText,
  contactLinkText,
  linkedinLink,
  instagramLink,
  facebookLink,
  githubLink,
  language,
}) => {
  return (
    <div className="container-fluid h-100 footer">
      <div className="row">
        <ul className="footer-link-list d-flex flex-row mb-3 p-3" style={{ gap: "1.5rem", listStyle: "none" }}>
          <FooterLink
          linkText={imprintLinkText}
          linkURL={"/imprint" + `?state=${language}#Heading`}
          />
          <FooterLink
          linkText={disclaimerLinkText}
          linkURL={"/dataPrivacy" + `?state=${language}#Heading`}
          />
        </ul>
      </div>
    </div>
  );
};

interface FooterLinkData {
  linkText: string;
  linkURL: string;
}

const FooterLink: FunctionComponent<FooterLinkData> = ({
  linkText,
  linkURL,
}) => {
  return (
    <li className="footer-link-list-item">
      <Link href={linkURL}>
      <a
            href="/"
            style={{
              textDecoration: "underline",
              color: "#fff",
              cursor: "pointer",
              display: "inline-block",
              fontSize: "1rem",
              fontWeight: 500,
              marginTop: "0.5rem"
            }}
            >
            {linkText}
            </a>
      </Link>
    </li>
  );
};

interface IconLinkData {
  linkURL: string;
}

const IconLink: FunctionComponent<IconLinkData> = ({ children, linkURL }) => {
  return (
    <div className="col-1 m-3">
      <a
        href={linkURL}
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        {children}
      </a>
    </div>
  );
};

export default Footer;
