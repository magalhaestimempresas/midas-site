
function enviar(e){
e.preventDefault();
let n=document.getElementById('nome').value;
let emp=document.getElementById('empresa').value;
let msg=`Olá, gostaria de receber uma proposta TIM Empresas.%0ANome:${n}%0AEmpresa:${emp}`;
window.open('https://wa.me/5543988289424?text='+msg,'_blank');
}
