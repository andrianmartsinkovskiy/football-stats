import {BattlePage} from "./pages/battle/index.jsx";
import {MobileBanner} from "./components/sections/mobile-banner/index.jsx";
import {observer} from "mobx-react-lite";
import {store} from "./store/store.js";
import {ModalProvider} from "./context/confirm-modal.context.jsx";
import {useEffect} from "react";

const App = observer(() => {
  const appClass = store.bar.isBarActive ? "app app-small" : "app"

  useEffect(() => {
    store.bar.initTokens()
  }, []);

  return (
    <ModalProvider>
      <div className={appClass}>
        <MobileBanner/>
        <BattlePage/>
      </div>
    </ModalProvider>

  )
})

export default App
