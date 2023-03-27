import './App.css';
import React, { useEffect, useState } from 'react';

function Fiscalias(){
  const url="http://localhost:8080/MP/allFiscalia"
  
  const [todos, setTodos]=useState()
  const fetchApi=async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    console.log(responseJSON)
    setTodos(responseJSON)
  }
  useEffect(()=>{
    fetchApi()
  },[])

  
      return (
        <div className="App">
          <header className="App-header">
          <button className='Pregunta SinColor'>
         {!todos ? 'Cargando...': todos.map((todo,index)=>{ 
            return <p key={index}>
                {todo['fs_id']},
                {todo['fs_nombre']},
                {todo['fs_direccion']},
                {todo['fs_numero']}
                </p> }) 
                }
         </button>
        </header>
        </div>
      );
      
}

export default Fiscalias;
