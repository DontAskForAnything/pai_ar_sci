
const DisplayHexadecimal = (props) => {
  return (
    <div className="numberBox">
      <p>HEX<span>{props.value.toString(16)}</span></p>
    </div>
  );
}

export default DisplayHexadecimal;
