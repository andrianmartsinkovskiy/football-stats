import {Bar} from "../../components/bar/index.jsx";
import c from './style.module.css'
import {ChoosePlayerModal} from "../../components/modals/choose-player-modal/index.jsx";
import {PLAYERS} from "../../const/players.js";
import {observer} from "mobx-react-lite";
import {store} from "../../store/store.js";
import {ChooseColorModal} from "../../components/modals/choose-color-modal/index.jsx";
import {useMemo} from "react";
import {COLORS} from "../../const/colors.js";
import {BattleRatings} from "./components/battle-ratings/index.jsx";
import {BattleChart} from "./components/battle-chart/index.jsx";
import {EmptySection} from "../../components/sections/empty-section/index.jsx";

const BattlePage = observer(() => {
  const activePlayers = useMemo(() => {
    const ids = store.players.selectedPlayers.map(item => item.player.id)
    return PLAYERS.filter(item => !ids.includes(item.id))
  }, [store.players.selectedPlayers])

  const activeColors = useMemo(() => {
    const colorsIds = store.players.selectedPlayers.map(item => item.color.id)
    return COLORS.filter(item => !colorsIds.includes(item.id))
  }, [store.players.selectedPlayers])


  return (
    <div>
      <Bar/>
      {
        store.players.isChooseModalOpen && (
          <ChoosePlayerModal
            players={activePlayers}
            submit={item => store.players.addPlayerToList({player: item, color: activeColors[0]})}
          />
        )
      }
      {
        store.players.isColorModalOpen && (
          <ChooseColorModal
            colors={activeColors}
            submit={(item) => store.players.changePlayerColor(item)}
          />
        )
      }

      {
        store.players.statsData ? (
          <div className={c.wrap}>
            <BattleRatings/>
            <BattleChart/>
          </div>
        ) : (
          <EmptySection />
        )
      }
    </div>
  )
})

export {
  BattlePage
}