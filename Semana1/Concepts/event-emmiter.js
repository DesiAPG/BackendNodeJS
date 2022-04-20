const eventEmitter = require("events");

class Payment extends eventEmitter {
  pay(callback) {
    console.log("Iniciando pago...");
    this.emit("Inicio");
    callback();

    this.emit("completado");
    console.log("Finalizando Pago");
  }
}

const payment = new Payment();

payment.on("Inicio", () => {
  console.log("Realizando pago");
});

payment.on("completado", () => {
  console.log("Pago realizado... Gracias!");
});

payment.pay(() => {
  setTimeout(() => {
    console.log("LISTO! Gracias por su compra");
  }, 500);
});
