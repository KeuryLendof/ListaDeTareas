import React, { useState } from 'react';
import swal from 'sweetalert';
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
            swal("Good job!", "Tarea agregada correctamente!", "success");
        }else{
            setValidacion(false)
        }
    }

    return(
        <div>
            <form className="form" onSubmit={submit}><br></br>
                <span>Añadir tarea</span><br></br><br></br>
                <input value = {texto} onChange={manejarFormulario} />
                <button>Añadir</button> <br></br>
            </form>
            {/* VERIFICA NO HEMOS PUESTO UNA TAREA Y SI ES ASI NOS TIRA UN ERROR*/
                !validacion &&
                <div className="validacion">
                    Añada una tarea por favor!
                </div>
                
            }
        </div>
    )
}

export default Formulario;