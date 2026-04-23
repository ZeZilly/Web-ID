import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider, useApp } from "./context/AppContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

const HomePage = () => {
  const { focusMode } = useApp();
  return (
    <div className={`min-h-screen relative ${focusMode ? "focus-mode" : ""}`}>
      <div className="ambient-glow" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </div>
    </AppProvider>
  );
}

export default App;
