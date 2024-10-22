import c from './style.module.css'
import {ButtonAdd} from "../buttons/button-add/index.jsx";
import {store} from "../../store/store.js";
import {Player} from "../sections/player/index.jsx";
import {observer} from "mobx-react-lite";
import {ButtonStart} from "../buttons/button-start/index.jsx";
import {IoIosArrowForward, IoIosFootball} from "react-icons/io";
import {transformPlayerStatsHelper} from "../../helpers/transform-player-stats.helper.js";
import {useModal} from "../../context/confirm-modal.context.jsx";
import {getPlayerStatsRequest} from "../../api/players.js";
import {useState} from "react";


const Bar = observer(() => {
  const [isLoading, setIsLoading] = useState(false)
  const { showConfirmModal } = useModal();

  const getDataHandler = async () => {
    if (isLoading) return
    setIsLoading(true)
    const dataToReturn = []
    const ids = store.players.selectedPlayers.map(item => item.player.id)

    for (const itemId of ids) {
      const newData = await getPlayerStatsRequest(itemId);
      dataToReturn.push(newData)
    }

    if (dataToReturn.length) {
      store.bar.decreaseTokens()
      // transform data
      const dataToTransform = store.players.selectedPlayers.map((item, index) => {
        return {
          player: item.player,
          color: item.color,
          stats: dataToReturn[index].data.response[0].statistics
        }
      })

      // select active leagues
      const leagues = dataToTransform.map(item => {
        return {
          player: item.player.name,
          data: item.stats.map(el => {
            return {
              name: el.league.name,
              selected: true
            }
          })
        }
      })
      const activeLeagues = await showConfirmModal(leagues)
      // filter data by active leagues
      const dataFilteredByLeague = dataToTransform.map((item, index) => {
        return {
          ...item,
          stats: item.stats.filter((statsItem, statsIndex) => {
            return activeLeagues[index].data[statsIndex].selected
          })
        }
      })

      // transform data to stats
      const transformedData = transformPlayerStatsHelper(dataFilteredByLeague)

      // set stats
      store.players.setStatsData(transformedData)
      store.bar.closeBar()
    } else {
      alert("Something was wrong")
    }

    setIsLoading(false)
  }


  return (
    <div
      style={{transform: `translateX(${store.bar.isBarActive ? "0" : "-350px"})`}}
      className={c.wrap}
    >
      <div className={c.container}>
        <span className={c.toggle} onClick={() => store.bar.toggleBarActiveHandler()}>
          <span
            className={c.toggleIcon}
            style={{transform: `rotate(${store.bar.isBarActive ? '180deg' : '0deg'})`}}
          >
            <IoIosArrowForward />
          </span>
        </span>
        <div className={c.top}>
          <h2 className={c.title}> <IoIosFootball color="#6B5B95" /> Football Stats</h2>
          <p className={c.note}>Compare football player statistics for the season</p>
        </div>

        <div>
          <div className={c.players}>
            {
              store.players.selectedPlayers.map(item => (
                <Player
                  removeSubmit={(item) => store.players.removePlayerFromList(item)}
                  colorSubmit={(item) => store.players.openColorModal(item.id)}
                  color={item.color.hex}
                  player={item.player}
                  key={item.id}
                />
              ))
            }
            {
              store.players.selectedPlayers.length < 4 && (
                <ButtonAdd onClick={() => store.players.openChoosePlayerModal()} />
              )
            }
            {
              store.players.selectedPlayers.length > 0 && (
                <ButtonStart count={store.bar.tokens} isLoading={isLoading} onClick={getDataHandler} />
              )
            }
          </div>
        </div>
        <div/>
      </div>
    </div>
  )
})

export {
  Bar
}


