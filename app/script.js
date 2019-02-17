function calcNotas(){
    let val = eval(document.getElementById('money').value);
    let resto;
    let result = "[";
    
    document.getElementById('mudar1').innerHTML = val;

    if(val <= 0){
        document.getElementById('mudar2').innerHTML = "Erro de valor inválido";
    } else if(val == null){
        document.getElementById('mudar1').innerHTML = "NULL";
        document.getElementById('mudar2').innerHTML = "Erro de valor nulo";
    } else if(val % 10 != 0){
        document.getElementById('mudar2').innerHTML = "Erro de notas indisponíveis";
    } else{
        resto = val;
        while (resto >= 100) {
            resto = resto - 100;
            result = result.concat("100.00", ",", " ");
        }
        while (resto >= 50) {
            resto = resto - 50;
            result = result.concat("50.00", ",", " ");
        }
        while (resto >= 20) {
            resto = resto - 20;
            result = result.concat("20.00", ",", " ");
        }
        while (resto >= 10) {
            resto = resto - 10;
            result = result.concat("10.00", ",", " ");
        }
        result = result.substr(0,(result.length - 3));
        result = result.concat("]");

        document.getElementById('mudar2').innerHTML = result;
        document.getElementById('money').value = "";
    }
}