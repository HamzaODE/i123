import MainLayout from "./components/Layout/MainLayout";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./style.css";
import "./woocommerce.css";
import "react-phone-number-input/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import GetQuote from "./components/GetQuote";
import Dummy from "./components/Dummy";
import Personal from "./components/Personal";
import Auto from "./components/Personal/Auto";
import Medical from "./components/Personal/Medical";
import Life from "./components/Personal/Life";
import PersonalHome from "./components/Personal/Home";
import PersonalUmbrella from "./components/Personal/Umbrella";
import Business from "./components/Business";
import CyberLiability from "./components/Business/CyberLiability";
import Epli from "./components/Business/Epli";
import GeneralLiability from "./components/Business/GeneralLiability";
import GroupMedical from "./components/Business/GroupMedical";
import Umbrella from "./components/Business/Umbrella";
import WorkersComp from "./components/Business/WorkersComp";
import MoreQuestions from "./components/MoreQuestions";
import QuestionsLayout from "./components/Layout/QuestionsLayout";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact-us" element={<Contact />} />
      </Route>
      <Route exact element={<QuestionsLayout />}>
        <Route exact path="/get-quote" element={<GetQuote />} />
        <Route exact path="/dummy" element={<Dummy />} />
        <Route exact path="/personal" element={<Personal />} />
        <Route exact path="/personal/auto" element={<Auto />} />
        <Route exact path="/personal/medical" element={<Medical />} />
        <Route exact path="/personal/life" element={<Life />} />
        <Route exact path="/personal/home" element={<PersonalHome />} />
        <Route exact path="/personal/umbrella" element={<PersonalUmbrella />} />
        <Route exact path="/Business" element={<Business />} />
        <Route exact path="/CyberLiability" element={<CyberLiability />} />
        <Route exact path="/Epli" element={<Epli />} />
        <Route exact path="/GeneralLiability" element={<GeneralLiability />} />
        <Route exact path="/GroupMedical" element={<GroupMedical />} />
        <Route exact path="/Umbrella" element={<Umbrella />} />
        <Route exact path="/WorkersComp" element={<WorkersComp />} />
        
        <Route exact path="/more" element={<MoreQuestions />} />
      </Route>
      {/* <Route path="/about" component={AboutPage} /> */}
    </Routes>
  );
}

export default App;
