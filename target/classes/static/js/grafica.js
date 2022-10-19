var vectorCandidatos = new Array(4);

vectorCandidatos[0] = 0;
vectorCandidatos[1] = 0;
vectorCandidatos[2] = 0;
vectorCandidatos[3] = 0;

function voto(candidato){
    vectorCandidatos[candidato] = vectorCandidatos[candidato] + 1;
    alert("Gracias por su voto!");
    
}

function estadistica(){
    let total = vectorCandidatos[0] + vectorCandidatos[1] + vectorCandidatos[2] + vectorCandidatos[3] ;
    let porCan1 = (vectorCandidatos[0]/total)*100;
    let porCan2 = (vectorCandidatos[1]/total)*100;
    let porCan3 = (vectorCandidatos[2]/total)*100;
    let porCan4 = (vectorCandidatos[3]/total)*100;

    // Obtener una referencia al elemento canvas del DOM
    const $grafica = document.querySelector("#grafica");
    // Las etiquetas son las que van en el eje X. 
    const etiquetas = "Numero de vostos por candidatos";
    // Podemos tener varios conjuntos de datos. Comencemos con uno
    const datosVotos = {
        label: etiquetas,
        data: [vectorCandidatos[0],vectorCandidatos[1], vectorCandidatos[2], vectorCandidatos[3]], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
        backgroundColor: ['rgba(54, 162, 235, 0.4)','rgba(255, 0, 0, 0.4)','rgba(0, 255, 0, 0.4)','rgba(0, 0, 255, 0.4)'], // Color de fondo
        borderColor: ['rgba(54, 162, 235, 1)','rgba(54, 162, 235, 1)','rgba(54, 162, 235, 1)','rgba(54, 162, 235, 1)'], // Color del borde
        borderWidth: 1,// Ancho del borde
    };
    new Chart($grafica, {
        type: 'bar',// Tipo de gráfica
        data: {
            labels: ["Gustavo Petro", "Rodolfo Hernandez", "Federico Gutierrez", "Sergio Fajardo"],
            datasets: [
                datosVotos,
                // Aquí más datos...
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
            },
        }
    });
    

const $estadistica = document.querySelector("#estadistica");
// Las etiquetas son las que van en el eje X. 
const etiquetas1 = "Numero de vostos por candidatos";
// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosVotos1 = {
    label: etiquetas1,
    data: [porCan1,porCan2, porCan3, porCan4], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: ['rgba(54, 162, 235, 0.4)','rgba(255, 0, 0, 0.4)','rgba(0, 255, 0, 0.4)','rgba(0, 0, 255, 0.4)'], // Color de fondo
    borderColor: ['rgba(54, 162, 235, 1)','rgba(54, 162, 235, 1)','rgba(54, 162, 235, 1)','rgba(54, 162, 235, 1)'], // Color del borde
    borderWidth: 1,// Ancho del borde
};
new Chart($estadistica, {
    type: 'pie',// Tipo de gráfica
    data: {
        labels: ["Gustavo Petro", "Rodolfo Hernandez", "Federico Gutierrez", "Sergio Fajardo"],
        datasets: [
            datosVotos1,
            // Aquí más datos...
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});
 



if(vectorCandidatos[0] > vectorCandidatos[1] && vectorCandidatos[0] > vectorCandidatos[2] && vectorCandidatos[0] > vectorCandidatos[3])
{
    let ganador = document.getElementById("ganador");
    let papel = ganador.getContext("2d");
   
    let Petro = new Image();
    Petro.src = "/img/Petro/Gustavo_Petro_T.jpg";
    Petro.addEventListener("load",dibujar);

    function dibujar()
{
    document.getElementById("presidente").style.display="flex";
    papel.drawImage(Petro,0,0);
}

}else if(vectorCandidatos[1] > vectorCandidatos[0] && vectorCandidatos[1] > vectorCandidatos[2] && vectorCandidatos[1] > vectorCandidatos[3])
{
    let ganador = document.getElementById("ganador");
    let papel = ganador.getContext("2d");
   
    let Rodolfo = new Image();
    Rodolfo.src = "/img/Rodolfo/Rodolfo_hernandez_T.jpg";
    Rodolfo.addEventListener("load",dibujarR);

    function dibujarR()
{
    document.getElementById("presidente").style.display="flex";
    papel.drawImage(Rodolfo,0,0);
}

}else if(vectorCandidatos[2] > vectorCandidatos[0] && vectorCandidatos[2] > vectorCandidatos[1] && vectorCandidatos[2] > vectorCandidatos[3])
{
    let ganador = document.getElementById("ganador");
    let papel = ganador.getContext("2d");
   
    let Federico = new Image();
    Federico.src = "/img/Federico/Federico_Gutiérrez_T.jpg";
    Federico.addEventListener("load",dibujarF);

    function dibujarF()
{
    document.getElementById("presidente").style.display="flex";
    papel.drawImage(Federico,0,0);
}

}else if(vectorCandidatos[3] > vectorCandidatos[0] && vectorCandidatos[3] > vectorCandidatos[1] && vectorCandidatos[3] > vectorCandidatos[2])
{
    let ganador = document.getElementById("ganador");
    let papel = ganador.getContext("2d");
   
    let Sergio = new Image();
    Sergio.src = "/img/Fajardo/Sergio_fajardo_T.jpg";
    Sergio.addEventListener("load",dibujarS);

    function dibujarS()
{
    document.getElementById("presidente").style.display="flex";
    papel.drawImage(Sergio,0,0);
}

}else{
   alert("Deben seguir votando hasta que tengamos un ganador"); 
}
}