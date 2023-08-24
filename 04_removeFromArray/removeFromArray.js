function removeFromArray() {
    let new_arr = [];
    let arr = arguments[0];
    for (let i=0; i< arr.length; i++) {
        let test = false;
        for (let j=1; j< arguments.length; j++) {
            if (arr[i] === arguments[j]) {
                test = true;
            }
        }
        if (!test) {
            new_arr.push(arr[i]);
        }
    }
    console.log(new_arr);
    return new_arr;
}

// Do not edit below this line

module.exports = removeFromArray;
