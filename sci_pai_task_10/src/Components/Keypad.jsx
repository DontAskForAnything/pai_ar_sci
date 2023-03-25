
const Keypad = (props) => {
  
    const handleButtonClick = (value) => {
      props.updateValue(value);
      };

    return ( 
    <div id="calculator">
      <div className="btn-container"> 
      <div className="row">
        <button className="btn" onClick={() => handleButtonClick("(")}>
          <div>{"("}</div>
        </button>
        <button className="btn" onClick={() => handleButtonClick(")")}>
          <div>{")"}</div>
        </button>
        <button className="btn" onClick={() => handleButtonClick("^")}>
          <div>^</div>
        </button>
        <button className="btn" onClick={() => handleButtonClick("/")}>
          <div>÷</div>
        </button>            
      </div>

        <div className="row">
          <button className="btn" onClick={() => handleButtonClick(7)}>
            <div>7</div>
          </button>
          <button className="btn" onClick={() => handleButtonClick(8)}>
            <div>8</div>
          </button>
          <button className="btn" onClick={() => handleButtonClick(9)}>
            <div>9</div>
          </button>
          <button className="btn" onClick={() => handleButtonClick('*')}>
              <div>×</div>
          </button>
        </div>

        <div className="row">
          <button className="btn" onClick={() => handleButtonClick(4)}>
            <div>4</div>
          </button>
          <button className="btn" onClick={() => handleButtonClick(5)}>
            <div>5</div>
          </button>
          <button className="btn" onClick={() => handleButtonClick(6)}>
            <div>6</div>
          </button>
          <button className="btn" onClick={() => handleButtonClick('+')}>
            <div>+</div>
          </button>
        </div>

        <div className="row">
          <button className="btn" onClick={() => handleButtonClick(1)}>
            <div>1</div>
          </button>
          <button className="btn"  onClick={() => handleButtonClick(2)}>
            <div>2</div>
          </button>
          <button className="btn"  onClick={() => handleButtonClick(3)}>
            <div>3</div>
          </button>
          <button className="btn" onClick={() => handleButtonClick('-')}>
              <div>-</div>
          </button>
        </div>

        <div className="row">
          <button className="btn"></button>
          <button className="btn" onClick={() => handleButtonClick(0)}>
            <div>0</div>
          </button>
          <button className="btn"></button>
          <button className="btn" id="result" onClick={() => {handleButtonClick("SUM");}}>
            <div>=</div>
          </button>
          </div>
      </div>
    </div>
);
}
  
  export default Keypad;
  