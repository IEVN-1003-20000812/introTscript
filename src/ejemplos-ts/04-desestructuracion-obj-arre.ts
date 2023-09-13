
interface Detalles{
    cantante:string;
    year:number;
}

interface Reproductor{
    volumen:number;
    segundos:number;
    cancion:string;
    detalles:Detalles;
}

const reproductor:Reproductor={
    volumen: 90,
    segundos: 60,
    cancion: "Mañanitas",
    detalles: {
        cantante: "cepillin",
        year: 2022
    }
}
/*console.log(`El volumen actual es: ${reproductor.volumen}`);
console.log(`El volumen actual es: ${reproductor.detalles.cantante}`);
*/

const{volumen,detalles}=reproductor;
const{cantante}=detalles;
console.log(`El volumen actual es: ${volumen}`);
console.log(`El volumen actual es: ${cantante}`);

const colores:string[]=['red','blue','green','violet'];
console.log(`Color1 :${colores[0]}`)
console.log(`Color1 :${colores[1]}`)
console.log(`Color1 :${colores[2]}`)
console.log(`Color1 :${colores[3]}`)
const[a,,,b]=colores;

console.log(`Color1 : ${a}`);
console.log(`Color2: ${b}`);