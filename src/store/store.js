import {PlayersStore} from "./players.store.js";
import {ChartStore} from "./chart.store.js";
import {BarStore} from "./bar.store.js";

const store = {
  players: PlayersStore,
  chart: ChartStore,
  bar: BarStore
}

export {
  store
}
