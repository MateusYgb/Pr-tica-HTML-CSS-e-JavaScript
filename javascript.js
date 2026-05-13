var botao = document.getElementById("botao")
var res = document.getElementById("res")
//Valores dos produtos
var valorArroz = 5.00
var ValorFeijao = 6.00
var valorMaca = 6.00
var valorBolacha = 5.00
//Quantidade de produtos digitadas pelo usuário: 
var qArroz = document.getElementById("arroz")
var qFeijao = document.getElementById("feijao")
var qMaca = document.getElementById("maca")
var qBolacha = document.getElementById("bolacha")
botao.addEventListener("click", clicar)

function clicar(){
//Conversao das quantidade solicitadas pelo cliente
let cArroz = Number(qArroz.value)
let cFeijao = Number(qFeijao.value)
let cMaca = Number(qMaca.value)
let cBolacha = Number(qBolacha.value)
//Valor para somar os dados.
let valorTotal = (cArroz * valorArroz) + (cFeijao * ValorFeijao) + (valorMaca * cMaca) + (valorBolacha * cBolacha)  
//Verifica os valores, caso todas as quantidades estejam zerados o site não continua
if(cArroz == 0 && cFeijao == 0 && cMaca == 0 && cBolacha == 0){
    res.innerHTML = "Quantidades vazia."
} else{
    res.innerHTML = `Valor total dos produtos ${valorTotal}`  
    }
}
