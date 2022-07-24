import React from 'react';

const Button =({btnType, name, onIncrement})=>{
return(
    <button type="button" className={btnType}  onClick={onIncrement}>{name}</button>
  )
}


export default Button;