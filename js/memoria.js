//import 'bootstrap';
const pageEl = document.querySelector('.p-2-recipe-name').children[0].textContent;
const setInstrucciones = document.querySelector('.instrucciones');
const cadaInstruccion = document.querySelectorAll('.form-check-input3');
var progreso =0;
const laBarrita = document.querySelector('.progress-bar');


function renderMessage() {
    for (var x = 0; x < cadaInstruccion.length; x++) {
        for (var key in localStorage) {
        var y = "setInst" + pageEl + cadaInstruccion[x].id;
        if (key == y) {
            const checado = JSON.parse(localStorage.getItem(key));
            var cl = checado.instruction;
            cadaInstruccion[x].checked = checado.estado;
            if (checado.estado) {
                progreso++;
            }
        }
    }   

    }
}

function guardar(event) {
    if (event.target.id != ""){
        const objInstrucciones = {
            sitio: pageEl,
            instruction: event.target.id,
            estado: event.target.checked,
        }
        var y = "setInst" + pageEl + event.target.id;
        localStorage.setItem(y, JSON.stringify(objInstrucciones));
        if (objInstrucciones.estado) {
            progreso++;
        } else {
            progreso--;
        }
        barrita();
    }
};

function barrita() {
    var porcentaje = (progreso * 100);
    porcentaje = porcentaje / cadaInstruccion.length;
    laBarrita.setAttribute('style', `width: ${porcentaje}%`);
    /*if (porcentaje === 100) {
        const completionModal = new bootstrap.Modal(document.getElementById('reg-modal'));
        completionModal.show();
    }*/
}
    
renderMessage();
barrita();
setInstrucciones.addEventListener('click', guardar);