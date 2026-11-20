(function(){
 var d=document,secs=[].slice.call(d.querySelectorAll('main>section,main>.sec,main>.low,main>.cols,main>.quick,main>.partners'));
 function E(t,i){var e=d.createElement(t);if(i)e.id=i;d.body.appendChild(e);return e}
 var bar=E('div','ex-bar'),top=E('button','ex-top');top.textContent='↑';top.setAttribute('aria-label','Back to top');
 top.onclick=function(){scrollTo({top:0,behavior:'smooth'})};
 var dots=E('nav','ex-dots');dots.setAttribute('aria-label','Sections');
 secs.forEach(function(s,i){s.classList.add('rv');if(!s.id)s.id='ex-s'+i;var a=d.createElement('a');a.href='#'+s.id;a.title='Section '+(i+1);a.setAttribute('aria-label','Go to section '+(i+1));dots.appendChild(a)});
 var h=d.querySelector('.hero');if(h){var c=d.createElement('a');c.id='ex-cue';c.href='#'+(secs[0]?secs[0].id:'');c.textContent='Scroll ↓';h.appendChild(c)}
 if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');var a=dots.querySelector('[href="#'+e.target.id+'"]');[].forEach.call(dots.children,function(x){x.classList.remove('on')});if(a)a.classList.add('on');count(e.target)}})},{threshold:.25});secs.forEach(function(s){io.observe(s)})}else secs.forEach(function(s){s.classList.add('on')});
 function count(root){[].forEach.call(root.querySelectorAll('strong'),function(n){var t=n.textContent.trim(),m=t.match(/^(\d[\d,]*)(\+?)$/);if(!m||n.dataset.c||n.id)return;n.dataset.c=1;var end=+m[1].replace(/,/g,''),st=null;(function f(ts){st=st||ts;var p=Math.min((ts-st)/1200,1);n.textContent=Math.round(end*p).toLocaleString()+m[2];if(p<1)requestAnimationFrame(f)})(performance.now())})}
 addEventListener('scroll',function(){var y=scrollY,m=d.documentElement.scrollHeight-innerHeight;bar.style.width=(m>0?y/m*100:0)+'%';top.classList.toggle('on',y>600)},{passive:true});
})();
/* hide any <img> whose file no longer exists */
(function(){function h(i){i.style.display='none'}
addEventListener('error',function(e){if(e.target&&e.target.tagName==='IMG')h(e.target)},true);
function sweep(){[].forEach.call(document.images,function(i){if(i.complete&&!i.naturalWidth)h(i)})}
addEventListener('load',function(){sweep();setTimeout(sweep,800)});sweep()})();
