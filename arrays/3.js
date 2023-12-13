function unique(arr) {
    return arr.filter((item, index, array) =>
        array.indexOf(item) === index);

}
console.log(unique(['top', 'bottom', 'top', 'left']));