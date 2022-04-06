const winston = require('winston');
const winstonDaily = require('winston-daily-rotate-file');

const logDir = 'logs';

const log = winston.createLogger({
    level: 'debug',
    // format: winston.format.simple(),
    // format: winston.format.json(),
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss.SSS',
        }),
        winston.format.printf(info => {
            return `${info.timestamp} ${info.level} ${info.message}`;
        }),
    ),
    // defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize({all: true}),
            )
        }),
        // new winston.transports.Console(),
        // new winston.transports.Console({
        //     format: winston.format.combine(
        //         winston.format.colorize(),
        //         winston.format.simple(),
        //     )
        // }),
        new winston.transports.File({ filename: `${logDir}/myapp-all.log` }),
        new winston.transports.File({ filename: `${logDir}/myapp-error.log`, level: 'error' }),
        new winstonDaily({
            level: 'info',
            // datePattern: 'YYYY-MM-DD',
            datePattern: 'YYYYMMDD',
            dirname: `${logDir}`,
            filename: `myapp-%DATE%.log`,
            maxFiles: '10d',    // 10 일치 보관 (days)
            maxSize: '1m',      // 파일당 1MB
            zippedArchive: false,
        }),
    ],
});

module.exports = log;
