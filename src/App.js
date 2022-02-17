import Home from './Home';
import Navbar from './Navbar';
import Create from './Create';
import './styles/App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SectionDetails from './SectionDetails';
import NotFound from './NotFound';
import Footer from './Footer';
import About from './About';


function App() {
  return (
  <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
             <Home /> 
          </Route>
          {/* <Route path="/create">
             {/* <Create />  */}
          {/* </Route> */} 
          <Route path="/section/:id">
             <SectionDetails /> 
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
