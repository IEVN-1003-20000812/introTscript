

interface Alumno{
    matricula:number;
    nombre:string;
    email:string;
    edad:number;
}

const alumno:Alumno={
    nombre:'mario',
    email:'mario@gmail.com',
    edad:23,
    matricula:86543
}

let mascotas=['perro','gato','perico']
console.table(mascotas);
mascotas[1]='nuevo gato';
mascotas.push('perico verde')
console.table(mascotas);

let nuevoArre:(number|string)[]=[]
nuevoArre.push('RCR');
nuevoArre.push(757627);
