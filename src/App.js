import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import { Container, Row } from "react-bootstrap";
import SectionView from "./Containers/SectionView/SectionView";

function App() {
  const handleScroll = (e) => {
    alert('s')
  }

  return (
    <div className="App" >
      <Navbar />
      <SectionView />
    </div>
  );
}

export default App;
