import c from './style.module.css'
import {RiDeleteBin5Fill} from "react-icons/ri";

const Player = ({player, submit, color, removeSubmit, colorSubmit}) => {
  const submitHandler = submit ? submit : () => {}
  const wrapClass = submit ? `${c.wrap} ${c.wrapSubmit}` : c.wrap

  const removeSubmitHandler = () => {
    removeSubmit(player)
  }

  const colorSubmitHandler = () => {
    colorSubmit(player)
  }

  return (
    <div
      className={wrapClass}
      onClick={submitHandler}
    >
      <div className={c.actions}>
        {colorSubmit && (
          <span>
            <span className={c.colorIcon} style={{backgroundColor: color}} onClick={colorSubmitHandler}/>
          </span>
        )}
        {removeSubmit && <span><RiDeleteBin5Fill color="red" onClick={removeSubmitHandler} /></span>}
      </div>
      <div>
        <img className={c.img} src={player.img} alt=""/>
      </div>
      <div>
      <div className={c.name}>{player.name}</div>
        <div className={c.position}>{player.position}</div>
      </div>
    </div>
  )
}

export {
  Player
}