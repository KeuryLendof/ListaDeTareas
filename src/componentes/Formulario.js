import React, { useState } from 'react';
import '../App.css';

const Formulario = (props) => {
    const[texto, tomarTexto] = useState("");
    const[validacion, setValidacion] = useState(true);

    const manejarFormulario = (event) =>{
        tomarTexto(event.target.value);
    }

    const submit = (event) => {
        event.preventDefault();//Esto hace que la pagina no se recargue
        if(texto.trim() !== ""){
            props.nuevaTarea(texto);
            tomarTexto("");
            setValidacion(true);
        }else{
            setValidacion(false)
        }
    }


    return(
        <div>
            <form className="form" onSubmit={submit}>
                <span>Añadir tarea</span>
                <input value = {texto} onChange={manejarFormulario} />
                <button>Añadir</button>
            </form>
            {
                !validacion &&
                <div className="validacion">
                    Añada una tarea por favor!
                </div>
                
            }
        </div>
    )
}

export default Formulario;