import c from './style.module.css'
import {IoAnalyticsSharp} from "react-icons/io5";

const EmptySection = () => {

  return (
    <div className={c.wrap}>
      <IoAnalyticsSharp />
    </div>
  )
}

export {
  EmptySection
}