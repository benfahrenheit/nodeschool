var pets = ['cat', 'dog', 'rat'];

pets.forEach(function(element, index) {
    pets[index] = element + 's';
});

console.log(pets);