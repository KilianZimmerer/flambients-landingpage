"use strict";
exports.id = 672;
exports.ids = [672];
exports.modules = {

/***/ 328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const Navbar = ({
  buttonDE,
  buttonEN,
  language,
  setLanguage
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  function setLanguageToDE() {
    setLanguage("de");
  }

  function setLanguageToEN() {
    setLanguage("en");
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    className: "container-fluid decilo-background p-1",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("nav", {
      className: "navbar bg-transparent navbar-expand sticky-top decilo-background",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "container-fluid",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "navbar-nav ms-auto",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
            className: "nav-item active",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
              type: "button",
              className: language === "de" ? "btn pe-2 text-white fw-bold" : "btn pe-2 pe-1 text-white",
              onClick: setLanguageToDE,
              children: buttonDE
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
            className: "pt-2 text-white",
            children: "|"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
            className: "nav-item active",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
              type: "button",
              className: language === "en" ? "btn ps-1 pe-2 text-white fw-bold" : "btn ps-1 pe-2 text-white",
              onClick: setLanguageToEN,
              children: buttonEN
            })
          })]
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ 525:
/***/ ((module) => {

module.exports = JSON.parse('{"de":{"Navbar":{"buttonDE":"de","buttonEN":"en"},"Abstract":{"abstractText":"Die besten Flammkuchen und Pizzen in Berlin."},"Footer":{"imprintLinkText":"Impressum","disclaimerLinkText":"Datenschutzerklärung","cookiePolicyLinkText":"Cookie Policy","contactLinkText":"Kontakt","githubLink":"","linkedinLink":"","instagramLink":"https://www.instagram.com/asdasdad","facebookLink":"https://www.facebook.com/decilo"},"Imprint":{"header":"Impressum","address":{"company":"NAME NACHNAME","street":"Adresse","city":"XXXX Berlin","country":"Deutschland"},"contact":{"phone":"Telefon: 030 xxx xxxx","fax":"Fax: 030 xxx xxx"},"email":{"email":"E-Mail: emailadresse"},"taxId":{"taxId":"Umsatzsteuer-ID: XXXX"},"registerDetails":{"tradeRegister":"Handelsregister: Amtsgericht Charlottenburg (Berlin)","referenceNumber":"Aktenzeichen: HRB 241216 B"},"managingDirector":{"managingDirector":"Geschäftsführer: XXXX"}}},"en":{"Navbar":{"buttonDE":"de","buttonEN":"en"},"Abstract":{"abstractText":"The best Tarte Flambée and Pizza in Berlin."},"Footer":{"imprintLinkText":"Imprint","disclaimerLinkText":"Privacy","cookiePolicyLinkText":"Cookie Policy","contactLinkText":"Contact","githubLink":"https://github.com/BerlinzuDir","linkedinLink":"https://www.linkedin.com/company/decilo/","instagramLink":"https://www.instagram.com/decilo","facebookLink":"https://www.facebook.com/decilo"},"Imprint":{"header":"Imprint","address":{"company":"NAME NACHNAME","street":"Adresse","city":"XXXXX Berlin","country":"Germany"},"contact":{"phone":"Phone: 030 xxx xxxx","fax":"Fax: 030 xxx xxx"},"email":{"email":"E-Mail: emailadresse"},"taxId":{"taxId":"Tax ID: XXXXXX"},"registerDetails":{"tradeRegister":"Trade Register: XXXX","referenceNumber":"File Reference: HRB 241216 B"},"managingDirector":{"managingDirector":"Managing Director: XXXX"}}}}');

/***/ })

};
;