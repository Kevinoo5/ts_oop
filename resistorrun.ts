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
    getResistance(): number {
        return this.r
    }
    getAmps(w:number, v:number): number{
        return w / v
    }
    getOhms(w:number, v:number):number{
        return v / this.getAmps(w, v)
    }
    getTemp(w:number, ml:number):number{
        return Math.floor(20+(60/(4.19*(ml/w))))
    }
}

let r1: Resistor = new Resistor(220)
console.log(r1.getTemp(1000, 1000))
