const { filterArray } = require('./utils/helpers');
let currencyCodes = require('@austinleegordon/iso-4217');

function getTemplates() {

    const quotesRegex = /'|"/g;

    // Codes for testing or transactions where no currency is involved
    const removeCodes = ["XTS", "XXX"];

    // Currency Codes
    currencyCodes = currencyCodes.map(obj => obj.currency); // Get codes
    currencyCodes = filterArray(currencyCodes).sort(); // Remove duplicates and sort
    removeCodes.forEach(code => { // Remove unused codes
        let index = currencyCodes.indexOf(code);
        currencyCodes.splice(index, 1);
    })
    currencyCodes = currencyCodes.join(',').replace(quotesRegex, ''); // Format

    // Item Condition
    let itemCondition = ["DamagedCondition", "NewCondition", "RefurbishedCondition", "UsedCondition"];
    itemCondition = itemCondition.join(',').replace(quotesRegex, ''); // Format

    // Employment Type
    let employmentType = ["FULL_TIME", "PART_TIME", "CONTRACTOR", "TEMPORARY", "INTERN", "VOLUNTEER", "PER_DIEM", "OTHER"];
    employmentType = employmentType.join(',').replace(quotesRegex, ''); // Format

    return {
        currencyCodes,
        itemCondition,
        employmentType
    };
}

module.exports = getTemplates();