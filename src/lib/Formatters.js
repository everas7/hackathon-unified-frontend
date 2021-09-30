

/**
 * Returns numbers formatted as strings with commas like: "45,70"
 *
 * @param {Object} params
 * @param {number} params.number - Number to be formatted
 * @returns {string} Formatted number
 */
 export function formatNumber({ number }) {
    if (number === undefined || number === null) {
        return '';
    }

    const parts = number.toString().split('.');

    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return parts.join('.');
}
