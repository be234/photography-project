import Home from './Home';
import Navbar from './Navbar';
import './styles/App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
          <Route exact path="/photography-project">
             <Home /> 
          </Route>
          <Route path="/photography-project/section1">
             <SectionDetails1 />
          </Route>
         <Route path="/photography-project/section2">
             <SectionDetails2 />
          </Route>
           <Route path="/photography-project/section3">
             <SectionDetails3 />
          </Route>
          <Route path="/photography-project/section4">
             <SectionDetails4 />
          </Route>
          <Route path="/photography-project/section5">
             <SectionDetails5 />
          </Route>
          <Route path="/photography-project/section6">
             <SectionDetails6 />
          </Route> 
          <Route path="/photography-project/about">
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
