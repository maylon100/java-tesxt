const DataAtual = new Date();
let DataObjetivo = prompt("Data Escolhida:");
DataObjetivo = new Date(DataObjetivo + "T23:59:59");
let diasQueFaltam = Math.floor((DataObjetivo-DataAtual)/8640000);
document.querySelector("#dias_restantes").textContent=diasQueFaltam;