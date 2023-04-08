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

// admission design--->

let admissionStyles = {
    color: '#000',
    textTransform:'uppercase',
    fontSize: '32px',
    letterSpacing: '13px',
}
Object.assign(document.getElementById('admissson').style, admissionStyles);
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
    backgroundImage: 'url("bg.jpg")',
    backgroundRepeat : 'none',
    boxSizing: 'border-box',
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
}
Object.assign(document.querySelector('form').style, formStyles);

// // inputs design--->

let inputStyles = {
    width: '600px',
    height: '50px',
    paddingLeft: '20px',
    fontSize: '16px',
    fontWeight: '200',
    backgroundColor: 'rgba(255, 255, 255)',
    border:'none',
    boxSizing: 'border-box',
    backgroundColor:'#f7f7f7',
    opacity:'0.5'

}
document.querySelectorAll('input').forEach(element => { return Object.assign(element.style, inputStyles); });

Object.assign(document.querySelector('select').style, inputStyles);


// submit design--->

let  submitStyles = {
    padding:'10px 0px',
    width:'300px',
    borderRadius:'20px',
    backgroundColor:'#f7f7f7',
    opacity:'0.9'
}
let subDivStyles = {
    paddingTop:'50px',
}
Object.assign(document.getElementById('subDiv').style, subDivStyles);
Object.assign(document.getElementById('submit').style, submitStyles);