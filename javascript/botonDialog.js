
//botón de contacto
const dialog = document.getElementById('dialog');
document.getElementById('botonDialog').addEventListener('click', () => dialog.showModal());
document.getElementById('cancelar').addEventListener('click', (e) =>{
    e.preventDefault();
    dialog.close();
})