import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import Tour from './pages/Tour';

function App() {

  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/tour" component={Tour} />
    </Router>
  );
}

export default App;
