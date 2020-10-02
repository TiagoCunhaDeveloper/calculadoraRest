/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';

import createLog from '../utils/createLog';
export default class CalculadoraController {

  soma(req: Request, res: Response) {
    const numeroAtual = Number(req.query.numeroAtual);
    const numeroDigitado = Number(req.query.numeroDigitado);
    const total = numeroAtual + numeroDigitado;

    createLog('/soma','Soma realizada: ' + numeroAtual + ' + ' + numeroDigitado + ' = ' + total);

    return res.json({resultado: total});
  }

  sub(req: Request, res: Response) {
    const numeroAtual = Number(req.query.numeroAtual);
    const numeroDigitado = Number(req.query.numeroDigitado);
    const total = numeroAtual - numeroDigitado;

    createLog('/sub','Subtração realizada: ' + numeroAtual + ' - ' + numeroDigitado + ' = ' + total);

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

    createLog('/div','Divisão por subtração realizada: ' + numeroAtual + ' / ' + numeroDigitado + ' = ' + total);

    return res.json({resultado:total});
  }

  mult(req: Request, res: Response) {
    const numeroAtual = Number(req.query.numeroAtual);
    const numeroDigitado = Number(req.query.numeroDigitado);
    let total = 0;

    for (let index = 0; index < numeroDigitado; index++) {
      total += numeroAtual;

    }

    createLog('/mult','Multiplicação realizada: ' + numeroAtual + ' * ' + numeroDigitado + ' = ' + total);

    return res.json({resultado:total});
  }

}
