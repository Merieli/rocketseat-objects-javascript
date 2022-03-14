// ------- Class Object
// Pros: syntactic sugar "maneira bela de usar o prototype", boa clareza visual
// Contras: o new cria uma objeto com a cadeia de prototipos
class Microfone {
    constructor(color = "black") {
        this.color = color;
        this.isOn = true;
    }

    toggleOnOff() {
        if (this.isOn) {
            console.log("desligar");
        } else {
            console.log("ligar");
        }
        this.isOn = !this.isOn;
    }
}
const microfone = new Microfone("white");
console.log(microfone.color.toUpperCase());
microfone.toggleOnOff;
microfone.toggleOnOff;
console.log(microfone);
