function repeatString(str, count) {
    if (count < 0) {
        return 'ERROR';
    }
    let final_str = '';
    for (let i=0; i < count; i++) {
        final_str += str;
    }
    return final_str;
}

// Do not edit below this line
module.exports = repeatString;
