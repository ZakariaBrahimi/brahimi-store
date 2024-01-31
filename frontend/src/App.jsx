import Navbar from './components/Navbar'
import {Routes, Route} from "react-router-dom";
import Index from './pages/home/Index';
import Footer from './components/Footer';
function App() {

  return (
    <div className='text-right'>
        <Navbar/>

        <Routes>
            <Route path='' element={<Index/>} />
        </Routes>
        <Footer/>

        
    </div>
  )
}

export default App
