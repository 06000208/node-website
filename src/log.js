// Logging with pino and pino-http libraries

import { join } from "node:path";
import { pino } from "pino";
import { pinoHttp } from "pino-http";
import { directory, startTime } from "./constants.js";
import { fileLogLevel, logLevel } from "./environment.js";

const targets = [
    {
        target: "pino/file",
        level: fileLogLevel,
        options: { destination: join(directory, "logs", `${startTime.toISODate()}_${startTime.toMillis()}.log`) },
    },
    {
        target: "pino/file",
        level: logLevel,
        options: { destination: 1 },
    },
];

export const log = pino({
    level: "trace",
    transport: {
        targets: targets,
    },
});

/**
 * @see https://www.npmjs.com/package/pino-http
 */
export const httpLog = pinoHttp({
    logger: log,
    useLevel: "trace",
    customSuccessMessage: (req, res) => {
        return !req.readableAborted && res.writableEnded ? "request completed" : "request aborted";
    },
    customErrorMessage: (req, res, err) => {
        return "request errored";
    },
});
