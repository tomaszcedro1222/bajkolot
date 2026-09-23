document.body.classList.add('js');
const toggle=document.querySelector('.menu-toggle');
const navigation=document.querySelector('#navigation');
function closeMenu(){toggle.setAttribute('aria-expanded','false');navigation.classList.remove('open');}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));navigation.classList.toggle('open',!open);});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){closeMenu();toggle.focus();}});
navigation.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
window.matchMedia('(min-width:861px)').addEventListener('change',closeMenu);
