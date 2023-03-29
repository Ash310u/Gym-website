// css things by DOM---------------------------------------------------------------->

// * design--->
document.querySelector('*').style.backgroundColor ='#414141';
document.querySelector('*').style.margin ='0px';
document.querySelector('*').style.boxSizing ='border-box';

// body design--->
document.body.style.margin ='0px';
document.body.style.color ='#fff';
document.body.style.fontFamily ='Poppins, sans-serif';

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
document.querySelectorAll("span").forEach((element) => element.style.fontSize = '16px');
document.querySelectorAll("span").forEach((element) => element.style.fontWeight = '400');

// sign up log in design--->
document.getElementById('log').style.color ='#42BA96';
document.getElementById('log').style.fontWeight ='200';

// container2 design--->
document.getElementById('container2').style.position = 'relative';

// img design--->
document.querySelector('img').style.width ='100%';
document.querySelector('img').style.objectFit ='contain';

// some design--->
document.getElementById('some').style.position = 'absolute';
document.getElementById('some').style.top = '60%';
document.getElementById('some').style.left = '50%';
document.getElementById('some').style.paddingRight = '100px';
document.getElementById('some').querySelector('p').style.width = '500px';
document.getElementById('some').querySelector('p').style.fontSize = '18px';
document.getElementById('some').querySelector('button').style.border = 'none';
document.getElementById('some').querySelector('button').style.borderRadius = '50px';
document.getElementById('some').querySelector('button').style.padding = '10px 20px';
document.getElementById('some').querySelector('button').style.color = '#414141';
document.getElementById('some').querySelector('button').style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
document.getElementById('some').querySelector('button').style.fontSize = '18px';
document.getElementById('some').querySelector('button').style.fontWeight = '600';