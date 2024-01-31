import Navbar from './components/Navbar'
import {Routes, Route} from "react-router-dom";
import Index from './pages/home/Index';
import Footer from './components/Footer';
import CallUsTopBar from './components/CallUsTopBar';
import Product from './pages/product/Product';
function App() {

  return (
    <div className='text-right relative min-h-screen'>
        <CallUsTopBar/>
        <Navbar/>

        <Routes>
            <Route path='' element={<Index/>} />
            <Route path='product' element={<Product/>} />
        </Routes>
        <Footer/>

        
    </div>
  )
}

export default App
