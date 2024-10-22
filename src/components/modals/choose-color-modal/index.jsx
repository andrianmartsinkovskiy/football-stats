import c from './style.module.css'
import {ModalWrap} from "../../wrapers/modal-wrap/index.jsx";
import {store} from "../../../store/store.js";

const ChooseColorModal = ({colors, submit}) => {

  const submitHandler = (item) => {
    submit(item)
    store.players.closeColorModal()
  }

  return (
    <ModalWrap onClose={() => store.players.closeColorModal()}>
      <div className={c.list}>
        {
          colors.map(item => (
            <div
              key={item.id}
              style={{backgroundColor: item.hex}}
              className={c.item}
              onClick={() => submitHandler(item)}
            />
          ))
        }
      </div>
    </ModalWrap>
  )
}

export {
  ChooseColorModal
}