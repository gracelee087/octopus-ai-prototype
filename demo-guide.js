// Guided demo tour (red "click here" dot + step list) and a search box for "My meetings".
// Pure presentation helpers for judges; no data or logic of the prototype is changed.
const guideSteps=[
{id:'login',when:()=>!onboarding.ready&&onboarding.step==='login',target:'#login-form button',en:'Log in. The demo account and password are already filled in.',de:'Anmelden. Demo-Konto und Passwort sind bereits eingetragen.'},
{id:'service',when:()=>!onboarding.ready&&onboarding.step==='business',target:'[data-choice="service"]',en:'Choose “A service”.',de:'„Eine Dienstleistung“ wählen.'},
{id:'zoom',when:()=>!onboarding.ready&&onboarding.step==='meeting-connectors'&&!connectorState.zoom,target:'label.connector-switch:has([data-connector="zoom"])',en:'Connect a meeting platform, e.g. Zoom.',de:'Eine Meetingplattform verbinden, z. B. Zoom.'},
{id:'zoom-next',when:()=>!onboarding.ready&&onboarding.step==='meeting-connectors'&&connectorState.zoom,target:'#connector-next',en:'Continue.',de:'Weiter.'},
{id:'crm',when:()=>!onboarding.ready&&onboarding.step==='system-connectors'&&!connectorState.crm,target:'label.connector-switch:has([data-connector="crm"])',en:'Connect a hotel system, e.g. Salesforce (CRM).',de:'Ein Hotelsystem verbinden, z. B. Salesforce (CRM).'},
{id:'crm-next',when:()=>!onboarding.ready&&onboarding.step==='system-connectors'&&connectorState.crm,target:'#connector-next',en:'Continue.',de:'Weiter.'},
{id:'hotel',when:()=>!onboarding.ready&&onboarding.step==='service',target:'[data-choice="hotel"]',en:'Choose “Hotel industry”.',de:'„Hotelwesen“ wählen.'},
{id:'role',when:()=>!onboarding.ready&&onboarding.step==='role',target:()=>`[data-choice="${demoRole()}"]`,en:'Choose your role. It matches the demo email you used.',de:'Rolle wählen. Sie passt zur verwendeten Demo-E-Mail.'},
{id:'enter',when:()=>!onboarding.ready&&onboarding.step==='members',target:'[data-enter]',en:'Open your dashboard.',de:'Dashboard öffnen.'},
{id:'absence',when:()=>onboarding.ready&&view==='personal'&&!$('#detail').open,target:'.absence-row',en:'Open the meeting recorded in your absence.',de:'Das in deiner Abwesenheit aufgezeichnete Meeting öffnen.'},
{id:'memory',when:()=>onboarding.ready&&$('#detail').open&&!!$('#memory-form')&&!$('#memory-result a'),target:'#memory-form textarea',en:'Scroll down: read the highlighted transcript, then add what you remembered, e.g. “I will send the corrected room list to the supplier by Friday.” and submit.',de:'Nach unten scrollen: markiertes Transkript lesen, dann ergänzen, z. B. „Ich werde die korrigierte Zimmerliste bis Freitag an den Lieferanten senden.“ und absenden.'},
{id:'project',when:()=>onboarding.ready&&$('#detail').open&&!!$('#memory-result a'),target:'#memory-result a',en:'Octopus created a task from your note. View the updated project.',de:'Octopus hat aus deiner Notiz eine Aufgabe erstellt. Aktualisiertes Projekt ansehen.'},
{id:'task',when:()=>onboarding.ready&&view.startsWith('project-')&&!$('#detail').open,target:'[data-new-task]',en:'Add a task and assign it to a colleague. A reason is required.',de:'Aufgabe hinzufügen und einer Kollegin zuweisen. Eine Begründung ist Pflicht.'},
{id:'meetings',when:()=>onboarding.ready&&!['personal','meetings'].includes(view)&&!view.startsWith('project-')&&!$('#detail').open,target:'#nav a[href="#meetings"]',en:'Open “My meetings” and search inside the transcripts.',de:'„Meine Meetings“ öffnen und in den Transkripten suchen.'},
{id:'search',when:()=>onboarding.ready&&view==='meetings'&&!$('#detail').open&&!(guideState.searched),target:'#meeting-search',en:'Search, e.g. “supplier” or “Lieferant”.',de:'Suchen, z. B. „Lieferant“ oder „supplier“.'},
{id:'language',when:()=>onboarding.ready&&view==='meetings'&&!$('#detail').open&&guideState.searched&&language==='en',target:'header [data-language="de"]',en:'Switch the whole interface to German.',de:'Die gesamte Oberfläche auf Deutsch umstellen.'},
{id:'logout',when:()=>onboarding.ready&&view==='meetings'&&!$('#detail').open&&guideState.searched&&language==='de',target:'#signout',en:'Log out and try the employee demo: mia@harbor-oak.example.',de:'Abmelden und die Mitarbeiter-Demo testen: mia@harbor-oak.example.'}
];
const guideState={active:true,searched:false,last:null};
try{guideState.active=localStorage.getItem('octopus-guide')!=='off'}catch{}
const guideDot=document.createElement('div');guideDot.className='guide-dot';guideDot.innerHTML='<i></i><span></span>';
const guidePanel=document.createElement('div');guidePanel.className='guide-panel';guidePanel.hidden=true;document.body.append(guidePanel);
const guideStepIndex=()=>guideSteps.findIndex(s=>{try{return s.when()}catch{return false}});
function guideTarget(step){const sel=typeof step.target==='function'?step.target():step.target;return document.querySelector(sel)}
function renderGuidePanel(index){if(!guideState.active){guidePanel.hidden=true;return}
const chapters=[['login','service','zoom','zoom-next','crm','crm-next','hotel','role','enter'],['absence'],['memory','project'],['task'],['meetings','search'],['language'],['logout']];
const names=[L('Log in & connect platforms','Anmelden & Plattformen verbinden'),L('Meeting recorded in your absence','Meeting in deiner Abwesenheit'),L('Add to Octopus Memory → project updated','Zum Octopus-Gedächtnis → Projekt aktualisiert'),L('Assign a task with a reason','Aufgabe mit Begründung zuweisen'),L('Search my meetings','Meine Meetings durchsuchen'),L('Switch language','Sprache wechseln'),L('Employee demo','Mitarbeiter-Demo')];
const current=index>=0?guideSteps[index]:null,chapter=current?chapters.findIndex(c=>c.includes(current.id)):-1;
guidePanel.innerHTML=`<div class="guide-head"><strong>${L('Demo tour','Demo-Tour')}</strong><button type="button" class="guide-close" aria-label="${L('Hide tour','Tour ausblenden')}">×</button></div><ol>${names.map((n,i)=>`<li class="${i===chapter?'current':i<chapter?'done':''}">${n}</li>`).join('')}</ol><p class="guide-hint">${current?`<b>●</b> ${L(current.en,current.de)}`:L('Follow the red dot.','Folge dem roten Punkt.')}</p>`;
guidePanel.hidden=false;
guidePanel.querySelector('.guide-close').onclick=()=>{guideState.active=false;try{localStorage.setItem('octopus-guide','off')}catch{}guideDot.remove();guidePanel.hidden=true;guideToggle.hidden=false}}
const guideToggle=document.createElement('button');guideToggle.className='guide-toggle';guideToggle.hidden=guideState.active;document.body.append(guideToggle);
guideToggle.onclick=()=>{guideState.active=true;try{localStorage.setItem('octopus-guide','on')}catch{}guideToggle.hidden=true};
function placeGuide(){guideToggle.textContent=L('Show demo tour','Demo-Tour anzeigen');
if(!guideState.active){guideDot.remove();return}
const index=guideStepIndex(),step=index>=0?guideSteps[index]:null,el=step&&guideTarget(step);
renderGuidePanel(index);
if(!el){guideDot.remove();return}
const r=el.getBoundingClientRect();
if(guideState.last!==step.id){guideState.last=step.id;if(r.top<0||r.bottom>innerHeight)el.scrollIntoView({block:'center',behavior:'smooth'})}
if(!guidePanel.classList.contains('flip'))guideState.panelRect=guidePanel.getBoundingClientRect();
const pr=guideState.panelRect;if(pr)guidePanel.classList.toggle('flip',!(r.right<pr.left-16||r.left>pr.right+16||r.bottom<pr.top-16||r.top>pr.bottom+16));
const host=el.closest('#detail')||document.body;
if(guideDot.parentElement!==host)host.append(guideDot);
guideDot.querySelector('span').textContent=L('Click here','Hier klicken');
if(host===document.body){guideDot.style.position='fixed';guideDot.style.left=(r.right-8)+'px';guideDot.style.top=(r.top-8)+'px'}
else{const h=host.getBoundingClientRect();guideDot.style.position='absolute';guideDot.style.left=(r.right-h.left+host.scrollLeft-8)+'px';guideDot.style.top=(r.top-h.top+host.scrollTop-8)+'px'}}
setInterval(placeGuide,200);
document.addEventListener('input',e=>{if(e.target.id==='meeting-search'&&e.target.value.trim())guideState.searched=true});

// Search box for "My meetings": filters cards by title, summary, minutes and transcript text in both languages.
let meetingQuery='';
const meetingCardText=m=>[m.title,translations[m.title]||'',m.summary,translations[m.summary]||'',...(m.notes||[]),...(m.notes||[]).map(n=>translations[n]||''),...(m.decisions||[]),...(m.turns||[]).flatMap(t=>[t[2],t[3]])].join(' ');
const beforeSearchMeetingList=meetingListPage;meetingListPage=function(){const html=beforeSearchMeetingList();
const bar=`<div class="filters meeting-filters"><input type="search" id="meeting-search" value="${safe(meetingQuery)}" placeholder="${L('Search meetings and transcripts …','Meetings und Transkripte durchsuchen …')}" aria-label="${L('Search meetings','Meetings suchen')}"><span class="result-count" id="meeting-search-count"></span></div>`;
return html.replace('<div class="cards">',bar+'<div class="cards">')};
function applyMeetingFilter(){const input=$('#meeting-search');if(!input)return;
const q=normalizeText(meetingQuery.trim());let shown=0,total=0;
for(const card of document.querySelectorAll('#app .meetingcard')){const id=+card.getAttribute('href').slice(9),m=meetings.find(m=>m.id===id);total++;
const hit=!q||(m&&normalizeText(meetingCardText(m)).includes(q));card.hidden=!hit;if(hit)shown++}
const count=$('#meeting-search-count');if(count)count.textContent=q?`${shown} / ${total} ${L('meetings','Meetings')}`:'';
let empty=$('#meeting-search-empty');if(q&&!shown){if(!empty){empty=document.createElement('p');empty.id='meeting-search-empty';empty.className='empty';$('#app .cards')?.after(empty)}empty.textContent=L('No meetings match this search.','Keine Meetings passen zu dieser Suche.')}else empty?.remove()}
document.addEventListener('input',e=>{if(e.target.id==='meeting-search'){meetingQuery=e.target.value;applyMeetingFilter()}});
new MutationObserver(()=>{if($('#meeting-search')&&$('#meeting-search').value!==meetingQuery)$('#meeting-search').value=meetingQuery;applyMeetingFilter()}).observe($('#app'),{childList:true});
