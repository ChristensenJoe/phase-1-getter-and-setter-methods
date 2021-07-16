// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius*2;
    }

    set diameter(dm) {
        this.radius = dm/2;
    }

    get circumference() {
        return Math.PI * this.diameter;
    }

    set circumference(cm) {
        this.radius = (cm/Math.PI)/2;
    }

    get area() {
        return Math.PI * (this.radius*this.radius);
    }

    set area(ar) {
        this.radius = Math.sqrt((ar/Math.PI));
    }
}