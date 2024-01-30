import Navbar from './components/Navbar'
import {Routes, Route} from "react-router-dom";
import Index from './pages/home/Index';
function App() {

  return (
    <div className='text-right'>
        <Navbar/>

        <Routes>
            <Route path='' element={<Index/>} />
        </Routes>

        
    </div>
  )
}

export default App
