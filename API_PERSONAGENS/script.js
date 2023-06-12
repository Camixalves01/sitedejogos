const json = '{"nome": "Mario", "poderes": "Consertar tudo", "forca": "100%"}';

const ficha = JSON.parse(json);

console.log(ficha)

function myFunction(){
    document.getElementById("nome").innerHTML = `Nome: ` + ficha.nome;
    document.getElementById("poderes").innerHTML = `Poderes: ` + ficha.poderes;
    document.getElementById("forca").innerHTML = `Força: ` + ficha.forca;
}

const json2 = '{"nome2": "Peach", "poderes2": "Hipnotizar com a beleza", "forca2": "80%"}';

const ficha2 = JSON.parse(json2);

console.log(ficha2)

function myFunction2(){
    document.getElementById("nome2").innerHTML = `Nome: ` + ficha2.nome2;
    document.getElementById("poderes2").innerHTML = `Poderes: ` + ficha2.poderes2;
    document.getElementById("forca2").innerHTML = `Força: ` + ficha2.forca2;
}

const json3 = '{"nome3": "Luigi", "poderes3": "Apoio moral", "forca3": "75%"}';

const ficha3 = JSON.parse(json3);

console.log(ficha3)

function myFunction3(){
    document.getElementById("nome3").innerHTML = `Nome: ` + ficha3.nome3;
    document.getElementById("poderes3").innerHTML = `Poderes: ` + ficha3.poderes3;
    document.getElementById("forca3").innerHTML = `Força: ` + ficha3.forca3;
}