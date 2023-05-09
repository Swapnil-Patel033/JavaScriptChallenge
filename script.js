var number = prompt("Enter number")

if (number !== parseInt(number, 10).toString()) {
    alert("Please enter only numbers!");
}
else{
   var NumberLength = number.length
    console.log(NumberLength)
}