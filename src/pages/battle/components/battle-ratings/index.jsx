import c from "./style.module.css";
import {store} from "../../../../store/store.js";
import {RatingBlock} from "../../../../components/sections/rating-block/index.jsx";
import {observer} from "mobx-react-lite";
import {useMemo} from "react";

const BattleRatings = observer(() => {
  const dataArr = useMemo(() => {
    if (!store.players.statsData) return []
    const key = store.chart.activeKey.key
    return store.players.statsData[key]
  }, [store.players.statsData, store.chart.activeKey])

  return (
    <div
      className={c.wrap}
      style={{gridTemplateColumns: `repeat(${dataArr.length}, 1fr)`}}
    >
      {
        dataArr.map(item => (
          <RatingBlock
            key={Math.random()}
            rating={10}
            item={item}
            label={store.chart.activeKey.label}
          />
        ))
      }
    </div>
  )
})

export {
  BattleRatings
}