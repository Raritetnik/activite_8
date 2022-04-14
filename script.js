window.onload=function(){
    document.querySelector('#btn').addEventListener('click', () => {
        console.log('Hello, Console!');
        fun_test();
    });
  }

function fun_test(){
    var a=2;
    for(var a=1; a < 10; a++) {
        a+=1;
        console.log(a);
    }
}