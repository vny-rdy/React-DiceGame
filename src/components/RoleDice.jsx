// import { useState } from "react"
import PropTypes from 'prop-types';
const RoleDice = ({currentDice,roleDice}) => {
    

  return (
    <div className="flex-col m-auto w-1/5 align-middle my-6">
      <img className="w-2/3 my-2 cursor-pointer active:animate-spin" onClick={roleDice} src={`/images/dice/dice_${currentDice}.png`} alt="dice1"/>
      <p className="font-medium">Click on Dice to Roll</p>
    </div>
  )
}
RoleDice.propTypes = {
    currentDice: PropTypes.number,
    roleDice: PropTypes.func.isRequired,
  };
export default RoleDice
