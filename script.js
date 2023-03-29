// css things by DOM---------------------------------------------------------------->

// * design--->
document.querySelector('*').style.backgroundColor ='#414141';
document.querySelector('*').style.margin ='0px';
document.querySelector('*').style.boxSizing ='border-box';

// body design--->
document.body.style.margin ='0px';
document.body.style.color ='#fff';

// container design--->
document.getElementById('container').style.backgroundColor = "#000000";
document.getElementById('container').style.display ='flex';
document.getElementById('container').style.flexDirection ='row';
document.getElementById('container').style.justifyContent ='space-between';
document.getElementById('container').style.alignItems ='center';
document.getElementById('container').style.padding ='18px 100px';

// ul design--->
document.querySelector('ul').style.display ='flex';
document.querySelector('ul').style.flexDirection ='row';
document.querySelector('ul').style.justifyContent ='space-between';
document.querySelector('ul').style.color ='#FFF8E7';
document.querySelector('ul').style.listStyle ='none';

// li design--->

document.querySelectorAll("span").forEach((element) => element.style.padding = '0px 30px');
// document.querySelectorAll("span").forEach((element) => element.style.padding = '0px 30px');
// document.querySelectorAll("span").forEach((element) => element.style.padding = '0px 30px');
