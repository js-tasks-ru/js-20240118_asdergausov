/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc'.
 * Supported locales: 'ru-RU','en-EN'. Sorting is case-sensitive and diacritic marks-sensitive
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    let sortedArr = Array.from(arr)
    const cmpDesc = param === 'desc'

    sortedArr.sort((a, b) => {
       const less = a.localeCompare(b, ['ru-RU','en-EN'], {
            'sensitivity': 'variant',
            'caseFirst': 'upper',  
        });
        return cmpDesc ? -less : less
    })

    return sortedArr
}
