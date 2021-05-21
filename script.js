let saldoUsuario, valorDaCompra;

function compra (saldoUsuario , valorDaCompra ) {
    return saldoUsuario - valorDaCompra
}

let a = compra(prompt('Digite o seu saldo aqui'),prompt('Digite o valor da compra aqui'));

if (saldoUsuario > valorDaCompra) {
    alert (`A sua compra foi realizada, o seu saldo atual é ${a} reais`);
}

else if (a < 0){
    alert ('Seu saldo não é o suficiente para comprar essse produto');
}
else {
    alert (`A sua compra foi realizada, o seu saldo atual é  ${a} reais.`);
}