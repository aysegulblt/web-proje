import { Ghost, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const NotFound = () => {
  const { lang } = useLanguage();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <div className="relative mb-8">
        <Ghost className="w-24 h-24 sm:w-32 sm:h-32 text-[#91BADB]/80 animate-bounce-subtle" />
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-2 bg-[#91BADB]/20 rounded-full blur-md animate-pulse"></div>
      </div>
      
      <h1 className="text-6xl sm:text-8xl font-bold font-mono tracking-tighter text-glow mb-4">
        404
      </h1>
      
      <h2 className="text-xl sm:text-2xl font-semibold mb-2">
        {lang === "tr" ? "Sayfa Bulunamadı" : "Page Not Found"}
      </h2>
      
      <p className="text-foreground/60 max-w-md mx-auto mb-8">
        {lang === "tr" 
          ? "Aradığınız sayfa uzayın derinliklerinde kaybolmuş olabilir veya adresi yanlış tuşlamış olabilirsiniz." 
          : "The page you are looking for might have been lost in deep space or the address might be mistyped."}
      </p>

      <Link
        to="/"
        className="cosmic-button bg-transparent border-2 border-[#91BADB] text-[#91BADB] hover:bg-[#91BADB] hover:text-slate-900 inline-flex items-center gap-2"
      >
        <Home className="w-4 h-4" />
        {lang === "tr" ? "Anasayfaya Dön" : "Back to Home"}
      </Link>
    </div>
  );
};

export default NotFound;
