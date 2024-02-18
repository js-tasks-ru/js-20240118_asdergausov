/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
   let result = new Object()

   for (let field of fields) {
        if (!(field in obj)) {
            return {}
        }
        result[field] = deepCopy(obj[field])
    }
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
    Object.keys(oxbj).forEach(key => result[key] = deepCopy(obj[key]))

    return result
}
