const sci = (() => {
    // 1
    const div =  document.querySelector("div");    
    let data = [ "red", "green", "blue", "pink", "cyan"]


    const event = (type) => {
        let index = data.indexOf(div.style.backgroundColor)
        if(type == "prev"){
            if(!div.style.backgroundColor){
                current = "red";
                div.style.backgroundColor = current;
            }else if(div.style.backgroundColor === data[0]){
                return;
            }else{
                div.style.backgroundColor = data[index -1];
            }
        }

        if(type=="next"){
            if(index + 1 < data.length){
                div.style.backgroundColor = data[index + 1];
            }else{
                return;
            }
        }
    }

    //2
    const table = document.querySelector("#WlasnyAtrybut")
    const tableHeaders = ["gatunek", "waga", "dlugosc", "predkosc", "habitat", "zywotnosc", "druzyna"];
    const tableData = [
        ["Tygrys", "Lew", "Jaguar", "Puma", "Leopard", "Gepard", "Irbis", "Jerzyk", "Strus", "Orzelprzedni", "Sokolwedrowny", "Sokolnorweski", "Albatros"],
        ["300", "200", "100", "80", "70", "60", "50", "0,05", "150", "5", "0,7", "2", "4"],
        ["2,5", "2", "1,7", "1,7", "1,4", "1,4", "1,3", "0,2", "2,5", "0,9", "0,5", "0,7", "0,8"],
        ["60", "80", "90", "70", "85", "115", "65", "170", "70", "160", "110", "100", "120"],
        ["Azja", "Afryka", "Ameryka", "Ameryka", "Azja", "Afryka", "Azja", "Euroazja", "Afryka", "Polnoc", "Polnoc", "Polnoc", "Poludnie"],
        ["25", "29", "15", "13", "21", "12", "18", "20", "45", "20", "15", "20", "50"],
        ["Kot", "Kot", "Kot", "Kot", "Kot", "Kot", "Kot", "Ptak", "Ptak", "Ptak", "Ptak", "Ptak", "Ptak"],
    ];

    
    const rerender = (value) => {
        table.innerHTML = "";

        let header = document.createElement("tr");
        for(let i = 0; i <  value; i++){
            header.innerHTML += `<th> ${tableHeaders[i]} </th>`;
        }
        table.appendChild(header);
        for(let i = 0; i < tableData.length; i++){
            let element = document.createElement("tr");
            for(let j = 0; j < value; j++){
                element.innerHTML += `<td> ${tableData[j][i]} </td>`;;
            }
            table.appendChild(element);
        }
    }

    return {
        "event" : event,
        "rerender" : rerender
    }
})();