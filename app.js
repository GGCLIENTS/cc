var inp = document.getElementsByTagName('input')[0]
var btn = document.getElementsByTagName('button')[0]
var p = document.getElementsByTagName('p')[0]
var hariu
console.log(p)
function clik(){
    hariu = (inp.value * 9/5) +32
    p.innerText="Fahrenheit: " + hariu
}