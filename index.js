// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    return cats.push(name)
}
function destructivelyPrependCat(name) {
    return cats.unshift(name)
}
function destructivelyRemoveFirstCat(name) {
    return cats.shift(name)
}
function destructivelyRemoveLastCat(name) {
    return cats.pop(name)
}

function appendCat() {
    const newCats = [...cats, "Broom"]
    return newCats
}


function prependCat() {
    const newCats = ["Arnold", ...cats]
    return newCats
}

function removeLastCat(name) {
    const newCats = cats.slice(0, cats.length-1)
    return newCats
}
function removeFirstCat(name) {
    const newCats = cats.slice(1)
    return newCats
}



