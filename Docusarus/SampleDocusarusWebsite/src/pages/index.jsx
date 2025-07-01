import Nav from "../components/Custom/NavBar";
import Announcement from "../components/Custom/Announcement/Announcement";
import Footer from "../components/Custom/Footer";
import "./../css/App.css";
import HeroSection from "../components/Custom/HeroSection";
import Pricing from "../components/Custom/Pricing";
import FAQ from "../components/Custom/FAQ";
import Features from "../components/Custom/Features";
export default function App() {
  return (
    <>
      <Announcement />
      <div className="w-[90vw] mx-auto">
        <Nav />
        <HeroSection />
        <Features />
        <Pricing />
        <FAQ />
      </div>
      <Footer />
    </>
  );
}
