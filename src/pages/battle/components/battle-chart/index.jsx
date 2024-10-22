import c from "./style.module.css";
import {observer} from "mobx-react-lite";
import {SelectDefault} from "../../../../components/selects/select-default/index.jsx";
import {IoAnalyticsSharp} from "react-icons/io5";
import {store} from "../../../../store/store.js";
import {STATS_KEYS} from "../../../../const/stats-keys.js";
import {CHARTS} from "../../../../const/charts.js";
import {MyBarChart} from "../../../../components/charts/bar-chart/index.jsx";
import {useMemo} from "react";
import {BarChartRound} from "../../../../components/charts/bar-chart-round/index.jsx";
import {CustomizedAreaChart} from "../../../../components/charts/area-chart/index.jsx";
import {CustomizedLineChart} from "../../../../components/charts/line-chart/index.jsx";
import {MyPieChart} from "../../../../components/charts/pie-chart/index.jsx";


const BattleChart = observer(() => {
  const chartData = useMemo(() => {
    if (!store.players.statsData) return  []
    const key = store.chart.activeKey.key
    return store.players.statsData[key].map(item => {
      return {
        value: Number(item.value),
        color: item.color.hex,
        player: item.player
      }
    })
  }, [store.players.statsData, store.chart.activeKey])


  return (
    <div className={c.chart}>
      <div className={c.chartView}>
        <div className={c.chartBar}>
          <SelectDefault
            value={store.chart.activeChart}
            onChange={v => store.chart.setActiveChart(v)}
            options={CHARTS}
          />
          <span className={c.icon}><IoAnalyticsSharp /></span>
          <SelectDefault
            value={store.chart.activeKey}
            onChange={v => store.chart.setActiveKey(v)}
            options={STATS_KEYS}
          />
        </div>
        <div className={c.view}>
          {store.chart.activeChart.value === 1 && <MyBarChart data={chartData} />}
          {store.chart.activeChart.value === 2 && <BarChartRound data={chartData} />}
          {store.chart.activeChart.value === 3 && <CustomizedAreaChart data={chartData} />}
          {store.chart.activeChart.value === 4 && <CustomizedLineChart data={chartData} />}
          {store.chart.activeChart.value === 5 && <MyPieChart data={chartData} />}
        </div>
      </div>
    </div>
  )
})

export {
  BattleChart
}