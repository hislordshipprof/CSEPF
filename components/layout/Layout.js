"use client";
import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import Breadcrumb from "./Breadcrumb";
import MouseCursor from "./MouseCursor";
import Search from "./Search";

import Footer4 from "./footer/Footer4";
import Header1 from "./header/Header1";

export default function Layout({
  headerStyle,
  footerStyle,
  breadcrumbTitle,
  children,
}) {
  const [scroll, setScroll] = useState(0);

  
  const [isSearch, setSearch] = useState(false);
  const handleSearch = () => setSearch(!isSearch);

  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();

    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, []);
  return (
    <>
      <MouseCursor />

      {headerStyle == 1 ? (
        <Header1
          scroll={scroll}
        
          isSearch={isSearch}
          handleSearch={handleSearch}
        />
      ) : null}

      <Search isSearch={isSearch} handleSearch={handleSearch} />

      {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

      {children}

      {footerStyle == 4 ? <Footer4 /> : null}

      <BackToTop />
    </>
  );
}
