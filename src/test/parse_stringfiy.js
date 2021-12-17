const obj = {
    username: "aaa",
    age: "ccc"
}

console.log(obj)

let stringify = JSON.stringify(obj);
console.log(stringify)

let parse = JSON.parse(stringify);
console.log(parse)

console.log(eval('(' + stringify + ')'))