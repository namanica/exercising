const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(array, item) {
    item.forEach((i) => {
        let index = array.indexOf(i);
        if (index !== -1) {
            array.splice(index, 1);
        }
    });

    return array;
}
console.log(removeElement(array, [1, 5, 7]));