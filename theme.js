let bgboard=document.querySelector(".bgboard");
// console.log(bgboard);

function changetheme(a){
    if(a==1){
        bgboard.style.background="red"
    } else if(a==2){
        bgboard.style.background="blue"
    }
     else if(a==3){
        bgboard.style.background="pink"
    }
     else if(a==4){
        bgboard.style.background="gray"
    }
}