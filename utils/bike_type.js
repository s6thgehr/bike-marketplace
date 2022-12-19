export default class BikeType {
    static mountain = new BikeType("Mountain bike");
    static road = new BikeType("Road bike");
    static hybrid = new BikeType("Hybrid bike");
    static cruiser = new BikeType("Cruiser bike");
    static touring = new BikeType("Touring bike");
    static cyclocross = new BikeType("Cyclocross bike");
    static fixie = new BikeType("Fixie bike");
    static single_speed = new BikeType("Single speed bike");
    static folding = new BikeType("Folding bike");
    static electric = new BikeType("Electric bike");

    constructor(type) {
        this.type = type;
    }

    toString() {
        return this.type;
    }
}
