const sci = (() => {
    console.log("Hello world!");
    var number = 0;

    const showEvent = (event) => {
        console.log(event);
    }

    const changeText = (text) => {
        const root = document.querySelector("#root");
        root.innerText = text;
    }

    const changeButton = () => {
        const root = document.querySelector("#root");
        root.innerHTML = `<button> I'm button </button>`;
    }

    const addValue = () => { 
        number++;
        document.querySelector("#number").innerHTML=number;
    }

    const subValue = () => { 
        number--;
        document.querySelector("#number").innerHTML=number;
    }
    
    return {
        "showEvent" : showEvent,
        "changeText" : changeText,
        "changeButton" : changeButton,
        "addValue" : addValue,
        "subValue" : subValue
    }
})();
sci;