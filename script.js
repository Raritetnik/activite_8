window.onload=function(){
    document.querySelector('#btn__message').addEventListener('click', () => {
        console.log('Salut, Console!');
        fun_test();
    });

    document.querySelector('#btn__warning').addEventListener('click', () => {
        console.warn('Faite attention!');
    });

    document.querySelector('#btn__error').addEventListener('click', () => {
    console.error(`Une erreur est survenu!`);
    });
  }

function fun_test(){
    var a=2;
    for(var a=1; a < 10; a++) {
        a+=1;
        console.log(a);
    }
}