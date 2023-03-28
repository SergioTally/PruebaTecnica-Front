import './App.css';

import Nav from 'react-bootstrap/Nav';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Fiscalias from './Fiscalias.js'
import AddFiscalia from './AddFiscalia.js'
import UpdateFiscalia from './UpdateFiscalia.js'
import DeleteFiscalia from './DeleteFiscalia.js'
import Bienvenida from './Bienvenida.js'

function Header(){
  return (
    <Nav>
    <Nav.Item>
      <Nav.Link>
        <Link to="/">Bienvenida</Link>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>
        <Link to="/Fiscalias">Fiscalias</Link>
      </Nav.Link>
    </Nav.Item>
    </Nav>
  )
}

function App() {
  return (
    <>
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/Fiscalias' element={<Fiscalias />} />
      <Route path='' element={<Bienvenida />} active />
      <Route path='/Bienvenida' element={<Bienvenida />} active />
      <Route path='/AddFiscalia' element={<AddFiscalia />} />
      <Route path='/UpdateFiscalia/:fs_id' element={<UpdateFiscalia />} />
      <Route path='/DeleteFiscalia/:fs_id' element={<DeleteFiscalia />} />
    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App;
