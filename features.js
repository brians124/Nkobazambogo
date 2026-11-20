/* features.js – page features (front-end only). Edit WA number in social.js */
(function(){
var d=document,P=(location.pathname.split('/').pop()||'index.html').replace('.html',''),$=function(s,r){return(r||d).querySelector(s)},$$=function(s,r){return[].slice.call((r||d).querySelectorAll(s))};
function css(t){var s=d.createElement('style');s.textContent=t;d.head.appendChild(s)}
function el(t,h,c){var e=d.createElement(t);if(h)e.innerHTML=h;if(c)e.className=c;return e}
function wa(t){var n=((window.KUN_SOCIAL||{}).whatsapp||'').match(/wa\.me\/(\d+)/);return'https://wa.me/'+(n?n[1]:'')+'?text='+encodeURIComponent(t)}
css('.xf-box{max-width:40rem;margin:1rem auto;padding:.7rem 1rem;border:2px solid #f5c518;border-radius:12px;background:#fff;font:1rem Arial}.xf-box input{width:100%;padding:.7rem;border:2px solid #0a2a9c;border-radius:8px;font-size:1rem}.xf-btn{display:inline-block;margin:.3rem .3rem 0 0;padding:.5rem .9rem;border:2px solid #f5c518;border-radius:8px;background:#06196b;color:#fff;font:bold .85rem Arial;cursor:pointer;text-decoration:none}.xf-ck{position:fixed;left:0;right:0;bottom:0;z-index:9998;display:flex;gap:1rem;flex-wrap:wrap;align-items:center;justify-content:center;padding:.8rem 1rem;background:#06196b;color:#fff;font:.9rem Arial}.xf-lb{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:#000d;cursor:zoom-out}.xf-lb img{max-width:92vw;max-height:90vh;object-fit:contain}.xf-toc a{display:block;padding:.3rem 0}');
/* 1. Cookie consent (all pages) */
try{if(!localStorage.kunCk){var c=el('div','<span>We use cookies to improve your experience. <a href="privacy.html" style="color:#ffe066">Learn more</a></span>','xf-ck'),b=el('button','Accept','xf-btn');b.onclick=function(){localStorage.kunCk=1;c.remove()};c.appendChild(b);d.body.appendChild(c)}}catch(e){}
/* 2. Share on WhatsApp (news, events, careers, projects, partnerships) */
if(/^(news|events|careers|kampala-university-)/.test(P)){var s=el('a','Share on WhatsApp','xf-btn');s.href='https://wa.me/?text='+encodeURIComponent(d.title+' '+location.href);s.target='_blank';s.rel='noopener';s.style.cssText='position:fixed;left:14px;bottom:70px;z-index:900';d.body.appendChild(s)}
/* 3. FAQ search + helpful votes */
if(P==='faq'){var items=$$('details'),w=el('div','<input type="search" placeholder="Search questions…" aria-label="Search FAQ"><p class="xf-n" style="margin:.4rem 0 0"></p>','xf-box'),m=$('main');m.insertBefore(w,m.firstChild);
w.firstChild.oninput=function(){var q=this.value.toLowerCase(),n=0;items.forEach(function(i){var k=i.textContent.toLowerCase().indexOf(q)>-1;i.hidden=!k;if(k)n++});$('.xf-n',w).textContent=q?n+' result(s)':''};
items.forEach(function(i){var h=el('div','Was this helpful? ');['👍 Yes','👎 No'].forEach(function(t){var b=el('button',t,'xf-btn');b.onclick=function(){h.textContent='Thanks for your feedback!'};h.appendChild(b)});i.appendChild(h)})}
/* 4. Privacy table of contents */
if(P==='privacy'){var hs=$$('main h2');if(hs.length>2){var t=el('nav','<b>On this page</b>','xf-box xf-toc');hs.forEach(function(h,i){h.id=h.id||'p'+i;var a=el('a',h.textContent);a.href='#'+h.id;t.appendChild(a)});var mm=$('main');mm.insertBefore(t,mm.firstChild)}}
/* 5. Gallery lightbox */
if(P==='gallery'){d.addEventListener('click',function(e){var i=e.target;if(i.tagName!=='IMG'||!i.closest('main')||i.width<150)return;var l=el('div','','xf-lb'),g=el('img');g.src=i.currentSrc||i.src;g.alt=i.alt;l.appendChild(g);l.onclick=function(){l.remove()};d.body.appendChild(l)});d.addEventListener('keydown',function(e){if(e.key==='Escape')$$('.xf-lb').forEach(function(x){x.remove()})})}
/* 6. Clans search (filters the clan cards) */
if(P==='clans'){var cards=function(){return $$('main .clans>*,main [class*=clan-card],main .cl>*').filter(function(x){return x.querySelector('h3,h4,b,strong')})},cs=el('div','<input type="search" placeholder="Search clans, totems…" aria-label="Search clans">','xf-box');$('main').insertBefore(cs,$('main').firstChild);cs.firstChild.oninput=function(){var q=this.value.toLowerCase();cards().forEach(function(x){x.hidden=x.textContent.toLowerCase().indexOf(q)<0})}}
/* 7. Contact form → WhatsApp */
if(P==='contact'){var f=$('form#f');if(f)f.addEventListener('submit',function(e){var t=$$('input,textarea,select',f).map(function(x){return(x.name||x.placeholder||x.id)+': '+x.value}).join('\n');e.preventDefault();window.open(wa('Message from website:\n'+t),'_blank')},true)}
/* 8. 404 search + popular pages */
if(P==='404'){var b4=el('div','<b>Popular pages</b><br>','xf-box');[['Home','index'],['Events','events'],['News','news'],['Register','register'],['Support','support']].forEach(function(p){var a=el('a',p[0],'xf-btn');a.href=p[1]+'.html';b4.appendChild(a)});($('main')||d.body).appendChild(b4)}
/* 9. Events: add to calendar (Google) for every event title found */
if(P==='events'){setTimeout(function(){var a=el('a','Add events to Google Calendar','xf-btn');a.href='https://calendar.google.com/calendar/render?action=TEMPLATE&text='+encodeURIComponent('Kampala University Nkobazambogo event')+'&details='+encodeURIComponent(location.href);a.target='_blank';a.rel='noopener';var m=$('main');m.insertBefore(a,m.firstChild)},300)}
})();
