import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './component/footer/Footer';
import Page from './component/home/Page';
import Jav from './component/java/Jav';
import Oriented from './component/object/Oriented';
import Sql from './component/sql/Sql';
import About from "./component/about/About";
import Navbar from "./component/nav/Navbar";









function App() {
  return (
    <>
    
    <BrowserRouter>
    
    <Navbar/>
    <Routes>
      <Route path="/" element={<Page/>} />
      <Route path="/react" element={<Jav/>} />
      <Route path="/object" element={<Oriented/>} />
      <Route path="/sql" element={<Sql/>} />
      <Route path="/about" element={<About/>} />
      
    </Routes>
    <Footer/>
  </BrowserRouter>
    
    
    
    
    
   
    </>
  );
}

export default App;
