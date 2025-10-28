import React from "react";
import Header from "../component/Header";
import About from "../component/About";
import Skills from "../component/Skills";
import Service from "../component/Service";
import Portfolio from "../component/Portfolio";
import News from "../component/News";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Skills/>
      <Service/>
      <Portfolio/>
      <News/>
    </>
  );
}
