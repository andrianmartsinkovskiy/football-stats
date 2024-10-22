import c from './style.module.css'
import {FaLaptopCode} from "react-icons/fa";
import {FaTabletButton} from "react-icons/fa6";

const MobileBanner = () => {

  return (
    <div className={c.wrap}>
      <p className={c.text}>Please use a tablet or computer for this application</p>
      <div className={c.icons}>
        <FaLaptopCode />
        <FaTabletButton />
      </div>
    </div>
  )
}

export {
  MobileBanner
}