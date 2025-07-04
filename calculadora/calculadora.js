document.addEventListener("DOMContentLoaded", () => {
  const resultado = document.getElementById("resultado");
  const botones = document.querySelectorAll(".botones button");
  let expresion = "";

  const actualizarDisplay = () => resultado.value = expresion || "0";

  const operadores = ["+", "-", "*", "/", "÷"];

  const esOperador = valor => operadores.includes(valor);

  const tienePuntoEnUltimoNumero = () => {
    const partes = expresion.split(/[\+\-\*\/]/);
    return partes.at(-1).includes(".");
  };

  const resetear = () => {
    expresion = "";
    actualizarDisplay();
  };

  const calcularResultado = () => {
    try {
      const evalStr = expresion.replace(/÷/g, "/").replace(/×/g, "*").replace(/−/g, "-");
      if (/\/0(?!\d)/.test(evalStr)) throw new Error("División por cero");
      let res = eval(evalStr);
      if (!isFinite(res)) throw new Error();
      expresion = res.toString();
    } catch {
      expresion = "Error";
    }
    actualizarDisplay();
    setTimeout(resetear, 6000);
  };

  const calcularPorcentaje = () => {
    let num = parseFloat(expresion);
    if (isNaN(num)) return;
    expresion = (num / 100).toString();
    actualizarDisplay();
  };

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      const valor = boton.textContent;

      if (valor === "AC") return resetear();
      if (valor === "←") {
        expresion = expresion.slice(0, -1);
        return actualizarDisplay();
      }
      if (valor === "=") return calcularResultado();
      if (valor === "%") return calcularPorcentaje();

      if (valor === ".") {
        if (tienePuntoEnUltimoNumero()) return;
        expresion += (expresion === "" || esOperador(expresion.slice(-1))) ? "0." : ".";
        return actualizarDisplay();
      }

      if (expresion === "" && esOperador(valor) && valor !== "-") {
        return alert("El formato usado no es válido!");
      }

      if (esOperador(expresion.slice(-1)) && esOperador(valor)) return;

      expresion += valor;
      actualizarDisplay();
    });
  });

  actualizarDisplay();
});