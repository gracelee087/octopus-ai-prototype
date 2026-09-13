// Manager settings: change connected meeting platforms and business systems later, and manage the team.
function settingsPage(){return `<div class="heading"><div><p class="eyebrow">${safe(onboarding.organization)} · ${L('SETTINGS','EINSTELLUNGEN')}</p><h1>${L('Settings','Einstellungen')}</h1><p class="subtitle">${onboarding.role==='manager'?L('Connections and team membership can be changed here at any time.','Verbindungen und Teammitglieder können hier jederzeit geändert werden.'):L('Your meeting platform and system connections can be changed here at any time.','Deine Verbindungen zu Meetingplattformen und Systemen können hier jederzeit geändert werden.')}</p></div></div><section class="panel spaced settings-section"><div class="panelhead"><h2>${L('Meeting platforms','Meetingplattformen')}</h2><small>${L('Which platforms do you use to meet with your team?','Welche Plattformen nutzt ihr für Meetings mit eurem Team?')}</small></div><div class="connector-grid">${connectorCardsHTML(meetingConnectors)}</div></section><section class="panel spaced settings-section"><div class="panelhead"><h2>${L('Business systems','Geschäftssysteme')}</h2><small>${L('Which systems do you work with?','Mit welchen Systemen arbeitet ihr?')}</small></div><div class="connector-grid">${connectorCardsHTML(systemConnectors)}</div><p class="demo-note">${L('Simulated connections for this prototype. No account authorization or data transfer takes place.','Simulierte Verbindungen für diesen Prototyp. Es erfolgen keine Kontofreigabe und keine Datenübertragung.')}</p></section>${onboarding.role==='manager'?`<section class="panel spaced settings-section"><div class="panelhead"><h2>${L('Team','Team')}</h2><button class="button primary" data-add-member>＋ ${L('Add employee','Mitarbeiter/in hinzufügen')}</button></div>${memberList()}<p class="demo-note">${L('Employees log in with the email you add here. Session-only demo; no invitation is sent.','Mitarbeitende melden sich mit der hier hinterlegten E-Mail an. Demo für diese Sitzung; es wird keine Einladung versendet.')}</p></section>`:''}`}
document.addEventListener('change',e=>{const el=e.target.closest('#app [data-connector]');
if(!el)return;
connectorState[el.dataset.connector]=el.checked;
const status=$('#status-'+el.dataset.connector);
if(status){status.textContent=el.checked?L('Connected · demo','Verbunden · Demo'):L('Not connected','Nicht verbunden');status.classList.toggle('connected',el.checked)}
toast(el.checked?L('Connected','Verbunden'):L('Disconnected','Getrennt'))});
const renderBeforeSettings=render;render=function(){if(onboarding.ready&&view==='settings'){
$('#app').innerHTML=localizedHTML(settingsPage());
nav();syncLanguage();updateShell();
$('#app').querySelectorAll('[data-add-member]').forEach(b=>b.onclick=addMemberDialog);
$('#app').querySelectorAll('[data-preview]').forEach(b=>b.onclick=()=>{employeeFilter=b.dataset.preview;dashboardMode='employees';view='personal';history.replaceState(null,'','#personal');render()});
return}renderBeforeSettings()};
const navBeforeSettings=nav;nav=function(){navBeforeSettings();
if(!onboarding.ready)return;
$('#nav').insertAdjacentHTML('beforeend',`<a href="#settings" class="${view==='settings'?'active':''}"><span>⚙</span>${L('Settings','Einstellungen')}</a>`);
if(view==='settings')$('#crumb').textContent=workspaceTitle()+' / '+L('Settings','Einstellungen')};
