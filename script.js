// FORMULÁRIO -> WHATSAPP

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("leadForm");

  if(form){

    form.addEventListener("submit", function(e){

      e.preventDefault();

      const campos = form.querySelectorAll("input");

      const nome = campos[0].value;
      const empresa = campos[1].value;
      const linhas = campos[2].value;

      const mensagem =
`Olá, gostaria de receber uma proposta TIM Empresas.

Nome: ${nome}
Empresa: ${empresa}
Quantidade de linhas: ${linhas}

Vim através do site da Midas Telecom.`;

      const url =
`https://wa.me/5543988289424?text=${encodeURIComponent(mensagem)}`;

      window.open(url,"_blank");

    });

  }

});

// ANIMAÇÃO AO ROLAR

const observer = new IntersectionObserver((entries)=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

});

document.querySelectorAll(
".plan-card,.stat-card,.benefit-grid div,.two-columns"
).forEach(el=>{

  el.classList.add("hidden");
  observer.observe(el);

});
