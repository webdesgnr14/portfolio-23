import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import cx from "classnames";
import { StaticBg } from "../components/StaticBg";
import { Cursor } from "../components/Cursor";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { Project } from "../pages/Project";
import { AppTransition } from "../components/AppTransition";
import CursorContextProvider from "../context/CursorContextProvider";

export const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");

      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div
      className={cx("app-container", {
        "app-container--home": location.pathname === "/",
      })}
    >
      <CursorContextProvider>
        <StaticBg />
        {location.pathname !== "/" && <Header />}
        <Routes location={location}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/#about" element={<Home />} />
          <Route exact path="/#projects" element={<Home />} />
          <Route exact path="/contact/" element={<Contact />} />
          <Route path="/project/*" element={<Project />} />
        </Routes>
        {location.pathname === "/" && <Header />}
        <Footer />
        <Cursor />
        <AppTransition />
      </CursorContextProvider>
    </div>
  );
};
