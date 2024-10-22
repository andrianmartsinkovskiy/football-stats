import { createContext, useContext, useState } from 'react';
import {ConfigModal} from "../components/modals/confirm-modal/confirm-modal.jsx";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

// Провайдер для модального контексту
const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(null);

  // Функція для показу модального вікна
  const showConfirmModal = (data) => {
    return new Promise((resolve) => {
      // Налаштування для підтвердження
      const handleConfirm = (configData) => {
        setModal(null);
        resolve(configData); // Повертаємо змінені дані
      };

      // Налаштування для скасування
      const handleCancel = () => {
        setModal(null);
        resolve(null); // Відміна (повертаємо null)
      };

      setModal({
        data, // Передаємо масив у модальне вікно
        onConfirm: handleConfirm,
        onCancel: handleCancel,
      });
    });
  };

  return (
    <ModalContext.Provider value={{ showConfirmModal }}>
      {children}
      {modal && <ConfigModal {...modal} />}
    </ModalContext.Provider>
  );
};

export {
  ModalProvider
};
