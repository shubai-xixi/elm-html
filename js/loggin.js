let num;
let yzm;
let yz;

const telnum = document.querySelector('body .box .telnumber input');
const authcode = document.querySelector('body .box .authcode input');
const btn = document.querySelector('body .box .box-btn button');

btn.addEventListener('click',function (){

    telnum.addEventListener('input',function (){
        num = telnum.value;
    });

    authcode.addEventListener('input',function (){
        yzm = authcode.value;
    });
});