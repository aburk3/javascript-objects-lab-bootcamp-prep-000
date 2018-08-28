var recipes = { meat: "chicken" }

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value})
}
updateObjectWithKeyAndValue(recipes, 'vegetable', 'broccoli')


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
destructivelyUpdateObjectWithKeyAndValue(recipes, 'myKey', 'myValue')



