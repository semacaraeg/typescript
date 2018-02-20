var Planet = /** @class */ (function () {
    function Planet(name, radius, hasRing, color) {
        this.name = name;
        this.radius = radius;
        this.hasRing = hasRing;
        this.color = color;
    }
    Planet.prototype.printPlanet = function () {
        //console.log("Planet: " + this.name + ", Radius: " + this.radius + ", Has Ring: " + this.hasRing + ", Color: " + this.color );
        console.log(this);
    };
    return Planet;
}());
var Mercury = new Planet("Mercury", 10, false, "yellow");
var Venus = new Planet("Venus", 20, false, "gray");
var Saturn = new Planet("Saturn", 60, true, "rainbow");
Mercury.printPlanet();
Venus.printPlanet();
Saturn.printPlanet();
