import Footer from './pages/Footer';
import Header from './pages/header/Header';
import Maps from './pages/Maps';
import Weapons from './pages/Weapons';
import Abilities from './Abilities/Abilities';
import Nav from './nav/Nav';


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
