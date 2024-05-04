function one() {
    const username = "yash";
    function two() {
        const website = "YouTube";
        console.log(username);
    }
    // console.log(website);
    two();
}
// one();

if (true) {
    const username = "Yash";
    if (username == "Yash") {
        const website = " youtube";
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ++++++++++++++++++++ insteresting ++++++++++++++++++++
console.log(addOne(5));
function addOne(num) {
    return num + 1
}

addTwo(5);
const addTwo = function(num) {
    return num + 2
}