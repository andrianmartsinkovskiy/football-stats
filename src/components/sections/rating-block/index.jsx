import c from './style.module.css'

const RatingBlock = ({item, label}) => {


  return (
    <div
      className={c.wrap}
    >
      <div>
        <img
          style={{border: `1px solid ${item.color.hex}`}}
          className={c.img} src={item.player.img}
          alt=""
        />
      </div>
      <div>
        <div className={c.name}>{item.player.name}</div>
        <div style={{color: item.color.hex}} className={c.rating}>{item.value}</div>
        <div className={c.note}>{label}</div>
      </div>
    </div>
  )
}

export {
  RatingBlock
}