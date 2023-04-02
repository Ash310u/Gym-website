// css things by DOM---------------------------------------------------------------->

// * design--->
let allStyles = {
    backgroundColor: '#414141',
    margin: '0px',
    boxSizing: 'border-box'
};
let allObj = document.querySelector('*');
Object.assign(allObj.style, allStyles);

// body design--->
let bodyStyles = {
    margin: '0px',
    color: '#fff',
    fontFamily: 'Poppins, sans-serif'
};
let bodyObj = document.body;
Object.assign(bodyObj.style, bodyStyles);

// container design--->
let containerStyles = {
    backgroundColor: '#000000',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '18px 100px',
    alignItems: 'center'
};

let containerObj = document.getElementById('container');
Object.assign(containerObj.style, containerStyles);



// ul design--->
let ulStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#FFF8E7',
    listStyle: 'none'
};

let ulObj = document.querySelector('ul');
Object.assign(ulObj.style, ulStyles);


// li span design--->

// let liStyles = {
//     padding: '0px 30px',
//     fontSize: '16px',
//     fontWeight: '#400',
// };

// let liObj = document.querySelectorAll('.span');
// let liObjElement = liObj.forEach(element => {return element;});
// // console.log(element);
// Object.assign(liObjElement.style, liStyles);

document.querySelectorAll("span").forEach((element) => element.style.padding = '0px 30px');
document.querySelectorAll("span").forEach((element) => element.style.fontSize = '16px');
document.querySelectorAll("span").forEach((element) => element.style.fontWeight = '400');

// sign up log in design--->
document.getElementById('log').style.color = '#42BA96';
document.getElementById('log').style.fontWeight = '200';

// container2 design--->
document.getElementById('container2').style.position = 'relative';

// img design--->
document.querySelector('img').style.width = '100%';
document.querySelector('img').style.objectFit = 'contain';

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