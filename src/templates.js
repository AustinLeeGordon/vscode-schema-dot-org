const { filterArray } = require('./utils/helpers');
let currencyCodes = require('@austinleegordon/iso-4217');
let currencyCodes2 = require('i18n-iso-countries/langs/en.json')

function getTemplates() {

    const quotesRegex = /'|"/g;

    // Codes for testing or transactions where no currency is involved
    const removeCodes = ["XTS", "XXX"];

    // Currency Codes ISO 3217
    currencyCodes = currencyCodes.map(obj => obj.currency); // Get codes
    currencyCodes = filterArray(currencyCodes).sort(); // Remove duplicates and sort
    removeCodes.forEach(code => { // Remove unused codes
        let index = currencyCodes.indexOf(code);
        currencyCodes.splice(index, 1);
    })
    currencyCodes = currencyCodes.join(',').replace(quotesRegex, ''); // Format

    // Currency Codes ISO 3166 (Alpha-2)
    currencyCodes2 = Object.keys(currencyCodes2.countries);
    currencyCodes2 = currencyCodes2.sort().join(',').replace(quotesRegex, ''); // Sort and format

    // Item Condition
    let itemCondition = ["DamagedCondition", "NewCondition", "RefurbishedCondition", "UsedCondition"];
    itemCondition = itemCondition.join(',').replace(quotesRegex, ''); // Format

    // Employment Type
    let employmentType = ["FULL_TIME", "PART_TIME", "CONTRACTOR", "TEMPORARY", "INTERN", "VOLUNTEER", "PER_DIEM", "OTHER"];
    employmentType = employmentType.join(',').replace(quotesRegex, ''); // Format

    return {
        currencyCodes,
        currencyCodes2,
        itemCondition,
        employmentType
    };
}

module.exports = getTemplates();