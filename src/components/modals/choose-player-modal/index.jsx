import c from './style.module.css'
import {ModalWrap} from "../../wrapers/modal-wrap/index.jsx";
import {store} from "../../../store/store.js";
import {Player} from "../../sections/player/index.jsx";

const ChoosePlayerModal = ({players, submit}) => {

  const submitHandler = (item) => {
    submit(item)
    store.players.closeChoosePlayerModal()
  }

  return (
    <ModalWrap onClose={() => store.players.closeChoosePlayerModal()}>
      <div className={c.list}>
        {
          players.map(item => (
            <Player key={item.id} submit={() => submitHandler(item)} player={item} />
          ))
        }
      </div>
    </ModalWrap>
  )
}

export {
  ChoosePlayerModal
}