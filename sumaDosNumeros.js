
function Sumar(txtN1,txtN2) {
    var n1 = document.getElementById('txtN1').value;
    var n2 = document.getElementById('txtN2').value;
    /* 
    parseInt:
        Convierte un argumento de tipo cadena 
        y devuelve un entero de la base especificada. 
    */
    var suma = parseInt(n1) + parseInt(n2);
    alert("La suma es: "+suma)
}
