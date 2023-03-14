import * as React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import cx from "classnames";
import { StaticBg } from "../components/StaticBg";
import { Cursor } from "../components/Cursor";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { Project } from "../pages/Project";
import { AppTransition } from "./AppTransition";
import { FourOhFour } from "../pages/FourOhFour";
import LoadingContextProvider from "../context/LoadingContextProvider";
import CursorContextProvider from "../context/CursorContextProvider";
import MagicWordContextProvider from "../context/MagicWordContextProvider";

export const App = () => {
  const location = useLocation();

  return (
    <div
      className={cx("app-container", {
        "app-container--home": location.pathname === "/",
      })}
    >
      <StaticBg />
      <LoadingContextProvider>
        <CursorContextProvider>
          <MagicWordContextProvider>
            <AppTransition />
            {location.pathname !== "/" && <Header />}
            <Routes location={location}>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/#about" element={<Home />} />
              <Route exact path="/#projects" element={<Home />} />
              <Route exact path="/contact/" element={<Contact />} />
              <Route path="/project/:slug/" element={<Project />} />
              <Route path="*" element={<FourOhFour />} />
            </Routes>
            {location.pathname === "/" && <Header />}
            <Footer />
            <Cursor />
          </MagicWordContextProvider>
        </CursorContextProvider>
      </LoadingContextProvider>
    </div>
  );
};
