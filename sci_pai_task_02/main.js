const sci = (() => {
    var points = 0;
    var nextCardPoints = null;
    var nextCardSimbol = null;

    const availableSimbols = [
        "clubs",
        "diamonds",
        "hearts",
        "spades"
    ]

    const availableValues = {
        2 : 2,
        3 : 3,
        4 : 4,
        5 : 5,
        6 : 6,
        7 : 7,
        8 : 8,
        9 : 9,
        10 : 10,
        "ace" : 11,   
        "jack" : 2,
        "king" : 4,
        "queen" : 3
    }

    const generateCardName = () => {
        nextCardPoints = Object.keys(availableValues)[Math.floor(Math.random() * Object.keys(availableValues).length)];
        nextCardSimbol = availableSimbols[Math.floor(Math.random()*availableSimbols.length)];
    }

    const create = () => {

        if(points + availableValues[nextCardPoints] > 21){
            document.querySelector("[what='add']").disabled = true;
        }

            const deck = document.querySelector("cards");
            var a = document.createElement("img");
                a.src=`cards/${nextCardSimbol + "_" + nextCardPoints + ".png"}`;

        deck.appendChild(a);

        addPoints(availableValues[nextCardPoints])

        generateCardName();
        if(points  == 21){
            document.querySelector("[what='add']").disabled = true;
            alert("Oczko!!!!");
        }
    }

    const showPreview = () => {
        const cardImg = document.createElement("img");
        cardImg.src=`cards/${nextCardSimbol + "_" + nextCardPoints + ".png"}`

        document.querySelector("nextCard").style.opacity= 0.5;
        document.querySelector("nextCard").appendChild(cardImg);
    }

    const hidePreview = () => {
        document.querySelector("nextCard").innerHTML='';
    }

    const clear = () => {
        document.querySelector("cards").innerHTML = '';
            
        if(points != 0){
            const table = document.querySelector("table");
            let a = document.createElement("tr");
            a.innerHTML =
                    `<td>${table.children.length}</td>
                    <td> ${Date()}</td>
                    <td> ${points}</td>` 
    
            table.appendChild(a)
            document.querySelector("[what='add']").disabled = false;
            deletePoints();
        }

    }

    const addPoints = (amount) => {
        points += amount;
        document.querySelector("span").innerHTML = points;
    }

    const deletePoints = () => {
        points = 0;
        document.querySelector("span").innerHTML = points;
    }

    return {
        "create" : create,
        "clear" : clear,
        "generateCardName" : generateCardName,
        "showPreview" : showPreview,
        "hidePreview" : hidePreview
    }

})();
sci.generateCardName();