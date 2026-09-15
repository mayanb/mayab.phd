const D = window.SITE_DATA;
const esc = s => String(s ?? "").replace(/[&<>\"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

function collaborationSvg(className = "profile-collab", labelled = true){
  const a11y = labelled ? 'aria-label="Line drawing of a person and a robot joining hands" role="img"' : 'aria-hidden="true"';
  return `<svg class="${className} collab-svg" viewBox="0 0 132 88" ${a11y}>
    <g class="collab-human" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="24" cy="24" r="10.5" stroke-width="1.35"/>
      <path d="M13.5 23.5 C15 12.5 31 10.5 35 20" stroke-width="1.25"/>
      <path d="M18.5 36 C11 39.5 8.5 48 8.5 61" stroke-width="1.35"/>
      <path d="M29.5 36 C35 38.5 39 43.5 42.5 49" stroke-width="1.35"/>
      <path d="M42.5 49 C48 54 52 56.5 57.5 56.5" stroke-width="1.35"/>
      <circle class="collab-eye eye-human" cx="27.4" cy="24" r="1.15" fill="currentColor" stroke="none"/>
    </g>
    <g class="collab-robot" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
      <rect x="91" y="14" width="27" height="23" rx="6" stroke-width="1.35"/>
      <path d="M104.5 14 V8 M100.5 8 H108.5" stroke-width="1.15"/>
      <path d="M95 38 C92 43 90 49 89 57 M114 38 C117 43 120 49 121 57" stroke-width="1.35"/>
      <path d="M89 57 C82 57 77.5 56.5 72.5 56.5" stroke-width="1.35"/>
      <circle class="collab-eye eye-robot-left" cx="100" cy="25.5" r="1.25" fill="currentColor" stroke="none"/>
      <circle class="collab-eye eye-robot-right" cx="109" cy="25.5" r="1.25" fill="currentColor" stroke="none"/>
      <path d="M99 31 C102.5 33.5 106 33.5 110 31" stroke-width="1.05"/>
      <path d="M98 48 C102 45 107 45 111 48" stroke-width=".95" opacity=".55"/>
    </g>
    <g class="collab-handshake" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M57.5 56.5 C61 53 64 53.2 66 55.1 C68 53.2 71 53 74.5 56.5" stroke="currentColor" stroke-width="1.6"/>
      <circle cx="66" cy="55" r="2.1" fill="currentColor" stroke="none"/>
      <path class="collab-signal" d="M46 71 C58 77 75 77 87 70" stroke="currentColor" stroke-width="1" stroke-dasharray="2.5 5" opacity=".5"/>
      <circle class="signal-dot" cx="66" cy="75" r="1.8" fill="currentColor" stroke="none"/>
    </g>
    <path class="tiny-chart" d="M95 65 L101 61 L106 64 L113 55 L119 58" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" opacity=".48"/>
  </svg>`;
}

function profileCard() {
  const p = D.profile;
  return `<aside class="profile">
    <div class="avatar-wrap"><div class="avatar"><img src="assets/headshot.jpg" alt="Maya Balakrishnan"></div>${collaborationSvg("profile-collab", false)}</div>
    <h1>${esc(p.name)}</h1>
    <p class="title">${esc(p.title)}</p>
    <p class="institution">${esc(p.institution)}</p>
    <p class="contact"><a href="mailto:${esc(p.email)}">${esc(p.email)}</a></p>
    <div class="profile-links">${p.links.map(x=>`<a href="${x.href}">${esc(x.label)}</a>`).join('')}</div>
  </aside>`;
}

function pondCanvas(){ return `<canvas id="pond-canvas" aria-hidden="true"></canvas>`; }

function shell(main) {
  document.body.innerHTML = `${pondCanvas()}<div class="site-shell">${profileCard()}<div class="content-wrap">
    <header class="topnav"><nav class="navlinks"><a href="index.html">About</a><a href="research.html">Research</a><a href="teaching.html">Teaching</a><a href="service.html">Service</a><a href="news.html">News</a><a href="cv.html">CV</a></nav><div class="header-collab" aria-hidden="true">${collaborationSvg("header-collab-svg", false)}</div></header>
    <main>${main}</main><footer>© ${new Date().getFullYear()} Maya Balakrishnan</footer></div></div>`;
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.topnav a').forEach(a=>{ if(a.getAttribute('href')===page) a.classList.add('active'); });
  initCollab();
  initPond();
}
function abstractBlock(text) {
  return text ? `<details class="abstract" open><summary>Abstract</summary><p>${esc(text)}</p></details>` : '';
}
function paperLinks(p){
  if(!p.href) return '';
  const isDoi = p.href.includes('doi.org');
  return `<span class="paper-links"><a href="${p.href}">paper</a>${isDoi?`<a href="${p.href}">doi</a>`:''}</span>`;
}
function pubCard(p, showAbstract = true) {
  return `<article class="pub"><div class="pub-title-row"><h3>${esc(p.title)}</h3>${paperLinks(p)}</div><p class="authors">${esc(p.authors)}</p><p class="venue"><em>${esc(p.venue)}</em> (${esc(p.year)})${p.note ? ` · ${esc(p.note)}`:''}</p>${showAbstract ? abstractBlock(p.abstract) : ''}${p.awards?.length?`<ul class="awards-inline">${p.awards.map(a=>`<li>${esc(a)}</li>`).join('')}</ul>`:''}</article>`;
}
function workingPaperCard(p) {
  return `<article class="pub"><div class="pub-title-row"><h3>${esc(p.title)}</h3>${paperLinks(p)}</div><p class="authors">${esc(p.authors)}</p><p class="venue">${esc(p.status)}</p>${abstractBlock(p.abstract)}</article>`;
}
function progressCard(p) {
  return `<article class="pub progress"><h3>${esc(p.title)}</h3><p class="authors">${esc(p.authors)}</p><p class="venue">${esc(p.status)}</p><p class="progress-summary">${esc(p.summary)}</p></article>`;
}

function renderHome() {
  shell(`<section class="hero"><p class="eyebrow">Behavioral Operations · Human–AI Collaboration · Operational Transparency</p><h2>Welcome</h2><p>${esc(D.profile.bio)}</p><p>${esc(D.profile.bio2)}</p><p>${esc(D.profile.bioTeaching)}</p><p class="personal-note">${esc(D.profile.bioPersonal)}</p></section>
  <section><h2>Selected research</h2>${D.publications.slice(0,3).map(p=>pubCard(p,false)).join('')}<p><a class="more" href="research.html">See all research →</a></p></section>
  <section><h2>Recent news</h2><div class="timeline">${D.news.slice(0,6).map(([d,t])=>`<div><time>${esc(d)}</time><p>${esc(t.replace(/[“”]/g,'\"').replace(/[‘’]/g,"'"))}</p></div>`).join('')}</div><p><a class="more" href="news.html">More news →</a></p></section>`);
}
function renderResearch() {
 shell(`<section class="page-intro"><h2>Research</h2><p class="lede">${esc(D.researchOverview)}</p></section>
 <section><h2>Peer-reviewed publications</h2>${D.publications.map(p=>pubCard(p,true)).join('')}</section>
 <section><h2>Working papers</h2>${D.workingPapers.map(workingPaperCard).join('')}</section>
 <section><h2>Research in progress</h2><p class="section-note">Selected ongoing projects.</p>${D.researchInProgress.map(progressCard).join('')}</section>
 <section><h2>Other publications</h2><ul class="clean-list">${D.otherPublications.map(p=>`<li><span class="year">${esc(p.year)}</span><div><strong>${p.href?`<a href="${p.href}">${esc(p.title)}</a>`:esc(p.title)}</strong><br>${p.authors?esc(p.authors)+' · ':''}<em>${esc(p.venue)}</em></div></li>`).join('')}</ul></section>`);
}
function renderTeaching(){
 shell(`<section class="page-intro"><h2>Teaching</h2><p class="lede">At UT Dallas, I teach courses in AI, supply chain management, probability, and statistics. I focus on helping students understand how analytical methods work and use them to make concrete business decisions.</p></section>
 ${D.teaching.map(g=>`<section class="teaching-group"><h2 class="institution-heading">${esc(g.institution)}</h2>${g.courses.map(c=>`<article class="course ${c.highlights?'featured-course':''}"><h3>${esc(c.name)}</h3><div class="course-body"><p>${esc(c.detail)}</p>${c.detail2?`<p>${esc(c.detail2)}</p>`:''}${c.highlights?`<ul class="course-highlights">${c.highlights.map(h=>`<li>${esc(h)}</li>`).join('')}</ul>`:''}</div></article>`).join('')}</section>`).join('')}
 <section><h2>Selected student feedback <span class="heading-note">AI in Supply Chain Management</span></h2><blockquote>“This was the best class I have taken at this university by far!”</blockquote><blockquote>“Would love a second course to learn more!”</blockquote><p class="muted">AI in Supply Chain Management course evaluations: undergraduate course 5.0/5.0 and instructor 5.0/5.0; graduate course 4.90/5.0 and instructor 5.0/5.0.</p></section>`);
}
function simpleList(items){ return `<ul class="clean-list">${items.map(([y,t])=>`<li><span class="year">${esc(y)}</span><div>${esc(t)}</div></li>`).join('')}</ul>`; }
function renderService(){
 shell(`<section><h2>Awards & service</h2></section><section><h2>Awards</h2>${simpleList(D.awards)}</section><section><h2>Service</h2>${simpleList(D.service)}</section>`);
}
function renderNews(){ shell(`<section><h2>News</h2><div class="timeline full">${D.news.map(([d,t])=>`<div><time>${esc(d)}</time><p>${esc(t.replace(/[“”]/g,'"').replace(/[‘’]/g,"'"))}</p></div>`).join('')}</div></section>`); }
function renderCV(){ shell(`<section><h2>Curriculum Vitae</h2><p><a class="button" href="assets/Maya_Balakrishnan_CV.pdf" download>Download CV (PDF)</a></p><object class="cv-frame" data="assets/Maya_Balakrishnan_CV.pdf" type="application/pdf"><p>Your browser cannot display the PDF inline. <a href="assets/Maya_Balakrishnan_CV.pdf">Download it here.</a></p></object></section>`); }

function initCollab(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const svgs = [...document.querySelectorAll('.collab-svg')];
  if(!svgs.length) return;
  let raf = null;
  function moveEyes(clientX, clientY){
    svgs.forEach(svg=>{
      const eyes = [...svg.querySelectorAll('.collab-eye')];
      if(!eyes.length) return;
      const r = svg.getBoundingClientRect();
      const cx = r.left + r.width/2;
      const cy = r.top + r.height/2;
      const dx = Math.max(-1, Math.min(1, (clientX-cx)/(Math.max(r.width,1)*.7)));
      const dy = Math.max(-1, Math.min(1, (clientY-cy)/(Math.max(r.height,1)*.7)));
      eyes.forEach((eye,i)=>{
        const scale = i===0 ? 1.25 : 1.05;
        eye.style.transform = `translate(${(dx*scale).toFixed(2)}px, ${(dy*scale).toFixed(2)}px)`;
      });
    });
  }
  addEventListener('pointermove', e=>{
    if(raf) cancelAnimationFrame(raf);
    raf=requestAnimationFrame(()=>moveEyes(e.clientX,e.clientY));
  }, {passive:true});
}

function initPond(){
  const canvas = document.getElementById('pond-canvas');
  if(!canvas || matchMedia('(prefers-reduced-motion: reduce)').matches || innerWidth < 801) return;
  const ctx = canvas.getContext('2d');
  let dpr = Math.min(devicePixelRatio || 1, 2), w=0, h=0, ripples=[], last=0;
  function resize(){ w=innerWidth; h=innerHeight; canvas.width=w*dpr; canvas.height=h*dpr; canvas.style.width=w+'px'; canvas.style.height=h+'px'; ctx.setTransform(dpr,0,0,dpr,0,0); }
  function add(x,y,soft=true){ ripples.push({x,y,r:soft?4:2,a:soft?.12:.18,s:soft?0.62:0.9,max:soft?82:118}); if(ripples.length>22)ripples.shift(); }
  addEventListener('resize',resize,{passive:true}); resize();
  add(w*.78,h*.15,true);
  addEventListener('pointermove',e=>{ const now=performance.now(); if(now-last>135){add(e.clientX,e.clientY,true);last=now;} },{passive:true});
  addEventListener('pointerdown',e=>add(e.clientX,e.clientY,false),{passive:true});
  function draw(){ ctx.clearRect(0,0,w,h); ripples.forEach(q=>{q.r+=q.s;q.a*=.987;ctx.beginPath();ctx.ellipse(q.x,q.y,q.r,q.r*.34,0,0,Math.PI*2);ctx.strokeStyle=`rgba(79,113,107,${q.a})`;ctx.lineWidth=.8;ctx.stroke();}); ripples=ripples.filter(q=>q.a>.006&&q.r<q.max); requestAnimationFrame(draw); }
  requestAnimationFrame(draw);
}

const page = document.body.dataset.page;
({home:renderHome,research:renderResearch,teaching:renderTeaching,service:renderService,news:renderNews,cv:renderCV}[page] || renderHome)();
