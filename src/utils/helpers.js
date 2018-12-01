// Filter duplicates from output array
function filterArray(arr) {
    return Array.from(new Set(arr));
}

module.exports = {
    filterArray
};