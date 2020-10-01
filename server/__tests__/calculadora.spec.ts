const serverP = require("../src/app");
const requestP = require("supertest");

describe("CALCULADORA", () => {
  it("GET - SOMA", async () => {
    const result = await requestP(serverP).get("/soma").query({ numeroAtual: 10,numeroDigitado: 10 });

    expect(result.statusCode).toEqual(200);
    expect(result.body.resultado).toEqual(20);
  });
  it("GET - SUBTRAÇÃO", async () => {
    const result = await requestP(serverP).get("/sub").query({ numeroAtual: 10,numeroDigitado: 10 });

    expect(result.statusCode).toEqual(200);
    expect(result.body.resultado).toEqual(0);
  });
  it("GET - DIVISÃO", async () => {
    const result = await requestP(serverP).get("/div").query({ numeroAtual: 10,numeroDigitado: 10 });

    expect(result.statusCode).toEqual(200);
    expect(result.body.resultado).toEqual(1);
  });
  it("GET - MULTIPLICAÇÃO", async () => {
    const result = await requestP(serverP).get("/mult").query({ numeroAtual: 10,numeroDigitado: 10 });

    expect(result.statusCode).toEqual(200);
    expect(result.body.resultado).toEqual(100);
  });
});
