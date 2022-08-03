import AgentAPI from './api/AgentAPI';
import Agents from './pages/Agents';
import Footer from './pages/Footer';
import Header from './pages/header/Header';
import Maps from './pages/Maps';
import Nav from './pages/Nav';
import Weapons from './pages/Weapons';


function App() {
  return (
    <>
    <Header/>
    <Nav/>
    <Agents/>
    <Maps/>
    <Weapons/>
    <Footer/>
    <AgentAPI/>
    </>
  );
}

export default App;
