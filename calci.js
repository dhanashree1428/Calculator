 let result=document.querySelector("#t")

function cal(number){
result.value+=number
}

function Result(){
    try{
        result.value = eval(result.value)
       }
    catch{
        alert("invalid input")
    }
}

function Del(){
   result.value = result.value.slice(0,-1)
}

function Clr(){
    result.value = ""
}