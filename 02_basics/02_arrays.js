const marvel_heros = ["Thor","Ironman","Spiderman"]
const dc_heros = ["Superman","Flash","Batman"]

// marvel_heros.push(dc_heros) //It will not add both the arrays systematically so we use concat method

//Concat Method
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros)

//Spread Method
const all_new_heros = [...marvel_heros , ...dc_heros]
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]  //Array inside an array 

const  real_another_array = another_array.flat(Infinity) //Infinity is the depth , we can also give 1 , 2 .....
console.log(real_another_array);

//If we have to check if its an array
console.log(Array.isArray("Ayan")) //This will give false as its not an array its a string

//If we have to create an array
console.log(Array.from("Stardom"));

//Creating an array from elements
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));




