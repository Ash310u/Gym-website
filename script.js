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
let logStyles = {
    color: '#42BA96',
    fontWeight: '200',
};

let logObj = document.getElementById('log');
Object.assign(logObj.style, logStyles);

// container2 design--->
let container2Styles = {
    position: 'relative',
};

let container2Obj = document.getElementById('container2');
Object.assign(container2Obj.style, container2Styles);

// img design--->
let imageStyles = {
    width: '100%',
    objectFit: 'contain',
};

let imageObj = document.querySelector('img');
Object.assign(imageObj.style, imageStyles);

// some design--->
let someStyles = {
    position: 'absolute',
    top: '60%',
    left: '50%',
    paddingRight: '100px',
};

let somePStyles = {
    width:'500px',
    fontSize:'18px',
}
let someButtonStyles = {
    border:'none',
    borderRadius:'50px',
    padding:'10px 20px',
    color:'#414141',
    backgroundColor:'rgba(255, 255, 255, 0.6)',
    fontSize:'18px',
    fontWeight:'600',
}

let someObj = document.getElementById('some');
Object.assign(someObj.style, someStyles)

let somePObj = document.getElementById('some').querySelector('p');
Object.assign(somePObj.style, somePStyles)

let someButtonObj = document.getElementById('some').querySelector('button');
Object.assign(someButtonObj.style, someButtonStyles)