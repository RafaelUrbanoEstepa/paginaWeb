function cargaContextoCanvas(id) {
    // Recibimos elemento canvas
    let canvas = document.getElementById(id);
    if (canvas && canvas.getContext) {
        //Acceder al contexto en 2D
        let contexto = canvas.getContext("2d");

        if (contexto) {
            return contexto;
        };
    };
    return false;
}

let contexto;

window.onload = function() {
    contexto = cargaContextoCanvas("canvas");
    if (contexto) {

        setInterval(function() {
            pintaHierba()
        }, 100);

        function pintaHierba() {
            let xh = random(-100, 500);
            contexto.beginPath();
            contexto.moveTo(xh + 0, 400);
            contexto.lineTo(xh + 5, 300);
            contexto.lineTo(xh + 10, 400);
            contexto.closePath();
            contexto.fillStyle = "#287233";
            contexto.fill();
        }


    }
}

// la función nos devolverá un número aleatorio que usaremos para pintar la altura de la mariposa
function random(inferior, superior) {
    let chance = superior - inferior;
    let aleatorio = Math.random() * chance;
    return parseInt(aleatorio) + inferior;
}