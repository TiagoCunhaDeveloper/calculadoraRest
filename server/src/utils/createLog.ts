import logger from './logger';

export default function createLog(rota: string, message: string){
  logger.log({
    level: 'info',
    rota: rota,
    message: message
  });
  return 200;
}
