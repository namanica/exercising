function removeElement(array, item) {
    item.forEach((i) => {
        let index = array.indexOf(i);
        if (index !== -1) {
            array.splice(index, 1);
        }
    });
}

function difference(array1, array2) {
    let result = [...array1];
    removeElement(result, array2);
    return result;
}

const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result);
