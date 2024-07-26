//controll flow
const month = 3

switch (month) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(`out_${month}`);
        break;
    case "u_can_use_string":
        console.log(".....");
        break;

    default:
        console.log("default");
        break;

}

const teaprice = 100
// condition ? true:false
teaprice >= 80 ? console.log("less then 80"):console.log("more then 80");

//nullish coalescing operator (??): null undefined
let vall;
//vall = 5??10
//vall= null ?? 10
//vall= undefined ?? 10
vall= null ?? 10 ?? 20
console.log(vall);


//falsy valur
//false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy value
//"0","false"," ",[],{},function(){}