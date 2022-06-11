// Write your solution in this file!
function() {
    var customerName = bob;
    console.log(window.customerName); // bob
}

const myVar = customerName;

function myFunc() {
    const customerName = bob;

    return myVar;
}

myFunc();
// => BOB


function bestCustomer() {
    (console.log(window.bestCustomer); // undefined

        bestCustomer();

        console.log(window.bestCustomer); // 'not bob'

    };

    const overwriteBestCustomer = "bob";

    function bestCustomer() {
        const bestCustomer = "bob";

        console.log(window.bestCustomer); // bob

    });

const LeastFavoriteCustomer = "bib";

function changeLeastFavoriteCustomer() {
    console.log(window.changeLeastFavoriteCustomer); // bib

}