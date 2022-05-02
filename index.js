var codigo = document.querySelector("#digCod").value;
var selecao = document.getElementById("selecao");
var itemCC = document.getElementById("CCesar1");
var divPai = document.querySelector('#pai');
var inCod = document.querySelector('#inCode');
var deCod = document.querySelector('#deCode')
var btnRodar = document.querySelector('#btnRoda')
var radioBtn = document.querySelector('#radio')
var resultado = document.querySelector('#resultadoCod')

//Mudar layout - Seleção Cifra de César
selecao.addEventListener('click', function () {
    if (selecao.value == '3') {
        itemCC.style.display = 'flex'
        itemCC.style.flexDirection = 'column'
        itemCC.style.justifyContent = 'center'
        itemCC.style.alignItems = 'center'
        itemCC.style.paddingTop = '0.5em'
        divPai.style.paddingBottom = '1em'
    } else {
        itemCC.style.display = 'none'
        divPai.style.paddingBottom = '10em'
    }
})

//Mudar texto do botão de rodar
inCod.addEventListener('click', function () {
    btnRodar.innerText = 'Codificar mensagem'
})

deCod.addEventListener('click', function () {
    btnRodar.innerText = 'Decodificar mensagem'
})

//Rodar Base64
btnRodar.addEventListener('click', function () {
    if (selecao.value == '2' && inCod.click) {
       // var resposta = btoa(codigo)
        resultado.value = btoa(codigo)
    } else if (selecao.value == '2' && deCod.click) {
    //  var resposta = atob(codigo)
        resultado.value = atob(codigo)
    }else{
        alert('Realize a seleção corretamente')
    }
}
)