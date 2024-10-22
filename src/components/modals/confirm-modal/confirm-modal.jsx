import { useState } from "react";
import c from './style.module.css';
import {ButtonStart} from "../../buttons/button-start/index.jsx";

const ConfigModal = ({ data, onConfirm }) => {
  const [configData, setConfigData] = useState(data);

  const handleCheckboxChange = (playerIndex, itemIndex) => {
    const player = configData[playerIndex];
    const selectedCount = player.data.filter(item => item.selected).length;
    if (selectedCount === 1 && player.data[itemIndex].selected) {
      return;
    }

    const updatedData = configData.map((player, pIndex) => {
      if (pIndex === playerIndex) {
        const updatedPlayerData = player.data.map((item, iIndex) => {
          if (iIndex === itemIndex) {
            return { ...item, selected: !item.selected };
          }
          return item;
        });
        return { ...player, data: updatedPlayerData };
      }
      return player;
    });

    setConfigData(updatedData);
  };

  return (
    <div className={c.wrap}>
      <div className={c.container}>
        <div className={c.form}>
          {configData.map((player, playerIndex) => (
            <div key={playerIndex}>
              <h2 className={c.playerTitle}>{player.player}</h2>
              {player.data.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <label className={c.item}>
                    <input
                      type="checkbox"
                      checked={item.selected}
                      onChange={() => handleCheckboxChange(playerIndex, itemIndex)}
                    />

                    {item.name}
                  </label>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className={c.btn}>
          <ButtonStart onClick={() => onConfirm(configData)} />
        </div>
      </div>
    </div>
  );
};

export { ConfigModal };
