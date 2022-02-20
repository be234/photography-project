import Home from './Home';
import Navbar from './Navbar';
import './styles/App.scss';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import SectionDetails1 from './sections/SectionDetails1';
import SectionDetails2 from './sections/SectionDetails2';
import SectionDetails3 from './sections/SectionDetails3';
import SectionDetails4 from './sections/SectionDetails4';
import SectionDetails5 from './sections/SectionDetails5';
import SectionDetails6 from './sections/SectionDetails6';
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
          <Route path="/section1">
             <SectionDetails1 />
          </Route>
         <Route path="/section2">
             <SectionDetails2 />
          </Route>
           <Route path="/section3">
             <SectionDetails3 />
          </Route>
          <Route path="/section4">
             <SectionDetails4 />
          </Route>
          <Route path="/section5">
             <SectionDetails5 />
          </Route>
          <Route path="/section6">
             <SectionDetails6 />
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
