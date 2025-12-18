// Miscellaneous utilities used throughout the project

import { promisify } from "util";

/**
 * Simple string to string[] splitting with trimming and removal of empty strings
 *
 * Useful for comma delimited environment variables
 * @param {string} value
 * @param {string} delimiter
 * @returns {string[]|[]}
 */
export const parseDelimitedString = function(value, delimiter = ",") {
    if (!value) return [];
    const trimmed = value?.trim();
    if (!trimmed || !trimmed.length) return [];
    return trimmed.split(delimiter).map(segment => segment.trim()).filter(Boolean);
};

/**
 * String to boolean, where "true" is true and anything else is false
 *
 * Useful for boolean environment variables
 *
 * For handling number environment variables, use `Number()`
 * @param {?string|undefined} value
 * @returns {boolean}
 */
export const stringToBoolean = (value) => value && value?.toLowerCase() === "true";

/**
 * Lets you "wait" for X amount of time in milliseconds
 * @see https://nodejs.org/api/timers.html#timers_settimeout_callback_delay_args
 * @see https://github.com/nodejs/node/blob/master/lib/timers.js#L150
 * @param {number} milliseconds
 * @example await sleep(4000); // Waits for for 4 seconds
 */
export const sleep = promisify(setTimeout);

/**
 * Try/catch wrapped URL() instantiation
 * @param {*} url
 * @param {*} [base]
 * @returns {?URL}
 */
export const safeURL = function(url, base) {
    if (!url || !url.length) return null;
    try {
        if (base) return new URL(url, base);
        return new URL(url);
    } catch {
        return null;
    }
};
