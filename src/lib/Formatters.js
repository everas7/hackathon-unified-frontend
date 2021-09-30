import moment from 'moment';

const NAME_SOURCE = {
    NAME: 'NAME',
    EMAIL: 'EMAIL',
    PHONE: 'PHONE',
};

/**
 * Returns a date formatted like: "Sep 2 8:30 am"
 *
 * @param {Object} params
 * @param {string} params.date - Timestamp
 * @returns {string} Formatted date
 */
export function formatDate({ date }) {
    if (!date) {
        return '';
    }

    const selectedDate = moment(date);

    if (selectedDate.isSame(moment(), 'd')) { // Is today
        return `${selectedDate.format('[Today] h:mm a')}`;
    } else if (selectedDate.isAfter(moment().subtract(1, 'd').startOf(), 'd')) { // Is yesterday
        return `${selectedDate.format('[Yesterday] h:mm a')}`;
    } else if (selectedDate.isAfter(moment().startOf('year'), 'd')) { // Is this year
        return `${selectedDate.format('MMM D h:mm a')}`;
    } else { // Previous years
        return `${selectedDate.format('MMM D YYYY h:mm a')}`;
    }
}

/**
 * Returns the contact's name to be displayed across the app
 * choosing from the names, primary email or primary phone number.
 *
 * @param {Object} params
 * @param {string} [params.firstName] - First name
 * @param {string} [params.lastName] - Last name
 * @param {string} [params.primaryEmailAddress] - Primary email address
 * @param {string} [params.primaryPhoneNumber] - Primary phone number
 * @returns {string} Formatted display name
 */
export function formatName({
    firstName,
    lastName,
    primaryEmailAddress,
    primaryPhoneNumber,
}) {
    let name = '';
    let source = '';

    if (firstName || lastName) {
        const firstPart = firstName ? `${firstName} ` : '';

        name = `${firstPart}${lastName || ''}`;
        source = NAME_SOURCE.NAME;
    } else if (primaryPhoneNumber) {
        name = formatPhoneNumber({ phoneNumber: primaryPhoneNumber });
        source = NAME_SOURCE.PHONE;
    } else if (primaryEmailAddress) {
        name = primaryEmailAddress;
        source = NAME_SOURCE.EMAIL;
    }

    return { name, source };
}

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

/**
 * Returns the phone number formatted like: "(737) 200-1234"
 *
 * @param {Object} params
 * @param {Object} params.phoneNumber - Phone number
 * @returns {string} Formatted phone number
 */
export function formatPhoneNumber({ phoneNumber }) {
    if (!phoneNumber) {
        return '';
    }

    let renderedPhoneNumber = phoneNumber;

    renderedPhoneNumber = renderedPhoneNumber.replace(/\D/g, '').slice(-10);
    renderedPhoneNumber =
        `(${renderedPhoneNumber.substring(0, 3)}) ${renderedPhoneNumber.substring(3, 6)}-${renderedPhoneNumber.substring(6, renderedPhoneNumber.length)}`;

    return renderedPhoneNumber;
}
