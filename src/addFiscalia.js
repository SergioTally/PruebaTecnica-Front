import './App.css';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';

function AddFiscalia(){  
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSuccess, setIsSuccess] = useState(false);
    const onSubmit=async (data)=>{
        try {
            const response = await fetch('http://localhost:8080/MP/addFiscalia', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            });
            if (response.ok) {
                setIsSuccess(true);
              }
            // Procesar la respuesta del servidor
          } catch (error) {
            alert(error)
          }
    }

        return (
            <div className="App">
              <header className="App-header">
              <h1>Fiscalias</h1>
             <div className='container py-4 px-4 justify-content-center'>
             <form onSubmit={handleSubmit(onSubmit)}>
                <div className='p-0 overflow-hidden h-100 shadow'>
                    <div className='overflow-hidden rounded p-0 bs-light'>
                        <div className='row'>
                            <label className='col-lg-2'>Nombre</label>
                            <input className='col-lg-10' {...register('fs_nombre', {required:true, maxLength:50})} placeholder='Nombre de la Fiscalia'></input>
                            {errors.fs_nombre?.type==='required' && <p>El campo nombre es requerido.</p>}
                            {errors.fs_nombre?.type==='maxLength' && <p>El campo nombre no puede poseer mas de 50 caracteres.</p>}
                        </div>
                        <div className='row'>
                            <label className='col-lg-2'>Direccion</label>
                            <input className='col-lg-10' {...register('fs_direccion', {required:true, maxLength:500})} placeholder='Direccion de la Fiscalia'></input>
                            {errors.fs_direccion?.type==='required' && <p>El campo direccion es requerido.</p>}
                            {errors.fs_direccion?.type==='maxLength' && <p>El campo direccion no puede poseer mas de 50 caracteres.</p>}
                        </div>
                        <div className='row'>
                            <label className='col-lg-2'>Numero</label>
                            <input className='col-lg-10' {...register('fs_numero',{ minLength:8,maxLength:11, pattern: "[0-9]{8,11}" })} placeholder='Numero de contacto de la Fiscalia'></input>
                            {errors.fs_numero?.type==='maxLength' && <p>El campo numero no es valido.</p>}
                            {errors.fs_numero?.type==='minLength' && <p>El campo numero no es valido.</p>}
                        </div>
                    </div>
                </div>
                <input type="submit" value="Guardar Fiscalia"></input>
                {isSuccess && <p>La solicitud se ha completado con éxito.</p>}
                </form>
             </div>
            </header>
            </div>
          );
}

export default AddFiscalia;
