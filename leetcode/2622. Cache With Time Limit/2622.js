var TimeLimitedCache = function () {
    this.cache = new Map();
    this.timeouts = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    let flag = false;

    if (this.cache.has(key)) {
        clearTimeout(this.timeouts.get(key));
        flag = true;
    }

    const timeout = setTimeout(() => {
        this.cache.delete(key);
        this.timeouts.delete(key);
    }, duration);

    this.timeouts.set(key, timeout);
    this.cache.set(key, value)


    return flag;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    if (!this.cache.has(key)) {
        return -1;
    }
    return this.cache.get(key);
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    return this.cache.size;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */