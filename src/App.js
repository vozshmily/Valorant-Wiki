import Footer from './pages/Footer';
import Header from './pages/header/Header';
import Maps from './pages/Maps';
import Nav from './pages/Nav';
import Weapons from './pages/Weapons';
import Abilities from './Abilities/Abilities';


function App() {
  return (
    <>
    <Header/>
    <Nav/>
    {/* <Abilities /> */}
    <Maps/>
    <Weapons/>
    <Footer/>
    </>
  );
}

export default App;
