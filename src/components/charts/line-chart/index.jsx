import { AreaChart, Area, ResponsiveContainer, LabelList } from 'recharts';
import { COLORS } from "../../../const/colors.js";
import { useMemo } from "react";


const CustomizedLineChart = ({ data }) => {
  const gradientId = 'colorGradient';
  const colors = useMemo(() => {
    return data.map(item => item.color || COLORS[0].hex); // Використовуємо колір із data або стандартний
  }, [data]);

  const CustomDot = (props) => {
    const { cx, cy, index, value } = props;
    let adjustedCx = cx;
    let adjustedCy = cy;
    let adjustedTextCx = cx;

    if (index === 0) {
      // Перша точка: вправо на 10
      adjustedCx += 5;
      adjustedTextCx += 20;
    } else if (index === data.length - 1) {
      // Остання точка: вліво на 10
      adjustedCx -= 5;
      adjustedTextCx -= 20;
    }

    return (
      <>
        <circle cx={adjustedCx} cy={adjustedCy} r={4} fill={colors[index]} stroke={colors[index]} />
        <text x={adjustedTextCx} y={adjustedCy - 15} fill={colors[index]} textAnchor="middle">
          {Number(value[1])} {/* Використовуємо value без ведучих нулів */}
        </text>
      </>
    );
  };

  return (
    <div style={{ width: "calc(100% + 32px)", height: "100%", transform: "translateX(-16px)" }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
              {data.map((entry, index) => (
                <stop
                  key={`stop-${index}`}
                  offset={`${(index / (data.length - 1)) * 100}%`}
                  stopColor={colors[index]}
                  stopOpacity={1}
                />
              ))}
              <stop offset="100%" stopColor={colors[colors.length - 1]} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke={`url(#${gradientId})`} // Градієнт для лінії
            fill="#000" // Чорний колір для області
            dot={CustomDot} // Використовуємо CustomDot для відображення точок і тексту
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export { CustomizedLineChart };
