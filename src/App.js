import React, { useState } from 'react';
import Formulario from './componentes/Formulario';
import Tarea from './componentes/Tarea';
import './App.css';

function App() {
  const [verPDF, setVerPDF] = React.useState(false);
  const[listaTareas, setListaTareas] = useState([]);

  const nuevaTarea = (tarea) => {
    setListaTareas([tarea, ...listaTareas])//los 3 pts hace como si fuese una copia
  }

  const borrar = (id) =>{
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
            />)
        }
      </div>
    </div>
  );
}

export default App;
