import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tour from "./pages/Tour";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/tour" component={Tour} />
      <Route path="/pricing" component={Pricing} />
    </Router>
  );
}

export default App;
