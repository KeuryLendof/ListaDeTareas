import React, {useState} from "react";
import '../App.css';

/* QUI ESTAMOS IMPORTANDO LOS ICONOS DE ECITAR Y BORRAR DE UNA LIBRERIA DE ICONOS QUE TIENE REACT Y LO INSTALAMOS CON npm install react-icons --save */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

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
                <div className="lista" >
                   <h6>{props.tarea}</h6>
                   <div className='icons'>
                        <RiCloseCircleLine
                        onClick={borrarTarea}
                        className='delete-icon'
                        />
                        <TiEdit
                        onClick={editarTarea}
                        className='edit-icon'
                        />
                    </div>
                   {/* <button onClick={editarTarea}>Editar</button>
                   <button onClick={borrarTarea}>Borrar</button>  */}
               </div>
               :
               <form className="formEdit" onSubmit={submitEdit}>
                   <input value={editText} onChange={manejarEdit} /><button>Guardar</button><br></br>
               </form>
               
               
            }
        </div>
    )
}


export default Tarea;