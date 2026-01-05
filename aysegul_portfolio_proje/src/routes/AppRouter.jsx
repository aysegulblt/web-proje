import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";

import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimda" element={<About />} />
        <Route path="/yetenekler" element={<Skills />} />
        <Route path="/projeler" element={<Projects />} />
        <Route path="/iletisim" element={<Contact />} />
      </Route>
    </Routes>
  );
}
