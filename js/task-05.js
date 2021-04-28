let input = document.getElementById('name-input');
let Output = document.getElementById('name-output');

input.oninput = function () {
    if (input.value === '') {
       Output.innerHTML = 'незнакомец';
    } else {
    Output.innerHTML = input.value;
    }
}


