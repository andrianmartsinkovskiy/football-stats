import c from './style.module.css'
import {IoAnalyticsSharp} from "react-icons/io5";
import {Bars} from "react-loader-spinner";

const ButtonStart = ({onClick, isLoading, count}) => {

  return (
    <button className={c.wrap} onClick={onClick}>
      <div className={c.dec}/>
      <div className={c.container}>
        {
          isLoading ? (
            <Bars
              height="40"
              width="40"
              color="grey"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : (
            <>
              <IoAnalyticsSharp/>
              <span>Analyze</span>
              {count && <span>({count})</span>}
            </>
          )
        }

      </div>
    </button>
  )
}

export {
  ButtonStart
}