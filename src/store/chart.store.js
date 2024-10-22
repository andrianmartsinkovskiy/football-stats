import {makeAutoObservable} from "mobx";
import {STATS_KEYS} from "../const/stats-keys.js";
import {CHARTS} from "../const/charts.js";


class Chart {
  activeChart = CHARTS[0]
  activeKey = STATS_KEYS[0]
  constructor() {
    makeAutoObservable(this)
  }

  setActiveKey(newKeyObj) {
    this.activeKey = newKeyObj
  }

  setActiveChart(newChartObj) {
    this.activeChart = newChartObj
  }
}

const ChartStore = new Chart()

export {
  ChartStore
}
