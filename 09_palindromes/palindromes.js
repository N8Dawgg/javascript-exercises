const replaceList = ".,! "

function palindromes(s) {
    // for (let i=0;i<replaceList.length;i++) {
    //     s.replaceAll(replaceList[i],"");
    // }
    s = s
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        .replace(/\s{2,}/g, "")
    s = s.replaceAll(" ","");
    console.log(s);
    while (s.length > 0) {
        if (s.length == 1) {
            return true;
        }
        s = s.toLowerCase();
        
        if (s[0] == s[s.length-1]) {
            s = s.substring(1,s.length-1);
        } else {
            return false;
        }
    }
    return true;
}



// Do not edit below this line
module.exports = palindromes;
