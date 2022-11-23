// module.exports.getDate = getDate;

// function getDate() {

//     var options = {
//         weekday: 'long',
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric'
//     };
//     var today = new Date();
//     var day = today.toLocaleDateString("en-US", options);
//     return day;
// }

// module.exports.getDay = getDay;

// function getDay() {

//     var options = {
//         weekday: 'long'
//     };
//     var today = new Date();
//     var day = today.toLocaleDateString("en-US", options);
//     return day;
// }


// after refactor code ...

exports.getDate = function () {

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const today = new Date();
    return today.toLocaleDateString("en-US", options);
}

exports.getDay = function () {

    const options = {
        weekday: 'long'
    };
    const today = new Date();
    return today.toLocaleDateString("en-US", options);
}