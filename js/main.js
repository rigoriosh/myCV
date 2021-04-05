
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
    prender('DescripcionPersonal');
}

experiencia =  () => {    
    prender('ExperienciasLaborales');
}
skills = () => {    
    prender('Skills');
}
educacion = () => {    
    prender('Educacion');
}
hobbies = () => {    
    prender('Hobbies');
}
repositorios = () => {    
    prender('repositories');
}

prender('DescripcionPersonal');
document.getElementById('spiner').style.display = 'none';

if (window.matchMedia("(max-width: 600px)").matches) {
    console.log(33333)
}