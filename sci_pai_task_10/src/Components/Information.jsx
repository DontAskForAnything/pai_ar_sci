import React, { useState, useEffect } from 'react';

const Information = ({ historyValue, history, calculate  }) => {    const [current, setCurrent] = useState()

    useEffect(() => {
      if(historyValue === "SUM"){
        if(!isNaN(parseInt(current))){
          history.push(current);
          setCurrent();
          calculate();
          history.splice(0,history.length)
        }
      }else{
        if(isNaN(parseInt(historyValue))){
          if(current){
            history.push(current);
            history.push(historyValue);
            setCurrent()
          }
        }else{
          setCurrent(historyValue)
        }
      }
    }, [historyValue]);

  return (
    <div id='History'>
      {history.map((el, index) =>{
          return(
            <p key={index}>{el}</p>
          )
      })}
      <p>{current}</p>
      </div>
  );
};

export default Information;