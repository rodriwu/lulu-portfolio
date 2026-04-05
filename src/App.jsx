import { Routes, Route } from "react-router-dom";
import useDarkMode from "./hooks/useDarkMode";
import { useLang } from "./context/LanguageContext";
import LanguageSplash from "./components/LanguageSplash";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Article from "./pages/Article";
import Contact from "./pages/Contact";

export default function App() {
  const [dark, setDark] = useDarkMode();
  const { lang } = useLang();

  if (!lang) {
    return <LanguageSplash />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-parchment dark:bg-night">
      <Navbar dark={dark} setDark={setDark} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<Article />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
