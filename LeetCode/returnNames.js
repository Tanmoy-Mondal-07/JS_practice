let students = [
    { name: "piyush", roll: 10, marks: 80 },
    { name: "kusal", roll: 16, marks: 80 },
    { name: "ayush", roll: 45, marks: 80 },
    { name: "nilaj", roll: 87, marks: 80 }
]

let names = students.map((e) => e.name.toUpperCase())

console.log(names);