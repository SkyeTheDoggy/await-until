/**
 * Wait until a condition is met.
 * @param {function} conditionFn - Condition function. (e.g., () => someCondition)
 * @param {number} [delay=1] - Delay time in milliseconds for every check. (e.g., 100)
 * @param {number} [timeout=25000] - Maximum time in milliseconds to wait until the condition is met. If the condition is not met within this time, the function will reject. (e.g., 5000 for 5 seconds)
 * @returns {Promise<number>} - Time of waiting in milliseconds.
 */
module.exports.awaitUntil = async (conditionFn, delay = 1, timeout = 25000) => {
    let startTime = Date.now();
    return await new Promise((resolve, reject) => {
        try {
            let interval = setInterval(() => {
                if (conditionFn()) {
                    clearInterval(interval);
                    resolve(Date.now() - startTime);
                } else if (Date.now() - startTime > timeout) {
                    clearInterval(interval);
                    reject(new Error(`Timeout: Condition not met within ${timeout} milliseconds`));
                }
            }, delay);
        } catch (err) {
            reject(err);
        }
    });
};
