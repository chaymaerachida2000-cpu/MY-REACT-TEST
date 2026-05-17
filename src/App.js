
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mode from './components/Mode';
import Footer from './components/Footer';
import './App.css';

 
function App (){
  return (
    <div className='App'>
      <Navbar />
    
      <Hero />
 
      <Mode />
      
      <Footer />
    </div>
  );
}
export default App ;