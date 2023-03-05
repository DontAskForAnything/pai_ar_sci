
const DisplayOctal = (props) => {
  return (
    <div className="numberBox">
      <p>OCT<span>{props.value.toString(8)}</span></p>
    </div>
  );
}

export default DisplayOctal;
