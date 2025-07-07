// Menu móvel
$(function(){
  const $toggle=$('.menu-toggle');
  const $navList=$('.nav ul');
  $toggle.on('click',function(){
    $navList.toggleClass('mostrar');
    const expanded=$(this).attr('aria-expanded')==='true'||false;
    $(this).attr('aria-expanded',!expanded);
  });

  // Smooth scroll to top
  $('.scroll-top').on('click',function(e){e.preventDefault();$('html,body').animate({scrollTop:0},800);});
});

// Carousel simples
$(function(){
  let index=0;const $cards=$('.destaques .card');
  if($cards.length>1){
    $cards.hide().eq(0).show();
    setInterval(()=>{
      $cards.eq(index).fadeOut(400,()=>{
        index=(index+1)%$cards.length;
        $cards.eq(index).fadeIn(400);
      });
    },4000);
  }
});

// Validação de formulário
(function(){
  const form=document.getElementById('contatoForm');if(!form)return;
  form.addEventListener('submit',function(e){
    e.preventDefault();
    let ok=true;
    form.querySelectorAll('.erro').forEach(s=>s.textContent="");
    const nome=form.querySelector('#nome');
    if(!nome.value.trim()){nome.nextElementSibling.textContent='Preencha seu nome.';ok=false;}
    const email=form.querySelector('#email');
    const re=/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;
    if(!email.value.trim()){email.nextElementSibling.textContent='Digite seu email.';ok=false;}
    else if(!re.test(email.value)){email.nextElementSibling.textContent='Email inválido.';ok=false;}
    const msg=form.querySelector('#mensagem');
    if(msg.value.trim().length<10){msg.nextElementSibling.textContent='Mensagem deve ter ao menos 10 caracteres.';ok=false;}
    if(ok){document.getElementById('sucesso').classList.remove('oculto');form.reset();}
  });
})();