//Rest concept is totally opposite to Spread one,
//ie-> Allows a function to take an indefinite number of arguments and bundle them in an Array.
function sum(...args){
    for(i = 0; i<args.length; i++){
        console.log("You gave us..", args[i]);
    }
};

function min(a,b){ //just a random test
    console.log(arguments); //remember arguments here is not an array, it's a collection here.
    console.log(arguments.length);
}

//or to calculate sum using rest here
function add(...args){
    return args.reduce ((sum,el) => sum + el);
}

function addNew(msg, ...args){ //always pass msg first before argument otherwise it will cause error.
    console.log(msg);
    return args.reduce ((sum,el) => sum + el);
}

//checking for min value
function minValue(...args){
    return args.reduce((min, el)=>{
        if(min > el){
            return el;
        }
        else{
            return min;
        }
    });
};