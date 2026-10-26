const estudiantes = [
  { id: 1, nombre: 'Ana', edad: 20 },
  { id: 2, nombre: 'Juan', edad: 22 },
  { id: 3, nombre: 'María', edad: 21 },
];

function obtenerEstudianteId(id){
    //Crear la promesa que se retornara
    return new Promise((resolve, reject)=> {
        //Simular la espera a una consulta que tarda 2 seg
        setTimeout(()=>{
            let estudianteEncontrado = null;
            for(const estudiante of estudiantes){
                if (estudiante.id === id){
                    estudianteEncontrado = estudiante;
                    break;
                }
            }

            if (estudianteEncontrado){
                resolve(estudianteEncontrado);
            }else{
                reject(`No existe un estudiante con el ID ${id}.`);
            }
        }, 2000);
    });
}

obtenerEstudianteId(4)
    //El resultado de la primer promesa que llega a este then()
    .then((estudiante)=>{
        console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
    })

    //Captuarar el error ocurrido en la cadena
    .catch((error)=>{
        console.log("Error: ", error);
    })

    .finally(()=>{
        console.log("Proceso o consulta terminada");
    });