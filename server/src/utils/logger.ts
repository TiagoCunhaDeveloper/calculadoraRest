import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'Calculadora' },
  transports: [
    new winston.transports.File({ filename: './src/utils/logs/info.log' }),
  ],
});

export default logger;

