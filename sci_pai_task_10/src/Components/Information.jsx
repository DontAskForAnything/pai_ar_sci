import React, { useState, useEffect } from 'react';

const Information = ({ historyValue  }) => {
    const [valuesArray, setValuesArray] = useState([]);
    const [current, setCurrent] = useState()

    useEffect(() => {
      if(isNaN(parseInt(historyValue))){
        if(current){
          setValuesArray([...valuesArray, current,historyValue]);
          setCurrent()
        }
      }else{
        setCurrent(historyValue)
      }
    }, [historyValue]);

  return (
    <div id='History'>
      {valuesArray.map((el, index) =>{
          return(
            <p key={index}>{el}</p>
          )
      })}
      <p>{current}</p>
      </div>
  );
};

export default Information;