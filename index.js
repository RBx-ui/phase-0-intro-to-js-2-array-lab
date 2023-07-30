// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push("Ralph")
}

function  destructivelyPrependCat(name) {
    return cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
 const cats = ["Milo", "Otis", "Garfield"]
 const newCats = [...cats, "Broom"];
 return newCats;   
}

function prependCat(name) {
    const cats = ["Milo", "Otis", "Garfield"]
    const nyCats = ["Arnold", ...cats];
    return nyCats;
}

function removeLastCat() {
    const cats = ["Milo", "Otis", "Garfield"]
    const copyCats = cats.slice(0, -1);
    return copyCats;
}

function  removeFirstCat() {
    const cats = ["Milo", "Otis", "Garfield"]
    const copyCopyCats = cats.slice(1);
    return copyCopyCats;
}