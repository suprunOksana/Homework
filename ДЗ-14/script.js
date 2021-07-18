function Burger(size) {

    this.toppings = [];
    this.properties = {
        small: {
            price: 50,
            callories: 100
        },
        medium: {
            price: 75,
            callories: 150
        },
        big: {
            price: 100,
            callories: 200
        }
    };
    const sizeProp = this.properties[size];
    this.price = sizeProp ? sizeProp.price : 0;
    this.callories = sizeProp ? sizeProp.callories : 0;
}

const TOPPINGS = {
    mayo: {
        price: 10,
        callories: 50
    },
    potato: {
        price: 20,
        callories: 100
    },
    cheese: {
        price: 15,
        callories: 70
    }
};


Burger.prototype.getPrice = function () {
    let toppingsPrice = 0;
    this.toppings.forEach(e => {
        toppingsPrice += e.price;
    });
    return this.price + toppingsPrice;
};


Burger.prototype.getCallories = function () {
    let toppingsCall = 0;
    this.toppings.forEach(e => {
        toppingsCall += e.callories;
    });
    return this.callories + toppingsCall;
};


Burger.prototype.addTopping = function (topping) {
    return this.toppings.push(topping);
}

function Hamburger(size) {
    this.properties = {
        small: {
            price: 60,
            callories: 120
        },
        medium: {
            price: 90,
            callories: 160
        },
        big: {
            price: 120,
            callories: 250
        }
    };

    const sizeProp = this.properties[size];
    this.price = sizeProp ? sizeProp.price : 0;
    this.callories = sizeProp ? sizeProp.callories : 0;
}

Hamburger.prototype = new Burger();

function CheeseBurger(size) {
    this.properties = {
        small: {
            price: 70,
            callories: 140
        },
        medium: {
            price: 100,
            callories: 200
        },
        big: {
            price: 150,
            callories: 300
        }
    };

    const sizeProp = this.properties[size];
    this.price = sizeProp ? sizeProp.price : 0;
    this.callories = sizeProp ? sizeProp.callories : 0;
}

CheeseBurger.prototype = new Burger();


const hamburger = new Hamburger('big');
hamburger.addTopping(TOPPINGS.mayo);

console.log('Price with sauce: ' + hamburger.getPrice());
console.log('Callories with sauce: ' + hamburger.getCallories());