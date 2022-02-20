import Home from './Home';
import Navbar from './Navbar';
import './styles/App.scss';
import { Route } from "react-router-dom";
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
    <div className="App">
      <Navbar />
        <Route exact path="/" component={Home} />

        <Route path="/section1" component={SectionDetails1} />
        <Route path="/section2" component={SectionDetails2} />
        <Route path="/section3" component={SectionDetails3} />
        <Route path="/section4" component={SectionDetails4} />
        <Route path="/section5" component={SectionDetails5} />
        <Route path="/section6" component={SectionDetails6} />
        <Route path="/about" component={About} />

        {/* <Route path="*" component={NotFound} /> */}
        <Footer />
      </div>
  );
}

export default App;
