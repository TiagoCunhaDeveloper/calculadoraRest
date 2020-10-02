/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';


export default class CalculadoraController {
  soma(req: Request, res: Response) {
    const numeroAtual = Number(req.query.numeroAtual);
    const numeroDigitado = Number(req.query.numeroDigitado);
    const total = numeroAtual + numeroDigitado;
    return res.json({resultado: total});
  }

  sub(req: Request, res: Response) {
    const numeroAtual = Number(req.query.numeroAtual);
    const numeroDigitado = Number(req.query.numeroDigitado);
    const total = numeroAtual - numeroDigitado;
    return res.json({resultado: total});
  }

  div(req: Request, res: Response) {
    const numeroAtual = Number(req.query.numeroAtual);
    const numeroDigitado = Number(req.query.numeroDigitado);

    let total = 0;
    let numero = numeroAtual;

    while (numero > 0) {
      numero -= numeroDigitado;
      total++;
    }

    return res.json({resultado:total});
  }

  mult(req: Request, res: Response) {
    const numeroAtual = Number(req.query.numeroAtual);
    const numeroDigitado = Number(req.query.numeroDigitado);
    let total = 0;

    for (let index = 0; index < numeroDigitado; index++) {
      total += numeroAtual;

    }

    return res.json({resultado:total});
  }
}
