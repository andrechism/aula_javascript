var nome = "André Aragão"
var idade = 22
var frase = "Japão é o melhor time do mundo"

console.log(frase)
console.log(frase.replace("Japão", "Brasil").toUpperCase())


var lista = ["maçã", "pêra", "laranja"]

console.log(lista[0])
console.log(lista)
lista.push("Uva")  //add 1 item no fim da array
console.log(lista)
lista.pop() //exclui o item do fim da array
console.log(lista)

lista.reverse() // reordena o array de trás pra frente
console.log(lista)

console.log(lista.toString()) //        laranja,pêra,maçã
console.log(lista[0].toString()) //     laranja
console.log(lista[0].toString()[0]) //  l

console.log(lista.join(" ~~ ")) //laranja ~~ pêra ~~ maçã



var fruta = {nome: "Maçã", cor: "Vermelha"}
console.log(fruta.nome + " " + fruta.cor)


var frutas = [{nome: "Maçã", cor: "Vermelha"}, {nome: "Uva", cor: "Roxa"}]
console.log(frutas)
console.log(frutas[0].nome + " " + frutas[0].cor + "\n" + frutas[1].nome + " " + frutas[1].cor)



//var idadeAtual = prompt("Qual a sua idade?")  //input no estilo alert


var d = new Date();
console.log(d)
console.log(d.getDay())
console.log(d.getMinutes())

//Alert("test")



var listaa = ["Alemanha", "Inglaterra", "Escócia"]

listaa.push("Polônia");

listaa.pop("Inglaterra");

console.log(listaa)



function soma(n1, n2){
    return n1 + n2
}

console.log(soma(55, 55))

var teste = "Olá, galera!"
console.log(teste)
function setReplace(frase, nome, novoNome){
    return frase.replace(nome, novoNome)
}

console.log(setReplace(teste, "galera!", "mundo!"))

function validarIdade(idade){
    return idade >= 18
}

//idade = prompt("Informe a sua idade:")
//console.log(validarIdade(idade))


function botao(){
    //alert("Valeu por clicar neste botão!!!")
    document.getElementById("agradecimento").innerHTML = "Obrigado por <strong>clicar</strong>!"
    console.log(document.getElementById("agradecimento"))
}

function redirecionar(){
    window.open("https://andrearagao.com/")  //abre em nova aba
    //window.location.href = "https://andrearagao.com/"  //abre na mesma atual
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar o mouse!!"
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada!")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}