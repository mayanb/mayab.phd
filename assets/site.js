const D = window.SITE_DATA;
const esc = s => String(s ?? "").replace(/[&<>\"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

function doodleSvg(){
  return `<svg class="profile-doodle" viewBox="0 0 96 70" aria-hidden="true">
    <path d="M7 58 C22 42, 38 49, 45 28 C51 12, 65 10, 75 18" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/>
    <path d="M45 30 C35 24, 28 27, 25 34 C34 36, 42 35, 45 30Z" fill="none" stroke="currentColor" stroke-width="1.05"/>
    <path d="M61 18 C60 8, 67 3, 77 5 C76 13, 70 18, 61 18Z" fill="none" stroke="currentColor" stroke-width="1.05"/>
    <path d="M5 61 C23 66, 48 65, 83 58" fill="none" stroke="currentColor" stroke-width=".9" stroke-linecap="round" opacity=".72"/>
  </svg>`;
}

function profileCard() {
  const p = D.profile;
  return `<aside class="profile">
    <div class="avatar-wrap"><div class="avatar placeholder" aria-label="Headshot placeholder"><span>MB</span></div>${doodleSvg()}</div>
    <h1>${esc(p.name)}</h1>
    <p class="title">${esc(p.title)}</p>
    <p class="institution">${esc(p.institution)}</p>
    <p class="contact"><a href="mailto:${esc(p.email)}">${esc(p.email)}</a></p>
    <div class="profile-links">${p.links.map(x=>`<a href="${x.href}">${esc(x.label)}</a>`).join('')}</div>
  </aside>`;
}

function pondCanvas(){ return `<canvas id="pond-canvas" aria-hidden="true"></canvas>`; }
function heroRipples(){ return `<svg class="hero-ripples" viewBox="0 0 160 100" aria-hidden="true"><ellipse cx="81" cy="48" rx="28" ry="10"/><ellipse cx="81" cy="48" rx="48" ry="18"/><ellipse cx="81" cy="48" rx="70" ry="27"/></svg>`; }

function shell(main) {
  document.body.innerHTML = `${pondCanvas()}<div class="site-shell">${profileCard()}<div class="content-wrap">
    <header class="topnav"><a href="index.html">About</a><a href="research.html">Research</a><a href="teaching.html">Teaching</a><a href="service.html">Service</a><a href="news.html">News</a><a href="cv.html">CV</a></header>
    <main>${main}</main><footer>© ${new Date().getFullYear()} Maya Balakrishnan</footer></div></div>`;
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.topnav a').forEach(a=>{ if(a.getAttribute('href')===page) a.classList.add('active'); });
  initPond();
}

function abstractBlock(text) {
  return text ? `<details class="abstract" open><summary>Abstract</summary><p>${esc(text)}</p></details>` : '';
}
function paperLinks(p){
  if(!p.href) return '';
  const isDoi = p.href.includes('doi.org');
  return `<span class="paper-links"><a href="${p.href}">${isDoi?'paper':'paper'}</a>${isDoi?`<a href="${p.href}">doi</a>`:''}</span>`;
}
function pubCard(p, showAbstract = true) {
  return `<article class="pub"><div class="pub-title-row"><h3>${esc(p.title)}</h3>${paperLinks(p)}</div><p class="authors">${esc(p.authors)}</p><p class="venue"><em>${esc(p.venue)}</em> (${esc(p.year)})${p.note ? ` · ${esc(p.note)}`:''}</p>${showAbstract ? abstractBlock(p.abstract) : ''}${p.awards?.length?`<ul class="awards-inline">${p.awards.map(a=>`<li>${esc(a)}</li>`).join('')}</ul>`:''}</article>`;
}
function workingPaperCard(p) {
  return `<article class="pub"><div class="pub-title-row"><h3>${esc(p.title)}</h3>${paperLinks(p)}</div><p class="authors">${esc(p.authors)}</p><p class="venue">${esc(p.status)}</p>${abstractBlock(p.abstract)}</article>`;
}
function progressCard(p) {
  return `<article class="pub progress"><h3>${esc(p.title)}</h3><p class="authors">${esc(p.authors)}</p><p class="venue">${esc(p.status)}</p><p>${esc(p.summary)}</p></article>`;
}

function renderHome() {
  shell(`<section class="hero">${heroRipples()}<p class="eyebrow">Behavioral Operations · Human–AI Collaboration · Operational Transparency</p><h2>Welcome</h2><p>${esc(D.profile.bio)}</p><p>${esc(D.profile.bio2)}</p></section>
  <section><h2>Selected research</h2>${D.publications.slice(0,3).map(p=>pubCard(p,false)).join('')}<p><a class="more" href="research.html">See all research →</a></p></section>
  <section><h2>Recent news</h2><div class="timeline">${D.news.slice(0,6).map(([d,t])=>`<div><time>${esc(d)}</time><p>${esc(t)}</p></div>`).join('')}</div><p><a class="more" href="news.html">More news →</a></p></section>`);
}
function renderResearch() {
 shell(`<section><h2>Research</h2><p class="lede">${esc(D.researchOverview)}</p></section>
 <section><h2>Peer-reviewed publications</h2>${D.publications.map(pubCard).join('')}</section>
 <section><h2>Working papers</h2>${D.workingPapers.map(workingPaperCard).join('')}</section>
 <section><h2>Research in progress</h2><p class="section-note">Selected ongoing projects.</p>${D.researchInProgress.map(progressCard).join('')}</section>
 <section><h2>Other publications</h2><ul class="clean-list">${D.otherPublications.map(p=>`<li><span class="year">${esc(p.year)}</span><div><strong>${p.href?`<a href="${p.href}">${esc(p.title)}</a>`:esc(p.title)}</strong><br>${p.authors?esc(p.authors)+' · ':''}<em>${esc(p.venue)}</em></div></li>`).join('')}</ul></section>`);
}
function renderTeaching(){
 shell(`<section><h2>Teaching</h2><p class="lede">I design courses that help students understand both how AI methods work and how to use them thoughtfully in operational decision-making.</p></section>
 ${D.teaching.map(g=>`<section class="teaching-group"><h2 class="institution-heading">${esc(g.institution)}</h2>${g.courses.map(c=>`<article class="course"><h3>${esc(c.name)}</h3><p>${esc(c.detail)}</p></article>`).join('')}</section>`).join('')}
 <section class="callout"><p class="eyebrow">Teaching innovation</p><h2>${esc(D.teachingInnovation.title)}</h2><p><strong>${esc(D.teachingInnovation.venue)}</strong></p><p>${esc(D.teachingInnovation.text)}</p></section>
 <section><h2>Selected student feedback</h2><blockquote>“This was the best class I have taken at this university by far!”</blockquote><blockquote>“Would love a second course to learn more!”</blockquote><p class="muted">Undergraduate AI in Supply Chain course evaluation: course 5.0/5.0; instructor 5.0/5.0. Graduate course evaluation: course 4.90/5.0; instructor 5.0/5.0.</p></section>`);
}
function simpleList(items){ return `<ul class="clean-list">${items.map(([y,t])=>`<li><span class="year">${esc(y)}</span><div>${esc(t)}</div></li>`).join('')}</ul>`; }
function renderService(){
 shell(`<section><h2>Awards & service</h2></section><section><h2>Awards</h2>${simpleList(D.awards)}</section><section><h2>Service</h2>${simpleList(D.service)}</section><section><h2>Invited talks</h2>${simpleList(D.invitedTalks)}</section><section><h2>Recent conference presentations</h2><div class="timeline">${D.recentPresentations.map(([d,t,v])=>`<div><time>${esc(d)}</time><p><strong>${esc(t)}</strong><br><span class="muted">${esc(v)}</span></p></div>`).join('')}</div></section>`);
}
function renderNews(){ shell(`<section><h2>News</h2><div class="timeline full">${D.news.map(([d,t])=>`<div><time>${esc(d)}</time><p>${esc(t)}</p></div>`).join('')}</div></section>`); }
function renderCV(){ shell(`<section><h2>Curriculum Vitae</h2><p><a class="button" href="assets/Maya_Balakrishnan_CV.pdf" download>Download CV (PDF)</a></p><object class="cv-frame" data="assets/Maya_Balakrishnan_CV.pdf" type="application/pdf"><p>Your browser cannot display the PDF inline. <a href="assets/Maya_Balakrishnan_CV.pdf">Download it here.</a></p></object></section>`); }

function initPond(){
  const canvas = document.getElementById('pond-canvas');
  if(!canvas || matchMedia('(prefers-reduced-motion: reduce)').matches || innerWidth < 801) return;
  const ctx = canvas.getContext('2d');
  let dpr = Math.min(devicePixelRatio || 1, 2), w=0, h=0, ripples=[], last=0;
  function resize(){ w=innerWidth; h=innerHeight; canvas.width=w*dpr; canvas.height=h*dpr; canvas.style.width=w+'px'; canvas.style.height=h+'px'; ctx.setTransform(dpr,0,0,dpr,0,0); }
  function add(x,y,soft=true){ ripples.push({x,y,r:soft?4:2,a:soft?.12:.18,s:soft?0.62:0.9,max:soft?82:118}); if(ripples.length>22)ripples.shift(); }
  add(w*.78,h*.15,true);
  addEventListener('resize',resize,{passive:true}); resize();
  addEventListener('pointermove',e=>{ const now=performance.now(); if(now-last>135){add(e.clientX,e.clientY,true);last=now;} },{passive:true});
  addEventListener('pointerdown',e=>add(e.clientX,e.clientY,false),{passive:true});
  function draw(){ ctx.clearRect(0,0,w,h); ripples.forEach(q=>{q.r+=q.s;q.a*=.987;ctx.beginPath();ctx.ellipse(q.x,q.y,q.r,q.r*.34,0,0,Math.PI*2);ctx.strokeStyle=`rgba(79,113,107,${q.a})`;ctx.lineWidth=.8;ctx.stroke();}); ripples=ripples.filter(q=>q.a>.006&&q.r<q.max); requestAnimationFrame(draw); }
  requestAnimationFrame(draw);
}

const page = document.body.dataset.page;
({home:renderHome,research:renderResearch,teaching:renderTeaching,service:renderService,news:renderNews,cv:renderCV}[page] || renderHome)();
