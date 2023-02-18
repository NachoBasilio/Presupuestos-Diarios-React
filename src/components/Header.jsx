import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'


export default function Header({presupuesto, setPresupuesto, isValidPresupuesto, setisValidPresupuesto, gastos}){
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        {isValidPresupuesto ? (
          <ControlPresupuesto
          gastos={gastos}
          presupuesto={presupuesto}
          ></ControlPresupuesto>
        ):(
          <NuevoPresupuesto
          setisValidPresupuesto={setisValidPresupuesto}
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          ></NuevoPresupuesto>
        )}
    </header>
  )
}
