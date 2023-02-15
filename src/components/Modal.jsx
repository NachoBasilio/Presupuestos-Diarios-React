import {useState} from 'react'
import CerrarBtn from '../img/cerrar.svg'

export default function Modal({setModal, animarModal, setAnimarModal}) {
    const [nombre, setNombre] = useState("")
    const [cantidad, setCantidad] = useState(0)
    const [categoria, setCategoria] = useState("")


    const ocultarModal = ()=>{
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 400);
    }

    return (
        <div className='modal'>
            <div className='cerrar-modal'>
                <img 
                src={CerrarBtn} 
                alt="Boton para cerrar" 
                onClick={ocultarModal}
                />
            </div>
            <form action="" className={`formulario ${animarModal ? 'animar' : 'cerrar' }`}>
                <legend>Nuevo Gasto</legend>
                <div className='campo'>
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input 
                    type="text"
                    placeholder='Añade el nombre del Gasto'
                    id="nombre" 
                    value={nombre}
                    onChange={e => setNombre(e.target.value)} 
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad</label>
                    <input 
                    type="number"
                    placeholder='Añade la cantidad del gasto'
                    id="cantidad" 
                    value={cantidad}
                    onChange={e => setCantidad(Number(e.target.value))} 
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="categoria">Categoria</label>
                    <select name="" id="categoria" value={categoria} onChange={e => setCategoria(e.target.value)}>
                        <option value="" selected disabled hidden>-- Seleccione --</option>
                        <option value="Ahorro">Ahorro</option>
                        <option value="Comida">Comida</option>
                        <option value="Casa">Casa</option>
                        <option value="Ocio">Ocio</option>
                        <option value="Gastos">Gastos varios</option>
                        <option value="Salud">Salud</option>
                        <option value="Subscripciones">Subscripciones</option>
                    </select>
                </div>
                <input 
                type="submit" 
                value="Añadir Gasto"
                />
            </form>
        </div>
  )
}
