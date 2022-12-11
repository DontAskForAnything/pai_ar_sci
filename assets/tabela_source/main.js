let tabela = document.getElementById("tabelka");
console.log(tabela);

// =========================================================

// let row = document.createElement("tr");
// let row_name = document.createElement("td");
// let row_surname = document.createElement("td");

// row_name.innerText = "Małgorzata";
// row_surname.innerText = "Kowalska";

// row.appendChild(row_name);
// row.appendChild(row_surname);

// tabela.appendChild(row);

// =========================================================

let data = [
    {name:"Jakub", surname:"Nowak"},
    {name:"Kacper", surname:"Kowalski"},
    {name:"Filip", surname:"Wiśniewski"},
    {name:"Szymon", surname:"Wójcik"},
    {name:"Jan", surname:"Kowalczyk"},
    {name:"Mateusz", surname:"Smith"},
    {name:"Kamil", surname:"Williams"},
    {name:"Maja", surname:"Davis"},
    {name:"Zuzanna", surname:"Miller"},
    {name:"Julia", surname:"O'Ryan"},
    {name:"Zofia", surname:"O'Connor"},
    {name:"Paulina", surname:"O'Neill"},
    {name:"Katarzyna", surname:"Brown"},
    {name:"Anna", surname:"Morton"},
    {name:"Aleksandra", surname:"White"},
];

// =========================================================

// data.forEach((item) => {
//     let row = document.createElement("tr");
//     let row_name = document.createElement("td");
//     let row_surname = document.createElement("td");

//     row_name.innerText = item["name"];
//     row_surname.innerText = item.surname;

//     row.appendChild(row_name);
//     row.appendChild(row_surname);

//     tabela.appendChild(row)
// });

// =========================================================

data.forEach((item) => {
    let row = document.createElement("tr");
    let row_name = document.createElement("td");
    let row_surname = document.createElement("td");

    row_name.innerText = item["name"];
    row_surname.innerText = item.surname;

    row.appendChild(row_name);
    row.appendChild(row_surname);

    tabela.tBodies[0].appendChild(row);
});

// =========================================================

// tabela.deleteRow(3);

// =========================================================

// let array = Array.from(tabela.tBodies[0].children);
// array.forEach((item, index) => {
//     if (index < 5) {
//         return
//     }

//     tabela.tBodies[0].removeChild(item);
// })