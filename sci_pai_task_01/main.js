const sci = (() => {
    const select = document.querySelector("#select");
    const text = document.querySelector("#text");
    const slider = document.querySelector("#slider");
    const picker = document.querySelector("#colorPicker");

    const json = {"items":{"item":[{"id":"0001","type":"donut","name":"Cake","ppu":0.55,"batters":{"batter":[{"id":"1001","type":"Regular"},{"id":"1002","type":"Chocolate"},{"id":"1003","type":"Blueberry"},{"id":"1004","type":"Devil's Food"}]},"topping":[{"id":"5001","type":"None"},{"id":"5002","type":"Glazed"},{"id":"5005","type":"Sugar"},{"id":"5007","type":"Powdered Sugar"},{"id":"5006","type":"Chocolate with Sprinkles"},{"id":"5003","type":"Chocolate"},{"id":"5004","type":"Maple"}]},{"id":"0002","type":"donut","name":"Raised","ppu":0.55,"batters":{"batter":[{"id":"1001","type":"Regular"}]},"topping":[{"id":"5001","type":"None"},{"id":"5002","type":"Glazed"},{"id":"5005","type":"Sugar"},{"id":"5003","type":"Chocolate"},{"id":"5004","type":"Maple"}]},{"id":"0003","type":"donut","name":"Old Fashioned","ppu":0.55,"batters":{"batter":[{"id":"1001","type":"Regular"},{"id":"1002","type":"Chocolate"}]},"topping":[{"id":"5001","type":"None"},{"id":"5002","type":"Glazed"},{"id":"5003","type":"Chocolate"},{"id":"5004","type":"Maple"}]},{"id":"0004","type":"bar","name":"Bar","ppu":0.75,"batters":{"batter":[{"id":"1001","type":"Regular"}]},"topping":[{"id":"5003","type":"Chocolate"},{"id":"5004","type":"Maple"}],"fillings":{"filling":[{"id":"7001","name":"None","addcost":0},{"id":"7002","name":"Custard","addcost":0.25},{"id":"7003","name":"Whipped Cream","addcost":0.25}]}},{"id":"0005","type":"twist","name":"Twist","ppu":0.65,"batters":{"batter":[{"id":"1001","type":"Regular"}]},"topping":[{"id":"5002","type":"Glazed"},{"id":"5005","type":"Sugar"}]},{"id":"0006","type":"filled","name":"Filled","ppu":0.75,"batters":{"batter":[{"id":"1001","type":"Regular"}]},"topping":[{"id":"5002","type":"Glazed"},{"id":"5007","type":"Powdered Sugar"},{"id":"5003","type":"Chocolate"},{"id":"5004","type":"Maple"}],"fillings":{"filling":[{"id":"7002","name":"Custard","addcost":0},{"id":"7003","name":"Whipped Cream","addcost":0},{"id":"7004","name":"Strawberry Jelly","addcost":0},{"id":"7005","name":"Rasberry Jelly","addcost":0}]}}]}};
    const table = document.querySelector("tbody");

    const dropDownFill = () => {
    
        const type = [ "prosty" , "pochyły" ]
    
        type.forEach((name)=>{
            let a = document.createElement("option");
                a.innerHTML = name;
            select.appendChild(a)
        })

    }

    const selectChange = () => {
        switch(select.value){
            case  "pochyły":
                text.style.fontStyle = "italic";
            break;
            case "prosty":
                text.style.fontStyle = "normal";
            break;
        }  
    }

    const sizeChange = () => {
        text.style.fontSize = slider.value + "px";
    }

    const colorChange = () => {
        text.style.color = picker.value;
    }

    const tableDisplay = () => {

        const array = json["items"]["item"];
        
        array.forEach((item) => {

            
            item["batters"]["batter"].forEach((batter) =>{

                item["topping"].forEach((topping) => {
                    let a = document.createElement("tr");

                    a.innerHTML = 
                   `<td> ${item["id"]} </td>
                    <td> ${item["name"]}</td>
                    <td> ${item["type"]}</td>
                    <td> ${batter.type}</td>
                    <td> ${topping.type}</td>`;
    
                    table.appendChild(a)
                })
                
            })
        });
    };


    return {
        "dropDownFill": dropDownFill,
        "selectChange" : selectChange,
        "sizeChange" : sizeChange,
        "colorChange" : colorChange,
        "tableDisplay" : tableDisplay
    }

})();

sci.dropDownFill()
sci.tableDisplay();