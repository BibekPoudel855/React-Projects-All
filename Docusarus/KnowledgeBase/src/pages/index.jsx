import "./../../src/css/App.css";
import FeaturesBar from "../components/Custom/FeaturesBar";
import NavBar from "../components/Custom/NavBar";
import HeroSection from "../components/Custom/HeroSection";
import HomePageVideoFirst from "../components/Custom/HomePageVideoFirst";
import HomePageVideoSecond from "../components/Custom/HomePageVideoSecond";
import HeroThird from "../components/Custom/HeroThird";
import CustomerSupport from "../components/Custom/CustomerSupport";
import Footer from "../components/Custom/Footer";
import FeedbackCustomer from "../components/Custom/HomePageFeedback";
import DefinitionKnowledgeBase from "../components/Custom/DefinitionKnowledgeBase";
import FAQ from "../components/Custom/FAQ";
export default function App() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <img
        src="https://cdn.livechat-files.com/api/file/lc/img/1520/83d80cf97cf173990010a5cf570f9ce5.png"
        alt=""
        className="h-[60px] w-[60px] fixed bottom-4 right-2 rounded-[50%] z-[1000] hover:opacity-80"
      />
      <FeaturesBar />
      <div className="sticky top-0 left-0 w-full z-[100]">
        <NavBar />
      </div>
      <HeroSection />
      <HomePageVideoFirst />
      <HomePageVideoSecond />
      <HeroThird />
      <FeedbackCustomer />
      <DefinitionKnowledgeBase />
      <FAQ />
      <CustomerSupport />
      <Footer />
    </div>
  );
}
