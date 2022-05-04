let darthVader = {
    allegiance: "Empire",
    weapon: "lightsabre",
    sith: true
}
console.log(darthVader)

console.log(`Allegiance: ${darthVader.allegiance}`)
console.log(`Weapon: ${darthVader.weapon}`)
console.log(`Sith: ${darthVader.sith}`)
console.log(`Jedi: ${darthVader.jedi}`)

console.log(Object.keys(darthVader).length);

darthVader.children = 2
darthVader.childNames= ["Luke", "Leia"]

console.log(darthVader)
console.log(`Darth Vader's first child is ${darthVader.childNames[0]}`)

for (let key in darthVader)
{
    console.log(`Darth Vader's ${key} is ${darthVader[key]}`)
}

darthVader.allegiance = "The light side"
darthVader.sith = false 
delete darthVader.children
console.log(darthVader)

let {allegiance, weapon, sith, childNames} = darthVader
console.log(allegiance)
console.log(weapon)
console.log(sith)
console.log(childNames)