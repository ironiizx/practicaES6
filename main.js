// EJERCICIO 1

// 1) Import songs array using modules.

import songs from './songs.js';

console.log(songs); //muestra el array de songs

// 2) Use the map function to create a new array with the title of each song in uppercase letters.

import songs from './songs.js';

const tituloEnMayuscula = songs.map(song => song.toUpperCase());

console.log(tituloEnMayuscula);

// 3) Use the filter function to create a new array with all the songs released before 1975.

import songs from './songs.js';

const songsAntes1975 = songs.filter(song => {
  //Suponiendo que cada objeto canción tenga una propiedad 'releaseYear'
  return song.releaseYear < 1975;
});

console.log(songsAntes1975);

// 4) 4) Use destructuring to create a variable that stores the title of the first song in the array.

import songs from './songs.js';

// Suponiendo que cada objeto canción tenga una propiedad 'title'
const [{title: primerSongTitle}] = songs;

console.log(primerSongTitle); // Esto imprimirá el título de la primera canción del array

//  5) Use the find function to get the object representing the song "Hotel California".

import songs from './songs.js';

const hotelCalifornia = songs.find(song => song.title === "Hotel California");

console.log(hotelCalifornia);

// 6) Use the rest operator to create a function that takes any number of arguments and returns their sum. (Tip: Use reduce)

const sum = (...args) => {
    return args.reduce((acc, curr) => acc + curr, 0);
  };
  
  // Ejemplos
  console.log(sum(1, 2, 3, 4)); // Resultado: 10
  console.log(sum(5, 10, 15));   // Resultado: 30
  console.log(sum(2, 2));        // Resultado: 4


// 7) Use the map function and template literals to create a new array with strings in the format "Title - Artist (Year)" for each song.

import songs from './songs.js';

const newSongs = songs.map(song => `${song.title} - ${song.artist} (${song.year})`);

console.log(newSongs);

// 8) Use destructuring and the filter function to create a new array with the titles of all the songs by The Beatles.

import songs from './songs.js';

const tituloTheBeatles = songs
  .filter(({ artista }) => artista === "The Beatles")
  .map(({ titulo }) => titulo);

console.log(tituloTheBeatles);

// 9) Use arrow functions and the reduce function to calculate the total number of years between all the songs' release dates. (Tip: Use reduce)

import songs from './songs.js';

const totalAnios = songs.reduce((total, song) => total + song.releaseYear, 0);

console.log(totalAnios);

// 10) Create a module that exports a function to calculate the average release year of the songs in the input array. (Tip: Use reduce.)

import { calculateAverageReleaseYear } from './averageReleaseYear.js';

const PromedioAnio = calculateAverageReleaseYear(songs);
console.log(PromedioAnio);

// 11) Use the find function to get the object representing the song with the longest title.

import songs from './songs.js';

const cancionConTituloMasLargo = songs.reduce((anteriorSong, actualSong) => {
  return anteriorSong.titulo.length > currentSong.titulo.length ? anteriorSong : actualSong;
});

console.log(cancionConTituloMasLargo);


// 12) Use destructuring and template literals to log the title, artist and year of the first element of the array.

import songs from './songs.js';

const [primerSong] = songs;
const { titulo, artista, anio } = primerSong;

console.log(`Titulo: ${titulo}, Artista: ${artista}, Anio: ${anio}`);

// 13. Use the rest operator to create a new array without the first element.

import songs from './songs.js';

const [, ...otrasSongs] = songs;

console.log(otrasSongs);

// 14) Import the filter() function from a utils.js module and use it to create a new array with all the songs that have "Love" in the title.

import { filter } from './utils.js';
import songs from './songs.js';

const loveSongs = filter(songs, song => song.titulo.includes('Love'));

console.log(loveSongs);

// 15) Use the every() method to check if all the songs have titles that are 5 or more characters long.

import songs from './songs.js';

const todosTitulosLargoSuficiente = songs.every(song => song.titulo.length >= 5);

console.log(todosTitulosLargoSuficiente);

// 16) Use the some() method to check if there are any songs from the 80s.

import songs from './songs.js';

const tieneCancionesde80s = songs.some(song => {
  return song.anio >= 1980 && song.anio <= 1989;
});

console.log(tieneCancionesde80s);

// 17) Use a template literal to create a string that says "The Beatles released Let It Be in 1970."

const artist = "The Beatles";
const title = "Let It Be";
const year = 1970;

const sentence = `${artist} released ${title} in ${year}.`;

console.log(sentence);

// 18) Use the map() method to create a new array with just the artist names.

import songs from './songs.js';

const nombreArtistas = songs.map(song => song.artista);

console.log(nombreArtistas);

// 19) Create a function called randomMovie that returns one movie from the songs array randomly. Log the call of this function 3 times.

import songs from './songs.js';

const randomMovie = () => {
  const randomIndex = Math.floor(Math.random() * songs.length);
  return songs[randomIndex];
};

// Registra la llamada de la función randomMovie 3 veces

for (let i = 0; i < 3; i++) {
  console.log(randomMovie());
}

// 20) Write your own function using at least 3 concepts.

const calculateBMI = (peso, altura) => {
    const bmi = peso / (altura * altura);
  
    let categoria;
    if (bmi < 18.5) {
        categoria = "Bajo peso";
    } else if (bmi >= 18.5 && bmi < 25) {
        categoria = "Peso normal";
    } else if (bmi >= 25 && bmi < 30) {
        categoria = "Sobre peso";
    } else {
        categoria = "Obeso";
    }
  
    return {
      bmi: bmi.toFixed(2),
      categoria: categoria
    };
  };
  
  // Example usage:
  const peso = 70; // in kilograms
  const altura = 1.75; // in meters
  const resultado = calculateBMI(peso, altura);
  console.log(`BMI: ${resultado.bmi}, Category: ${resultado.categoria}`);




