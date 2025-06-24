import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import './App.scss'
import Header from "./components/Header"
import NotFoundPage from './components/pages/NotFoundPage'
import Footer from './components/Footer'
import Logements from './components/pages/Logements'


function App() {

  return (
    <div className='App'>
      <Header />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/logement/:id' element={<Logements />}></Route>
      <Route path='/about' element={<About />}/>
      <Route path='*' element={<NotFoundPage />}/>
      <Route path='/error' element={<NotFoundPage />}></Route>
     </Routes>
     <Footer />
    </div>
  )
}

export default App
