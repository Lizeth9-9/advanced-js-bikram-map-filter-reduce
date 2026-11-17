//RESUELVE LOS EJERCICIOS AQUI

//1.
const numbers = [4, 5, 6, 7, 8, 9, 10];

const elevados = () => {
    return numbers.map((element) => element ** element);
};
console.log(elevados);

//2.
const foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];

const pais = ["Italia", "Japón", "Valencia"];

const result2 = foodList.map((comida, i) => {
    if (pais[i]) {
        return `Como soy de ${pais[i]}, amo comer ${comida}`;
    } else {
        if (comida === "Entrecot")
            return `Aunque no como carne, el Entrecot es sabroso`;
    }
});

console.log(result2);

//3.
const staff = [
    {
        name: "Pepe",
        role: "The Boss",
        hobbies: ["leer", "ver pelis"],
    },
    {
        name: "Ana",
        role: "becaria",
        hobbies: ["nadar", "bailar"],
    },
    {
        name: "Luis",
        role: "programador",
        hobbies: ["dormir", "comprar"],
    },
    {
        name: "Carlos",
        role: "secretario",
        hobbies: ["futbol", "queso"],
    },
];

const result3 = staff.map(
    (frase) =>
        `${frase.name} es ${frase.role} y le gusta ${frase.hobbies[0]} y ${frase.hobbies[1]}`,
);
console.log(result3);

//4

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result4 = numbers2.filter((num) => num % 2 !== 0);

console.log(result4);

//5
const foodList2 = [
    {
        name: "Tempeh",
        isVeggie: true,
    },
    {
        name: "Cheesbacon burguer",
        isVeggie: false,
    },
    {
        name: "Tofu burguer",
        isVeggie: true,
    },
    {
        name: "Entrecot",
        isVeggie: false,
    },
];

const result5 = foodList2
    .filter((comer) => comer.isVeggie)
    .map((comer) => {
        if (comer.name === "Tempeh") {
            return `Que rico ${comer.name} me voy a comer!`;
        } else {
            return `Que rica ${comer.name} me voy a comer!`;
        }
    });

console.log(result5);

//6

const inventory = [
    {
        name: "Mobile phone",
        price: 199,
    },
    {
        name: "TV Samsung",
        price: 459,
    },
    {
        name: "Viaje a Cancún",
        price: 600,
    },
    {
        name: "Mascarilla",
        price: 1,
    },
];

const result6 = inventory
    .filter((item) => item.price > 300)
    .map((item) => item.name);

console.log(result6);

//7

const numeros3 = [39, 2, 4, 25, 62];

const result7 = numeros3.reduce((numero, indice) => {
    return (numero *= indice);
});

console.log(result7);

//8
const sentenceElements = [
    "Me",
    "llamo",
    ,
    /* Lizeth */ "y",
    "quiero",
    "sentir",
    "la",
    "fuerza",
    "con",
    "javascript",
];

const result8 = sentenceElements.reduce((acc, palabraActual, posicion) => {
    if (posicion === 3) {
        return acc + " undefined " + palabraActual;
    }
    return acc + " " + palabraActual;
});

console.log(result8);

//9
const books = [
    {
        name: " JS for dummies",
        author: "Emily A. Vander Veer",
        price: 20,
        category: "code",
    },
    {
        name: "Don Quijote de la Mancha",
        author: "Cervantes",
        price: 14,
        category: "novel",
    },
    {
        name: "Juego de tronos",
        author: "George R. Martin",
        price: 32,
        category: "Fantasy",
    },
    {
        name: "javascript the good parts",
        author: "Douglas Crockford",
        price: 40,
        category: "code",
    },
];

const result9 = books.reduce((precio, book) => {
    if (book.category === "code") {
        precio += book.price;
    }
    return precio;
}, 0);

console.log(result9);
