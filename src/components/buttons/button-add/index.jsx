import c from './style.module.css'
import {IoMdPersonAdd} from "react-icons/io";

const ButtonAdd = ({onClick}) => {

  return (
    <button className={c.wrap} onClick={onClick}>
      <IoMdPersonAdd />
    </button>
  )
}

export {
  ButtonAdd
}