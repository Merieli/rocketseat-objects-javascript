// ------- Object Literal
// Pros: Simples de criar, claro de entender
// Contras: Ruim para reutilizar o mesmo objeto mais de 1 vez, ruim para mudar algum detalhe
const microfone = {
    color: "black",
    isOn: true,

    toggleOnOff: function () {
        if (microfone.isOn) {
            console.log("desligar");
        } else {
            console.log("ligar");
        }
        microfone.isOn = !microfone.isOn;
    },
};

console.log(microfone.color);
microfone.toggleOnOff();
microfone.toggleOnOff();
