
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle)
const navLinks = document.querySelectorAll('.nav-item')




let vista = 'DescripcionPersonal'

prender = (IdDiv) => {
    let divs = [ 'DescripcionPersonal', 'ExperienciasLaborales', 'Skills', 'Educacion', 'Hobbies', 'repositories']            
    divs.forEach(div => {
        if(div !== IdDiv) document.querySelector(`#${div}`).style.display = 'none'
    });
    document.getElementById('spiner').style.display = 'block';
    setTimeout(() => {
        document.getElementById('spiner').style.display = 'none';
        document.getElementById(IdDiv).style.display = 'block';
    }, 500);    
}

descripcion = () => {  
     
    vista = 'DescripcionPersonal';
    prender(vista);
    checkScreen();
}

experiencia =  () => {    
    vista = 'ExperienciasLaborales';
    prender(vista);    
    checkScreen();
}
skills = () => {    
    vista = 'Skills';
    prender(vista);
    checkScreen();
}
educacion = () => {    
    vista = 'Educacion';
    prender(vista);
    checkScreen();
}
hobbies = () => {    
    vista = 'Hobbies';
    prender(vista);
    checkScreen();
}
repositorios = () => {    
    vista = 'repositories';
    prender(vista);
    checkScreen();
}

prender(vista);
document.getElementById('spiner').style.display = 'none';




const checkScreen = () => {
     
    if (window.matchMedia("(max-width: 600px)").matches) {
        
        (vista !== 'DescripcionPersonal')
        ? ocultarDatosBasicos(true)
        : ocultarDatosBasicos(false)
        const navLinks = document.querySelectorAll('.nav-item')       
        navLinks.forEach(l => {            
            l.addEventListener('click', () => { bsCollapse.toggle() })
        })
        
    }
}

const ocultarDatosBasicos = (hideBasicData) => {
    if (hideBasicData) {
        document.getElementById('foto').style.display = 'none';
        document.querySelector('.datos').style.display = 'none';
    } else {
        document.getElementById('foto').style.display = 'block';
        document.querySelector('.datos').style.display = 'block';
    }
}

setTimeout(() => {
    document.querySelector('.navbar-toggler').click();
}, 6);




