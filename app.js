const PAGES=[['index.html','Inicio'],['datos.html','Datos'],['psico.html','Mente'],['stats.html','Stats'],['relaciones.html','Familia'],['playlist.html','Playlist'],['juego.html','Juego'],['404.html','Taller']];
const FRASES=["¡Sonic, espérame!","¡Puedo arreglarlo!","Creo que necesito más tuercas.","Solo un invento más y duermo. Lo prometo.","¡Mira, Sonic, funciona!","Los relámpagos no me dan miedo… mucho.","No sé cómo hacerlo todavía, pero lo voy a averiguar.","Estoy bien, de verdad. Solo un poquito cansado.","¿Y si le agrego otra hélice?","Quiero que Sonic se sienta orgulloso."];
const TEAM_IMAGE='assets/images/teamsonik.jpg';
document.title='Miles Tails';
const cur=location.pathname.split('/').pop()||'index.html';
const nav=document.getElementById('nav');
if(nav)nav.innerHTML=`<a class="logo" data-t="Miles Tails" href="index.html">Miles Tails</a><div class="l">${PAGES.map(p=>`<a href="${p[0]}" class="${p[0]==cur?'on':''}">${p[1]}</a>`).join('')}</div>`;
document.querySelectorAll('.tl').forEach(e=>e.innerHTML=`<img class="tails" src="${TEAM_IMAGE}" alt="Team Sonic">`);

const toast=document.createElement('div');
toast.id='toast';
document.body.append(toast);
function say(text){
 toast.innerHTML=`<img src="${TEAM_IMAGE}" alt=""><span>${text}</span>`;
 toast.classList.add('on');
 clearTimeout(say.timer);
 say.timer=setTimeout(()=>toast.classList.remove('on'),4500);
}
window.say=say;
if(!document.body.classList.contains('sec'))(function loop(){
 setTimeout(()=>{say(FRASES[Math.random()*FRASES.length|0]);loop()},16000+Math.random()*14000);
})();

const transitionOverlay=document.createElement('div');
transitionOverlay.id='ov';
document.body.append(transitionOverlay);
document.addEventListener('click',event=>{
 const link=event.target.closest('a[href]');
 if(!link||link.target||/^(https?:|#|mailto:)/.test(link.getAttribute('href')))return;
 event.preventDefault();
 transitionOverlay.classList.add('flash');
 setTimeout(()=>location.href=link.href,180);
});
addEventListener('pageshow',()=>{transitionOverlay.className=''});
