var calc = [];
var operate = [];
let res = 0;
//display function will display the the appropriate content needed on clicking the respective button
function display(a){
    document.querySelector(".add").style.backgroundColor = "orange";
    document.querySelector(".add").style.color = "white";
    document.querySelector(".sub").style.backgroundColor = "orange";
    document.querySelector(".sub").style.color = "white";
    document.querySelector(".mul").style.backgroundColor = "orange";
    document.querySelector(".mul").style.color = "white";
    document.querySelector(".div").style.backgroundColor = "orange";
    document.querySelector(".div").style.color = "white";
    calc.push(a);
    document.getElementById("result").value = calc.join("");
}
//clearfull is used for clearing all the operations and numbers entered
function clearfull(){
    
    document.getElementById("result").value = "";
    res = 0;
    calc = [];
    
}
//del function deletes the last number entered
function del(){
    calc.pop();
    document.getElementById("result").value = calc.join("");
}
//add function will accept input and push the input value and a plus sign to the operate array
function add(){
    document.querySelector(".add").style.backgroundColor = "white";
    document.querySelector(".add").style.color = "orange";
    let x1 = document.getElementById("result").value;
    operate.push(x1);
    operate.push("+");
    clearfull();
}
//subtract function will accept input and push the input value and a minus sign to the operate array
function subtract(){
    document.querySelector(".sub").style.backgroundColor = "white";
    document.querySelector(".sub").style.color = "orange";
    let x3 = document.getElementById("result").value;
    operate.push(x3);
    operate.push("-");
    clearfull();
}
//multiply function will accept input and push the input value and a into sign to the operate array
function multiply(){
    document.querySelector(".mul").style.backgroundColor = "white";
    document.querySelector(".mul").style.color = "orange";
    let x4 = document.getElementById("result").value;
    operate.push(x4);
    operate.push("X");
    clearfull();
}
//divide function will accept input and push the input value and a divide sign to the operate array
function divide(){
    document.querySelector(".div").style.backgroundColor = "white";
    document.querySelector(".div").style.color = "orange";
    let x5 = document.getElementById("result").value;
    operate.push(x5);
    operate.push("/");
    clearfull();
}
//sqrt function will display the square root value
function sqrt(){
    let x6 = document.getElementById("result").value;
    res = Math.sqrt(Number(x6));
    document.getElementById("result").value = res;
}
//log function will display the logarithm value of base 10 for the given input
function log(){
    let x7=document.getElementById("result").value;
    res = Math.log10(Number(x7));
    document.getElementById("result").value = res;
}
//loge function will display the logarithm value of base e for the given input
function loge(){
    let x8=document.getElementById("result").value;
    res = Math.log(Number(x8));
    document.getElementById("result").value = res;
}
//perform function will traverse the operate array and according to the symbols entered, the function will calculate respectively
function perform(){
        let x2 = document.getElementById("result").value;
        operate.push(x2);
    
    let l = operate.length;
    res = Number(operate[0]);
    for(i=0;i<l;i++)
    {   

        if(operate[i]=="+")
        {
            res =res+Number(operate[i+1]);
        }
        else if(operate[i]=="-")
        {
            res = res-Number(operate[i+1]);
        }
        else if(operate[i]=="X")
        {
            res = res*Number(operate[i+1]);
        }
        else if(operate[i]=="/")
        {
            if(Number(operate[i+1])==0)
            {
                document.getElementById("result").value = "Zero Division Error";
                return;
            }
            res = res/Number(operate[i+1]);
        }
    }
    operate = [];
    document.getElementById("result").value = res;
}