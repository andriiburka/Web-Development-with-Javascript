let a = [{'name': 'property_a'}, {'name': 'property_b'}, {'name': 'property_a'}]

if(a.some(obj => obj.name === "property_a")){
    console.log("Object found inside the array.")
} else {
    console.log("Object not found.")
}