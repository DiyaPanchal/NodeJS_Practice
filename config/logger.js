import winston from 'winston';

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "application.log" }),
  ],
});

export default logger;

// logger.info("This is an informational message.");
// logger.warn("This is a warning message.");
// logger.error("This is an error message.");
