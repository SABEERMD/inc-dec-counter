import React, {useState} from "react";

const IncDec = () => {

  const [num, setNum] = useState(5)

  const incNum = () => {
    if (num > 0){
    setNum(num + 1)
    }else{
      setState(0)
    }
  }

  const decNum = () => {
    if (num < 0){
    setNum(num - 1)
    }else{
      setState(0)
    }
  }


  return (
    <div className = "main-div">
      <div className="center-div">
        <h1>{num}</h1>
        <div className="btn-div">
          <button onClick = {incNum}>Increament</button>
          <button onClick={DecNum}>Decreament</button>
        </div>
      </div>
    </div>
  )
}

export default IncDec;