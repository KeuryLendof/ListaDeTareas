import React, { useState, useEffect } from 'react';
import Formulario from './componentes/Formulario';
import Tarea from './componentes/Tarea';
import './App.css';

function App() {
  const[listaTareas, setListaTareas] = useState([]);
  const KEY = "myapp.listaTareas"
  const nuevaTarea = (tarea) => { /*setListaTareas ESTE ES UN ARRAY DONDE CONTIENE LA LISTA DE TODAS LAS TAREAS */
    setListaTareas([tarea, ...listaTareas])//los 3 pts hace como si fuese una copia
  }

/*PUEDES ELIMINAR LA TAREA */
  const borrar = (id) =>{
    const listaFiltrada = listaTareas.filter((e, index)=> index !== id);
    setListaTareas(listaFiltrada);
  }

  /*SI LA TAREA ESTA LISTA PUEDES ELIMINARLA */
  const tarealista = (id) =>{
    const listaFiltrada = listaTareas.filter((e, index)=> index !== id);
    setListaTareas(listaFiltrada);
  }

  const actTarea = (id, tarea) => {
    const listaActualizada = listaTareas.map((e, index) => {
      if(index === id){
        e = tarea;
      }

      return e;
    })

    setListaTareas(listaActualizada)
  }

  useEffect(()=>{
    const storeTareas = JSON.parse(localStorage.getItem(KEY));
    if(storeTareas){
      setListaTareas(storeTareas);
    }
  }
  ,[])
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(listaTareas));
  }
  ,[listaTareas])

  return (
    <div className="App">
      <Formulario 
        nuevaTarea = {nuevaTarea}
      />
      
      <div className="listas">
        {
          listaTareas.map((e, index) => <Tarea
            tarea={e}
            borrar={borrar}
            id={index}
            editar={actTarea}
            tarealista={borrar}
            />)
        }
      </div>
    </div>
  );
}

export default App;
