/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
    let result = new Object()

    let omittedFieldsSet = new Set()
    for (let field of fields) {
        omittedFieldsSet.add(field)
        if (!(field in obj)) {
            return obj;
        }
    }

    Object.keys(obj).forEach(key => {
        if (omittedFieldsSet.has(key)) {
            return 
        }
        result[key] = deepCopy(obj[key])
    })

    return result;
};

 /** 
 * deepCopy deep clones provided object:
 * @param {object} obj - the source object
 * @returns {object} - deep copy of provided object
 */
 function deepCopy(obj) {
    if (obj === null || obj === undefined || typeof obj !== 'object') {
        return obj
    }
    if (obj instanceof Array) {
        let result = new Array(obj.length)
        for (let i = 0; i < obj.length; i++) {
            result[i] = deepCopy(obj[i])
        }
        return result
    }
    let result = new Object()
    Object.keys(obj).forEach(key => result[key] = deepCopy(obj[key]))

    return result
}