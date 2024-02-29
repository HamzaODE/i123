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
        <Route exact path="/more" element={<MoreQuestions />} />
      </Route>
      {/* <Route path="/about" component={AboutPage} /> */}
    </Routes>
  );
}

export default App;
