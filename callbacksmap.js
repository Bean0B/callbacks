function myMap(list, callback) {
  var listCopy = []
  list.forEach(function(item) {
    var transformedItem = callback(item);
    listCopy.push(transformedItem)
  });
return listCopy;
}


console.log(myMap(["ground", "control", "to", "major", "tom"], (item) => { return item.length }));