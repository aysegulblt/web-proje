import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { GradientBackground } from "../components/GradientBackground";

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <GradientBackground />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
