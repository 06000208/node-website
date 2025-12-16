// Constants used throughout the project
// This file cannot use logging or environment variables in order to implement configurable log levels

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { DateTime } from "luxon";

/**
 * Current version
 * @type {string}
 */
export const version = "1.0.0";

/**
 * The minimum nodejs version
 * @type {number}
 */
export const minimumNodeVersion = 22;

/**
 * Project directory
 * @type {string}
 */
export const directory = join(dirname(fileURLToPath(import.meta.url)), "..");

/**
 * Start time for the app
 * @type {DateTime}
 */
export const startTime = DateTime.now();

/**
 * Authority on what environment variables should be named. Can be used to access them with bracket notation on process.env
 *
 * Note that when providing node.js with environment variables, including via
 * the .env file, they should follow google's naming standard and use SCREAMING_SNAKE_CASE.
 * @see https://google.github.io/styleguide/shellguide.html#s7.3-constants-and-environment-variable-names
 * @see https://web.archive.org/web/20220415192041id_/https://google.github.io/styleguide/shellguide.html#s7.3-constants-and-environment-variable-names
 * @example
 * import { environmentVariableNames as names } from "./constants.js";
 * import { env } from "node:process";
 * console.log(env[names.development])
 */
export const environmentVariableNames = {
    development: "DEV",
};

/**
 * Array of valid environment variables in snake_case
 *
 * Note that when providing node.js with environment variables, including via
 * the .env file, they should follow google's naming standard and use SCREAMING_SNAKE_CASE.
 * @see https://google.github.io/styleguide/shellguide.html#s7.3-constants-and-environment-variable-names
 * @see https://web.archive.org/web/20220415192041id_/https://google.github.io/styleguide/shellguide.html#s7.3-constants-and-environment-variable-names
 * @type {string[]}
 */
export const environmentVariables = Array.from(Object.values(environmentVariableNames));
