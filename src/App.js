import Footer from './pages/Footer';
import Header from './pages/header/Header';
import Nav from './pages/nav/Nav';
import {Route, Routes} from 'react-router-dom'
import Arsenal from './pages/arsenal/Arsenal';
import Maps from './pages/map/Maps';


function App() {
  return (
    <>
    
    <Nav/>
    {/* <Abilities /> */}
    
    <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='/Maps' element={<Maps/>}/>
      <Route path='/Arsenal' element={<Arsenal/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
