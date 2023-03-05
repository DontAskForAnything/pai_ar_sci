
const DisplayBinary = (props) => {
  return (
    <div className="numberBox">
    <p>BIN<span>{props.value.toString(2)}</span></p>
    </div>
  );
}

export default DisplayBinary;
