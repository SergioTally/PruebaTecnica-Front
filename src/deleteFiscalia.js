import './App.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function DeleteFiscalia(){  
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();
    const routeparams=useParams()
    let urlTemporal="http://localhost:8080/MP/deleteFiscalia/"
    const url=urlTemporal.concat(routeparams.fs_id)

    const [todos, setTodos]=useState()
  const fetchApi=async () => {
    try {
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        setTodos(response)
        if (response.ok) {
            setIsSuccess(true);
            console.log(response);
          }
        // Procesar la respuesta del servidor
      } catch (error) {
        alert(error)
      }
    
  }
  useEffect(()=>{
    fetchApi()
    navigate("/Fiscalias", {replace:true});
  },[ ])

        return (
            <div className="App">
              <header className="App-header"></header>
              <h3>Redireccionando</h3>
            </div>
            
          );
}

export default DeleteFiscalia;
