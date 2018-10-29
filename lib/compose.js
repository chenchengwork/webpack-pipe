/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 *
 * usage:
 *      const fn1 = val => 'fn1-' + val
        const fn2 = val => 'fn2-' + val
        const fn3 = val => 'fn3-' + val

        compose(fn1,fn2,fn3)('测试')

        输出结果： fn1-fn2-fn3-测试
 */

module.exports = function compose(...funcs) {
    if (funcs.length === 0) {
        return arg => arg
    }

    if (funcs.length === 1) {
        return funcs[0]
    }

    return funcs.reduce((a, b) => (...args) => a(b(...args)))
};
