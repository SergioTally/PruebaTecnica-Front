import './App.css';
import React, { useEffect, useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navigation, Pagination, Scrollbar} from 'swiper'
import 'swiper/swiper-bundle.min.css'

function Fiscalias(){
  const url="http://localhost:8080/MP/allFiscalia"
  let urlTemporal="/updateFiscalia/"

  let urlDeleteTemporal="/deleteFiscalia/"
  
  
  const [todos, setTodos]=useState()
  const fetchApi=async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setTodos(responseJSON)
  }
  useEffect(()=>{
    fetchApi()
  },[])
  
    if(!todos)
    {
        return (
            <div className="App">
              <header className="App-header">
              <h2>Fiscalias</h2>
              <h2>Sin Fiscalias que mostrar</h2>
              <button className='Pregunta'><a href="/addFiscalia">Agregar Fiscalia</a></button>
             <div className='containet py-4 px-4 justify-content-center'></div>
            </header>
            </div>
          );
    }
    else
    {
        return (
            <div className="App">
              <header className="App-header">
              <h1>Fiscalias</h1>
             <div className='container py-4 px-4 justify-content-center'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar]}
                    navigation
                    pagination={{clickable:true}}
                    scrollbar={{draggable:true}}
                    freeMode={true}
                    grabCursor={true}
                    className="mySwiper"
                    slidesPerView={1}
                     >
                    {todos.map((todo,index)=>
                        { 
                          const urlEnvio=urlTemporal.concat(todo['fs_id'])
                          const urlDelete=urlDeleteTemporal.concat(todo['fs_id'])
                            return  <SwiperSlide>
                              <form action={urlEnvio} method='GET'>
                                <div className='p-0 overflow-hidden h-100 shadow'>
                                    <div className='overflow-hidden rounded p-0 bs-light'>
                                        <div className='row'>
                                            <label className='col-lg-2'>Nombre</label>
                                            <input className='col-lg-10' readOnly  value={todo['fs_nombre']}></input>
                                        </div>
                                        <div className='row'>
                                            <label className='col-lg-2'>Direccion</label>
                                            <input className='col-lg-10' readOnly value={todo['fs_direccion']}></input>
                                        </div>
                                        <div className='row'>
                                            <label className='col-lg-2'>Numero</label>
                                            <input className='col-lg-10' readOnly value={todo['fs_numero']}></input>
                                        </div>
                                    </div>
                                    <div className='row'>
                                      <input  className='Pregunta btn-accion-tabla' type="submit" value="Editar Fiscalia"></input>
                                    </div>
                                </div>
                              </form>
                              <form action={urlDelete} method='GET'>
                              <div className='row'>
                                  <input  className='NoPregunta btn-accion-tabla' type="submit" value="Eliminar Fiscalia"></input>
                                </div>
                                </form>
                                <h3>{todo['fs_nombre']}</h3>
                                <h3>| </h3>
                            </SwiperSlide>  
                        }) 
                    }
                </Swiper>
             </div>
             <button className='Pregunta'><a href='/AddFiscalia'>Agregar Fiscalia</a></button>
            </header>
            </div>
          );
    }
}

export default Fiscalias;
