// Intermediary module directly exporting environment variables for extra functionality, intellisense, and consistent cross-platform use.

// When providing node.js with environment variables, including via the .env file, they should follow google's naming standard and use SCREAMING_SNAKE_CASE for names.
// https://google.github.io/styleguide/shellguide.html#s7.3-constants-and-environment-variable-names
// https://web.archive.org/web/20220415192041id_/https://google.github.io/styleguide/shellguide.html#s7.3-constants-and-environment-variable-names

import { env } from "node:process";
import { stringToBoolean } from "./utility.js";
import { environmentVariableNames as names } from "./constants.js";

export const development = stringToBoolean(env[names.development]);
export const production = !development;

/** Pino logging level */
export const logLevel = env[names.logLevel] || "trace";

/** Pino logging level for files under ./logs */
export const fileLogLevel = env[names.fileLogLevel] || "trace";
