export default (str) => {
    if (str.length === 0) {
        return '';
    }

    let result = '';
    for (const item of str) {
    result = `${result}${item.toUpperCase()}`;
    }
    return result;
} 

