import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./style.css";
import "./woocommerce.css";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact-us" element={<Contact />} />
      </Route>
      {/* <Route path="/about" component={AboutPage} /> */}
    </Routes>
  );
}

export default App;
