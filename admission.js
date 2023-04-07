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
    color: '#000',
    fontFamily: 'Poppins, sans-serif',
};

Object.assign(document.body.style, bodyStyles);

// container3 design--->

let container3Styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '100px',
    boxSizing: 'border-box',
    
};

Object.assign(document.getElementById('container3').style, container3Styles);

// row design--->

let lableStyles = {
    color: '#000',
    textTransform:'uppercase',
    fontSize: '32px',
    letterSpacing: '13px',

}
Object.assign(document.getElementById('admissson').style, lableStyles);
// row design--->

let rowStyles = {
    padding:'10px 0px',
    textTransform:'uppercase',
    fontSize: '16px',
    letterSpacing: '3px',
}
document.querySelectorAll('.row').forEach(element => { return Object.assign(element.style, rowStyles); });

// form design--->
let formStyles = {
    padding:'50px 200px',
    backgroundColor: '#F1F1F1',
    boxSizing: 'border-box',
}
Object.assign(document.querySelector('form').style, formStyles);

// // inputs design--->

let inputStyles = {
    width: '600px',
    height: '50px',
    backgroundColor: 'rgba(255, 255, 255)',
    border:'none',
    boxSizing: 'border-box',
}
document.querySelectorAll('input').forEach(element => { return Object.assign(element.style, inputStyles); });
Object.assign(document.querySelector('select').style, inputStyles);
