//npx ts-node resistorrun.ts
class Resistor {
    r: number = 0;
    constructor(r: number) {
        this.r = r;
    }
    getCurrent(u: number): number {
        return u / this.r;
    }
    getPower(u: number): number {
        return u * this.r;
    }
}

let r1: Resistor = new Resistor(4)
console.log(r1.getCurrent(6))
