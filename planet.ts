class Planet {
    name : string;
    radius : number;
    hasRing : boolean;
    color: string
    
    constructor(name:string, radius:number, hasRing:boolean, color:string){
        this.name = name;
        this.radius = radius;
        this.hasRing = hasRing;
        this.color = color;
    }
    printPlanet(){
        console.log("Planet: " + this.name + ", Radius: " + this.radius + ", Has Ring: " + this.hasRing + ", Color: " + this.color );
    }
}

let Mercury = new Planet("Mercury", 10, false, "yellow");
let Venus = new Planet("Venus", 20, false, "gray");
let Saturn = new Planet("Saturn", 60, true, "rainbow");

Mercury.printPlanet();
Venus.printPlanet();
Saturn.printPlanet();

