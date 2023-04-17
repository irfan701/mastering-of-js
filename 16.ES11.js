/*
    globalThis
    BigInt
    optional chaining
    Nullish Coalescing Operator
 */

globalThis.setTimeout(()=>console.log('Hello'),100)
//window===globalThis //true in browser
//global===globalThis //true in node js


//    BigInt

let largest_number=Number.MAX_SAFE_INTEGER;
largest_number+=1;
largest_number+=1;
largest_number=BigInt(largest_number)+1n;

console.log(largest_number);
//9007199254740993n
//10n===BigInt(10) //true


//    optional chaining


const language={
    name:'Javascript',
    creator:'Brendan Eich',
    library:{
        react:{
            company:"Facebook"
        }
    }
}

let company=language?.library?.react?.company
console.log(company)

let colors=['Red','Green','Blue'];
colors=null
console.log(colors?.[1]);

/*
//null and undefined ke ak korey
    Nullish Coalescing Operator
 */

let fruits;
fruits=null
console.log(fruits?? 'Apple') //Apple
console.log(fruits || 'Apple') //Apple