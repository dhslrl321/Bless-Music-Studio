import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tour from "./pages/Tour";
import Pricing from "./pages/Pricing";
import Event from "./pages/Event";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/tour" component={Tour} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/event" component={Event} />
    </Router>
  );
}

export default App;
