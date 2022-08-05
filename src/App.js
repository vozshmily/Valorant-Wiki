import Footer from './pages/Footer';
import Header from './pages/header/Header';
import Maps from './pages/Maps';
import Nav from './pages/nav/Nav';
import {Route, Routes} from 'react-router-dom'
import Arsenals from './pages/arsenal/Arsenals';


function App() {
  return (
    <>
    
    <Nav/>
    {/* <Abilities /> */}
    
    <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='/Maps' element={<Maps/>}/>
      <Route path='/Arsenals' element={<Arsenals/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
