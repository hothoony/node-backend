const isEmpty = (obj) => {
    return (obj === null || obj === undefined  || String(obj).trim() === '');
};

const hasValue = (obj) => {
    return !isEmpty(obj);
};

module.exports = {
    isEmpty,
    hasValue
};
