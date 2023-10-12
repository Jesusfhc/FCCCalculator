import react from 'react'
import '../stylesheets/Boton.css'

function Button(props) {

  const esOperador = (valor) => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=')
  };
  
  return (
      <div 
        className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`}
        onClick={()=>props.manejarClick(props.children)}>
          {props.children}
      </div>
    )
}

export default Button