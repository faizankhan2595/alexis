import "./App.css";
import Landingpage from "./components/LandingPage/Landingpage";
import { Routes, Route} from "react-router-dom"
import Services from "./components/Services/Services";
import Gallery from "./components/Gallery/Gallery";
import ContactUs from "./components/ContactUs/ContactUs";
import Blog from "./components/Blog/Blog";
import Careers from "./components/Careers/Careers";
import RPManager from "./components/Careers/RPManager";
import FRSO from "./components/Blog/FRSO";

function App() {
  return (
    <div className="App">

      <Routes>
            <Route path = "/" element={<Landingpage/>} />
            <Route path = "/services" element={<Services/>} />
            <Route path = "/gallery" element={<Gallery/>} />
            <Route path = "/contactus" element={<ContactUs/>} />
            <Route path = "/blog" element={<Blog/>} />
            <Route path = "/blog/frso" element={<FRSO/>} />
            <Route path = "/careers" element = {<Careers/>} />
            <Route path = "/careers/regional" element = {<RPManager/>}/>
      </Routes>

    </div>
  );
}

export default App;