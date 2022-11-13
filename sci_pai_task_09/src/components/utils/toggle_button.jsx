function CButton(props) {

    return (
        <button style={{backgroundColor: props.active ? "grey" : "#fff"}} type="button" className="showNamesButton" onClick={props.function}>{props.text}</button>
    )
}

export default CButton;
