import c from './style.module.css'

const ModalWrap = ({onClose, children}) => {
  const handleWrapClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }


  return (
    <div onClick={handleWrapClick} className={c.wrap}>
      <div className={c.container}>
        {children}
      </div>
    </div>
  )
}

export {
  ModalWrap
}