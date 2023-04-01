import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Properties from './pages/Properties';
import Addproperty from './pages/Addproperty';
import Updateproperty from './pages/Updateproperty';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact="true" path="/" element={<Home/>}  />
        <Route path="/properties" element={<Properties/>} />
        <Route path="/addproperty" element={<Addproperty/>} />
        <Route path='/updateproperty/:id' element={<Updateproperty/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
