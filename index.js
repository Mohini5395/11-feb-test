const result = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const multi = document.getElementById('multi')
const division = document.getElementById('division')


function result () {
if(input1.value == ""  || input2.value == ""){
    result.innerHTML = "Number cannot be empty"
}

else if(input1.value != ""  || input2 != ""){
    plus.innerHTML = input1.value + input2.value
   

}
}

result();



