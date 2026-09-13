// Guided onboarding (red "click here" dot on the next step until the dashboard opens) and a search box for "My meetings".
// Pure presentation helpers for judges; no data or logic of the prototype is changed.
const guideSteps=[
{id:'login',when:()=>!onboarding.ready&&onboarding.step==='login',target:'#login-form button'},
{id:'service',when:()=>!onboarding.ready&&onboarding.step==='business',target:'[data-choice="service"]'},
{id:'zoom',when:()=>!onboarding.ready&&onboarding.step==='meeting-connectors'&&!connectorState.zoom,target:'label.connector-switch:has([data-connector="zoom"])'},
{id:'zoom-next',when:()=>!onboarding.ready&&onboarding.step==='meeting-connectors'&&connectorState.zoom,target:'#connector-next'},
{id:'crm',when:()=>!onboarding.ready&&onboarding.step==='system-connectors'&&!connectorState.crm,target:'label.connector-switch:has([data-connector="crm"])'},
{id:'crm-next',when:()=>!onboarding.ready&&onboarding.step==='system-connectors'&&connectorState.crm,target:'#connector-next'},
{id:'hotel',when:()=>!onboarding.ready&&onboarding.step==='service',target:'[data-choice="hotel"]'},
{id:'role',when:()=>!onboarding.ready&&onboarding.step==='role',target:()=>`[data-choice="${demoRole()}"]`},
{id:'enter',when:()=>!onboarding.ready&&onboarding.step==='members',target:'[data-enter]'}
];
const guideState={last:null};
const guideDot=document.createElement('div');guideDot.className='guide-dot';guideDot.innerHTML='<i></i><span></span>';
const guideStepIndex=()=>guideSteps.findIndex(s=>{try{return s.when()}catch{return false}});
function guideTarget(step){const sel=typeof step.target==='function'?step.target():step.target;return document.querySelector(sel)}
function placeGuide(){const index=guideStepIndex(),step=index>=0?guideSteps[index]:null,el=step&&guideTarget(step);
if(!el){guideDot.remove();return}
const r=el.getBoundingClientRect();
if(guideState.last!==step.id){guideState.last=step.id;if(r.top<0||r.bottom>innerHeight)el.scrollIntoView({block:'center',behavior:'smooth'})}
if(guideDot.parentElement!==document.body)document.body.append(guideDot);
guideDot.querySelector('span').textContent=L('Click here','Hier klicken');
guideDot.style.left=(r.left-8)+'px';guideDot.style.top=(r.top-8)+'px'}
setInterval(placeGuide,200);

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
