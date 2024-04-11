const DataAtual = new Date();
let dataniver = prompt ("Data do próximo niver:");
dataniver = new Date (dataniver + "T23:59:59");
let diasQuefalta = Math.floor((dataniver-dataAtual)/86400000);
document.querySelector("#dias_restantes").textContent=diasQueFaltam;
