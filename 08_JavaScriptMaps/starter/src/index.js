let hanSolo = new Map([
    ["vehicle", "Millenium Falcon"],
    ["bff", "Chebacca"],
    ["sweetheart", "Leia"]
])

console.log(hanSolo.size)
console.log(`Ship name: ${hanSolo.get("vehicle")}`)
console.log(`Sweetheart: ${hanSolo.get("sweetheart")}`)
console.log(`Jedi: ${hanSolo.has("jedi")}`)

hanSolo.set("son", "Ben")
console.log(`Son: ${hanSolo.get("son")}`)

for (let [key, value] of hanSolo)
{
    console.log(`Han Solo's ${key} is ${value}`)
}

hanSolo.set("bff", "Luke")
console.log(hanSolo)

hanSolo.delete("son")
console.log(hanSolo)

hanSolo.clear()
console.log(hanSolo)