import React, {useState} from "react";
import '../App.css';


const Tarea = (props) =>{
    const [modoEdit, setModoEdit] = useState(false);
    const [editText, setEditText] = useState("");

    const editarTarea = () => {
        setModoEdit(true)
    }

    const manejarEdit =(event) => {
        setEditText(event.target.value);
    }

    const submitEdit = (event) => {
        event.preventDefault();
        props.editar(props.id, editText)
        setEditText("");
        setModoEdit(false)
    }

    const borrarTarea = () => {
        props.borrar(props.id);
    }

    return(
        <div>
            {
                !modoEdit ?
                <div className="lista">
                   <span>{props.tarea}</span>
                   <button onClick={editarTarea}>Editar</button>
                   <button onClick={borrarTarea}>Borrar</button>
               </div>
               :
               <form className="formEdit" onSubmit={submitEdit}>
                   <input value={editText} onChange={manejarEdit} /><button>Guardar</button>
               </form>
            }
        </div>
    )
}


export default Tarea;