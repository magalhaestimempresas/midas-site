
document.getElementById('leadForm').addEventListener('submit',function(e){
e.preventDefault();
const nome=document.getElementById('nome').value;
const empresa=document.getElementById('empresa').value;
const linhas=document.getElementById('linhas').value;
const msg=`Olá, gostaria de receber uma proposta TIM Empresas. Nome:${nome} Empresa:${empresa} Linhas:${linhas}`;
window.open('https://wa.me/5543988289424?text='+encodeURIComponent(msg),'_blank');
});
