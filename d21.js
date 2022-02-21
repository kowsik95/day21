
let call = document.getElementById("countdown");
// let a = document.getElementById("body");
// a.classlist.add("bg-info");
call.classList.add("ms-5","mt-3","text-light","fs-5","bg-info","text-center");
let i = 10;
function a(x){
   setTimeout(() => {
     if(i >= 1){
        call.innerHTML= i;
     }else{
         call.innerHTML = "Happy Independence Day";
     }
     i--;
     x(a);
   }, 1000);
}
function b(y){
    y(b);
}
a(b);