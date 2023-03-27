import './App.css';


import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Fiscalias from './Fiscalias.js'

function Header(){
  return (
    <nav>
    <ul>
      <li><Link to="/">Bienvenida</Link></li>
      <li><Link to="/Fiscalias">Fiscalias</Link></li>
    </ul>
    </nav>
  )
}

function App() {
  return (
    <>
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/Fiscalias' element={<Fiscalias />} />
    </Routes>
  </BrowserRouter>
  </>)
}

export default App;
