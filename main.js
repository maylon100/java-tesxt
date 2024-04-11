const DatAtual = new Date();
let dataniver = prompt ("Data do próximo niver:");
dataniver = new Date (dataNiver + "T23:59:59");
let diasQuefalta = Math.floor((dataNiver-dataAtual)/86400000);
document.querySelector("#dias_restantes").textContent=diasQueFaltam;
