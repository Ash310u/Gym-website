// css things by DOM---------------------------------------------------------------->

// * design--->
let allStyles = {
    backgroundColor: '#fff',
    margin: '0px',
    boxSizing: 'border-box'
};

Object.assign(document.querySelector('*').style, allStyles);

// body design--->
let bodyStyles = {
    margin: '0px',
    color: '#fff',
    fontFamily: 'Poppins, sans-serif',
    height:'100vh',
    overflow: 'hidden',
};

Object.assign(document.body.style, bodyStyles);

// container design--->
let containerStyles = {
    backgroundColor: '#000',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '18px 100px',
    alignItems: 'center'
};

Object.assign(document.getElementById('container').style, containerStyles);



// ul design--->
let ulStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#FFF8E7',
    listStyle: 'none'
};

Object.assign(document.querySelector('ul').style, ulStyles);


// li span design--->

let liStyles = {
    padding: '0px 30px',
    fontSize: '16px',
    fontWeight: '#400',
};

document.querySelectorAll('.span').forEach(element => { return (Object.assign(element.style, liStyles)) });

// sign up log in design--->
let logStyles = {
    color: '#42BA96',
    fontWeight: '200',
};

Object.assign(document.getElementById('log').style, logStyles);

// container2 design--->
let container2Styles = {
    position: 'relative',
};

Object.assign(document.getElementById('container2').style, container2Styles);

// img design--->
let imageStyles = {
    width: '100%',
    objectFit: 'contain',
};

Object.assign(document.querySelector('img').style, imageStyles);

// some design--->
let someStyles = {
    position: 'absolute',
    top: '60%',
    left: '50%',
    paddingRight: '100px',
};

let somePStyles = {
    width: '500px',
    fontSize: '18px',
}
let someButtonStyles = {
    border: 'none',
    borderRadius: '50px',
    padding: '10px 20px',
    color: '#414141',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    fontSize: '18px',
    fontWeight: '600',
}

Object.assign(document.getElementById('some').style, someStyles)

Object.assign(document.getElementById('some').querySelector('p').style, somePStyles)

Object.assign(document.getElementById('some').querySelector('button').style, someButtonStyles)
