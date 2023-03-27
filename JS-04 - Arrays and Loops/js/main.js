//Exercise #1 -------------------
//Part 1
let people = ["Sofia","David","Juan"];
console.log("Primera parte: " + people.toString());
//Part 2
people.push("Sara","Augustin");
people.shift();
console.log("Segunda parte: " +people.toString());
//Part 3
people.splice(1,0,"Renata");
people.push("Elena");
console.log("Tercera parte:" + people.toString());

//Exercise #2 ------------------
let piramid = document.getElementById("piramid");
let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    let niveles = 5;
for(let i =0; i <= niveles-1 ; i++){
    for(let b = 0; b <= i ; b++ ){
        piramid.innerHTML += "*";
    }
    piramid.innerHTML+=("<br>");
}
});
//Exercise #2 ------------------
//part1
let xValue = 5.0;
while(xValue >= 0 ){
    console.log(xValue);
    xValue -= 0.5;
}
//part2
console.log("----------------Part 2---------");
let nums =1;
while(nums <= 100){
    if(nums % 2 == 0){
        console.log(nums);
    }
    nums ++;
}
//Part 3
let n = 6;
cont = 1;
while(cont <= 6){
    console.log("["+cont+"]");
    cont ++;
}
//part4
let number = 19;
let x =1;
let result =0;
while(x <= number){
    result += x;
    x++;
}
console.log("Result: " + result);