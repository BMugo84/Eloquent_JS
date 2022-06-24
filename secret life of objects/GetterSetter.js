let varyingSize = {
    get size() {
        return Math.floor(Math.random() *100)
    }
}
console.log(varyingSize.size)

class Temperature {
    constructor(celsius){
        this.celsius = celsius
    }
    get fahrenheit(){
        return this.celsius * 1.8 + 32 
    }
    set fahrenheit(value){
        this.celsius = (value - 32) / 1.8
    }
    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8)
    }

    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8)
    }
    get kelvin(){
        return this.celsius + 273.15
    }
    set kelvin(value){
        this.celsius = (value -273.15)
    }   
    static fromKelvin(value){
        return new Temperature(value - 273.15)
    }
}

let temp = new Temperature(22)
console.log(temp.celsius)
console.log(temp.fahrenheit)
console.log(temp.kelvin)

temp.fahrenheit = 86
console.log(temp.celsius)

temp.kelvin = 273.15
console.log(temp.celsius)


