import './App.css';
import Home from './components/Home';
import Patner from './components/Patner';
import Body from './components/Body';
import Packages from './components/Packages';
import Booking from './components/Booking';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Home/>
      <Patner/>
      <Body/>
      <Packages/>
      <Booking/>
      <Footer/>
    </div>
  );
}

export default App;
