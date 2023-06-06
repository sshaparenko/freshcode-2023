const map = new Map();

// set and update
map.set(10, 1);
map.set('10', 2);
map.set('key2', 2);
map.set([1,2,3], 2);


// delete
// return true if element was deleted
map.delete(10);
map.delete([1,2,3]);

console.log(map);

map.clear();

console.log(map);