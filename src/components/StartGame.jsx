import propTypes from 'prop-types';
const StartGame = ({toggle}) => {
  return (
    <div className="container grid grid-cols-2  m-auto max-md:grid max-md:grid-cols-1 max-md:grid-rows-2 max-sm:grid-rows-1">
      <img src="/images/dices 1.png" alt="Dice" />
      <div className="content m-auto">
        <h1 className="font-bold text-6xl my-8">DICE GAME</h1>
      <button onClick={toggle} className="bg-black text-white p-2 px-8 rounded-[5px] float-right hover:border-[1px] hover:border-black hover:duration-300 hover:ease-in active:bg-white active:border-[1px] active:duration-0 active:text-black">Play Now</button>
      </div>
    </div>
  )
}
StartGame.propTypes={
    toggle:propTypes.func.isRequired,
};


export default StartGame
