class rectangle {
    constructor(height, width) {
        console.log("New instance is driven!");
        this.height = height;
        this.width = width;
    }

    static changeHeight() {
        this.height += 2;
    }

    calArea() {
        return this.height * this.width;
    }

    calPrimeter() {
        return 2 * (this.height + this.width);
    }
}

class box extends rectangle {}

var R1 = new rectangle(2, 5);

R2 = new box(4, 6);

// R1.changeHeight();

console.log(R1.calArea());
console.log(R1.calPrimeter());

console.log(R2.calArea());
console.log(R2.calPrimeter());

var arr = [
    "Morteza",
    "Younes",
    "AmirHossein",
    "AmirAli",
    "Sajjad",
    "Nima",
    "Masoumeh",
];

arr.forEach((element) => {
    console.log(element);
});

var counter = 0;
var newarr = arr.map((element) => {
    counter++;
    return element + " " + counter;
});

var newarr2 = arr.filter((element) => {
    if (element[0] == "A") {
        return element;
    }
});

console.log(newarr);
console.log(newarr2);
