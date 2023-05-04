/*

- titulo
- director
- año

Blade Runner / Ridley Scoot / 1982
Matrix / Lana Wachowski / 1989

*/

interface Pelicula {
    titulo: string;
    director: string;
    año: number;
};

const peliculaA: Pelicula = {
    titulo: "Blade Runner",
    director: "Ridley Scott",
    año: 1982,
};

const peliculaB: Pelicula = {
    titulo: "Matrix",
    director: "Lana Wachowski",
    año: 1999,
};

console.log (peliculaA);
console.log (peliculaB);

