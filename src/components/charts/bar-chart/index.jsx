import {BarChart, Bar, ResponsiveContainer, LabelList} from 'recharts';
import {PLAYERS} from "../../../const/players.js";

const data_test = [
  {
    value: 4000,
    color: "red",
    player: PLAYERS[0]
  },
  {
    value: 4000,
    color: "green",
    player: PLAYERS[0]
  },
  {
    value: 3000,
    color: "blue",
    player: PLAYERS[0]
  },
  {
    value: 5000,
    color: "orange",
    player: PLAYERS[0]
  }
];

const MyBarChart = ({data}) => {
  const CustomBar = (props) => {
    const { fill, x, y, width, height, color } = props;
    return <rect x={x} y={y} width={width} height={height} fill={color || fill} />;
  };

  const CustomLabel = (props) => {
    const { x, y, width, value, color } = props;
    return (
      <text
        x={x + width / 2} // Центруємо по стовпчику
        y={y - 10} // Позиціюємо над стовпчиком
        fill={color}
        textAnchor="middle"
      >
        {value}
      </text>
    );
  };
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <Bar dataKey="value" shape={<CustomBar />}>
          <LabelList
            dataKey="value"
            content={<CustomLabel />}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export {
  MyBarChart
}