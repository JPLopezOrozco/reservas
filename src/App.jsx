import Navbar from './components/Navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import Admin from './pages/Admin'

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
