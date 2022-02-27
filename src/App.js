import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/NavBar";
import SectionView from "./Containers/SectionView/SectionView";
import Work from "./pages/work";
import ProjectDetails from "./Components/ProjectDetail";
import {isMobile} from 'react-device-detect';
import ScrollToTop from './Components/scroll-to-top';

function App() {
console.log(isMobile)

  return (
    <div className="App" >
      <Navbar />
      <Switch>
        <Route exact path="/" component={SectionView} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/work/:id" component={ProjectDetails} />
      </Switch>
      <ScrollToTop />
    </div>
  );
}

export default App;
