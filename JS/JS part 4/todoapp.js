let todo=[];
let req=prompt("enter your request");

while(true){
    if(req=="quit"){
        console.log("quitting todo.....");
        break;
    }
    if(req=="list"){
        console.log("-------------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("-------------");
    } else if(req=="add"){
        let task=prompt("enter the task to be added:");
        todo.push(task);
        console.log("task has been added");
    } else if(req=="delete"){
        let idx=prompt("enter the index:");
        todo.splice(idx,1);
        console.log("deleted successfully");
    }
    req=prompt("enter your request");
}