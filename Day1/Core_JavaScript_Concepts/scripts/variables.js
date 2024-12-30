
// Var
console.log(a) // Declaration is hoisted 
var a;
a = 5;
console.log(a)

//Scope Global



//Let
let Let; // scoped as global, can be accessed inside all the blockes;
Let = 'Let';
console.log(Let)

//Block scope

// console.log(blockScope) //  refresence error
{
    console.log(Let)
    let blockScope;
    blockScope = 'block scope';
    console.log(blockScope)
}
// console.log(blockScope) //  refresence error


//const 
const CONST = 'CONST';
console.log(CONST)

{
    const blockConst = 'blockConst';
    console.log(blockConst)
}
// console.log(blockConst)