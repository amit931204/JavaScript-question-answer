// function msg(){
//     console.log('hi');
// }
// msg();

// Shadowing

// let b=100;
// {
//     var a=10;
//     let b=22;
//     const c=33;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(b);


// Shadowing 
//var is a function scope
// let a=10;
// function x() {
//     var a=33; 
// }

//closures Example
function z(){
    let b=22;
    function x(){
        a=24;
        function y(){
            c=33;
            console.log(a,b);
        }
       y();
    }
    x();
}
z();

let number=10;
    number=20;    
console.log(number);


