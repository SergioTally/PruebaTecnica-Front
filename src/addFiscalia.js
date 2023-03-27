import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function addFiscalia(){  
        return (
            <div className="App">
              <header className="App-header">
              <h1>Fiscalias</h1>
             <div className='container py-4 px-4 justify-content-center'>
             <form >
                <div className='p-0 overflow-hidden h-100 shadow'>
                    <div className='overflow-hidden rounded p-0 bs-light'>
                        <div className='row'>
                            <label className='col-lg-2'>Nombre</label>
                            <input className='col-lg-10' id='fs_nombre' name='fs_nombre' placeholder='Nombre de la Fiscalia'></input>
                        </div>
                        <div className='row'>
                            <label className='col-lg-2'>Direccion</label>
                            <input className='col-lg-10' id='fs_direccion' name='fs_direccion' placeholder='Direccion de la Fiscalia'></input>
                        </div>
                        <div className='row'>
                            <label className='col-lg-2'>Numero</label>
                            <input className='col-lg-10' id='fs_numero' name='fs_numero' placeholder='Numero de contacto de la Fiscalia'></input>
                        </div>
                    </div>
                </div>
                </form>
             </div>
             <button className='Pregunta'><a href='/addFiscalia'>Guardar Fiscalia</a></button>
            </header>
            </div>
          );
}

export default addFiscalia;
