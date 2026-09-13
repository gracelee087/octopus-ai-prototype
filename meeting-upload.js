// Upload a Zoom recording on "Add meeting": Gemini (Vertex AI) listens and writes the transcript,
// minutes and decisions; the form is pre-filled and the saved meeting carries the bilingual transcript.
const recordingState={file:null,result:null,status:'',error:'',prefill:null,busy:false,selected:new Set(),selectedUpdates:new Set(),projectId:''};
const recordingKinds={none:'','':'',task:'task',deadline:'deadline',decision:'decision',commitment:'commitment',information:'information'};
function recordingPanelHTML(){const r=recordingState.result;
return `<section class="panel recording-panel" id="recording-panel"><div class="recording-head"><span class="recording-icon">◉</span><div><h2>${L('Upload a Zoom recording','Zoom-Aufnahme hochladen')}</h2><p>${L('Gemini on Vertex AI listens to the meeting, writes the transcript and pre-fills the minutes below. You can still edit everything before saving.','Gemini auf Vertex AI hört das Meeting, schreibt das Transkript und füllt das Protokoll unten vor. Du kannst alles vor dem Speichern bearbeiten.')}</p></div></div><form id="recording-form" class="recording-form"><label class="recording-file"><input type="file" name="recording" accept="audio/*,video/mp4,video/webm,video/quicktime,.m4a,.mp3,.wav,.mp4,.webm,.mov"><span>${recordingState.file?safe(recordingState.file.name)+' · '+Math.round(recordingState.file.size/1048576*10)/10+' MB':L('Choose a video or audio file (max. 30 MB)','Video- oder Audiodatei wählen (max. 30 MB)')}</span></label><button class="button primary" type="submit" ${recordingState.busy||!recordingState.file?'disabled':''}>${recordingState.busy?L('Gemini is listening …','Gemini hört zu …'):L('Transcribe with Gemini','Mit Gemini transkribieren')} →</button></form>${recordingState.status?`<p class="recording-status">${safe(recordingState.status)}</p>`:''}${recordingState.error?`<p class="error-message" role="alert">${safe(recordingState.error)}</p>`:''}${r?`<div class="recording-result"><p class="transcript-label">${L('Transcript written by','Transkript erstellt von')} ${safe(r.model)} · ${r.turns.length} ${L('speaking turns','Beiträge')} · ${L('language','Sprache')}: ${safe(r.language||'?')}</p><div class="highlight-legend">${Object.entries(highlightNames).map(([key,names])=>`<span class="extract-${key}">${L(...names)}</span>`).join('')}</div><div class="recording-turns">${r.turns.map(t=>`<article class="transcript-turn"><time>${safe(t.time)}</time><div><strong>${safe(t.speaker)}</strong><p>${t.kind?`<mark class="extract-${t.kind}">${safe(L(t.en,t.de))}</mark>`:safe(L(t.en,t.de))}</p></div></article>`).join('')}</div>${(r.updates||[]).length?`<h3>${L('Updates to existing tasks','Aktualisierungen bestehender Aufgaben')}</h3><div class="detected-tasks">${r.updates.map((u,i)=>{const t=tasks.find(t=>t.id===u.taskId);if(!t)return '';return `<label class="detected-task detected-update"><input type="checkbox" data-detected-update="${i}" ${recordingState.selectedUpdates.has(i)?'checked':''}><div><strong>${safe(tr(t.title))}</strong><small><span class="badge donebadge">${L('Existing task','Bestehende Aufgabe')} #${t.id}</span> ${safe(people[t.owner]?.name||'')} · ${tr(t.status)} ${t.progress}%${u.status&&u.status!=='unchanged'?` → <b>${tr(statusFromUpdate[u.status])}</b>`:''}${u.progress>=0?` → <b>${u.progress}%</b>`:''}${u.due?` · ${L('new deadline','neuer Termin')}: <b>${date(u.due)}</b>`:''}</small><p>${safe(L(u.note_en,u.note_de))}</p></div></label>`}).join('')}</div><p class="demo-note">${L('Octopus matched these statements to tasks that already exist. Checked items update the task instead of creating a duplicate.','Octopus hat diese Aussagen bestehenden Aufgaben zugeordnet. Markierte Einträge aktualisieren die Aufgabe, statt ein Duplikat anzulegen.')}</p>`:''}<h3>${L('New tasks, commitments & deadlines found by Octopus','Von Octopus erkannte neue Aufgaben, Zusagen & Termine')}</h3>${r.tasks.length?`<div class="detected-tasks">${r.tasks.map((t,i)=>`<label class="detected-task"><input type="checkbox" name="task-${i}" data-detected="${i}" ${recordingState.selected.has(i)?'checked':''}><div><strong>${safe(L(t.title_en,t.title_de))}</strong><small><span class="badge ${t.kind==='dependency'?'risk':t.kind==='commitment'?'donebadge':'open'}">${t.kind==='dependency'?L('Dependency','Abhängigkeit'):t.kind==='commitment'?L('Commitment','Zusage'):L('Task','Aufgabe')}</span> ${L('Owner','Verantwortlich')}: ${safe(t.owner||L('unclear','unklar'))} · ${L('Due','Fällig')}: ${t.due?date(t.due):L('not specified','nicht angegeben')}</small><p>„${safe(L(t.detail_en,t.detail_de))}“</p></div></label>`).join('')}</div><p class="demo-note">${L('Checked items become tasks linked to this meeting when you save it. Uncheck anything Octopus got wrong.','Markierte Einträge werden beim Speichern zu Aufgaben, die mit diesem Meeting verknüpft sind. Entferne den Haken bei falsch Erkanntem.')}</p>`:`<p class="empty">${L('No tasks or commitments were spoken in this recording.','In dieser Aufnahme wurden keine Aufgaben oder Zusagen genannt.')}</p>`}<p class="demo-note">${L('The form below has been filled from this recording. Check the wording, then save the meeting.','Das Formular unten wurde aus dieser Aufnahme befüllt. Prüfe die Formulierung und speichere dann das Meeting.')}</p></div>`:''}</section>`}
function fillMeetingForm(){const f=$('#meeting-form'),r=recordingState.result;
if(!f||!r)return;
const prefill={title:L(r.title_en,r.title_de),notes:(language==='en'?r.minutes_en:r.minutes_de).join('\n'),decisions:(language==='en'?r.decisions_en:r.decisions_de).join('\n')};
f.elements.namedItem('title').value=prefill.title;
if(/^\d{4}-\d{2}-\d{2}$/.test(r.date||''))f.date.value=r.date;
if([...f.category.options].some(o=>o.value===r.department))f.category.value=r.department;
f.notes.value=prefill.notes;
f.decisions.value=prefill.decisions;
recordingState.prefill=prefill}
const statusFromUpdate={open:'Offen',in_progress:'In Arbeit',blocked:'Blockiert',done:'Erledigt'};
function activeProjectsForMeeting(){return (typeof activeHotelProjects==='function'?activeHotelProjects():[]).filter(p=>{const s=projectStats(p);return !s.count||s.completed<s.count})}
function selectedProject(){const id=$('#meeting-form')?.elements.projectId?.value||recordingState.projectId||'';return activeProjectsForMeeting().find(p=>p.id===id)||null}
function openTasksForProject(p){return (p?projectTasks(p):tasks).filter(t=>t.status!=='Erledigt').slice(0,40).map(t=>({id:t.id,title:tr(t.title),owner:people[t.owner]?.name,due:t.due,status:tr(t.status),progress:t.progress}))}
function mountProjectSelect(form){if(form.elements.projectId)return;
const col=form.querySelector('.twocol');if(!col)return;
col.insertAdjacentHTML('afterend',`<label>${L('Project','Projekt')}<select name="projectId"><option value="">${L('No project · general meeting','Kein Projekt · allgemeines Meeting')}</option>${activeProjectsForMeeting().map(p=>`<option value="${p.id}" ${recordingState.projectId===p.id?'selected':''}>${safe(pickText(p.name))} · ${projectStats(p).open} ${L('open tasks','offene Aufgaben')}</option>`).join('')}</select><small>${L('Linking a project lets Octopus update its existing tasks from this meeting instead of creating duplicates.','Mit Projektverknüpfung aktualisiert Octopus die bestehenden Aufgaben aus diesem Meeting, statt Duplikate anzulegen.')}</small></label>`);
form.elements.projectId.onchange=e=>{recordingState.projectId=e.target.value}}
function mountRecordingPanel(){const form=$('#meeting-form');
if(!form)return;mountProjectSelect(form);
if($('#recording-panel'))return;
const subtitle=$('#app .heading .subtitle');
if(subtitle)subtitle.textContent=L('Upload a Zoom recording and let Gemini write the transcript, or enter the minutes manually.','Lade eine Zoom-Aufnahme hoch und lass Gemini das Transkript schreiben, oder erfasse das Protokoll manuell.');
form.insertAdjacentHTML('beforebegin',recordingPanelHTML());
const panel=$('#recording-panel');
panel.querySelector('input[type=file]').onchange=e=>{recordingState.file=e.target.files[0]||null;recordingState.error='';recordingState.status='';
panel.outerHTML=recordingPanelHTML();mountRecordingWiring()};
mountRecordingWiring();
if(recordingState.result)fillMeetingForm()}
function mountRecordingWiring(){const panel=$('#recording-panel');
if(!panel)return;
panel.querySelector('input[type=file]').onchange=e=>{recordingState.file=e.target.files[0]||null;recordingState.error='';recordingState.status='';
panel.outerHTML=recordingPanelHTML();mountRecordingWiring()};
panel.querySelectorAll('[data-detected]').forEach(el=>el.onchange=()=>{el.checked?recordingState.selected.add(+el.dataset.detected):recordingState.selected.delete(+el.dataset.detected)});
panel.querySelectorAll('[data-detected-update]').forEach(el=>el.onchange=()=>{el.checked?recordingState.selectedUpdates.add(+el.dataset.detectedUpdate):recordingState.selectedUpdates.delete(+el.dataset.detectedUpdate)});
panel.querySelector('#recording-form').onsubmit=async e=>{e.preventDefault();
if(!recordingState.file||recordingState.busy)return;
if(recordingState.file.size>30*1048576){recordingState.error=L('This file is larger than 30 MB. Export a shorter clip or audio only.','Diese Datei ist größer als 30 MB. Exportiere einen kürzeren Clip oder nur die Tonspur.');panel.outerHTML=recordingPanelHTML();mountRecordingWiring();return}
recordingState.busy=true;recordingState.error='';recordingState.result=null;
recordingState.status=L('Uploading recording … 0%','Aufnahme wird hochgeladen … 0%');
panel.outerHTML=recordingPanelHTML();mountRecordingWiring();
const body=new FormData();body.append('file',recordingState.file);body.append('people',JSON.stringify(people.map(p=>p.name)));body.append('meeting_date',$('#meeting-form')?.date?.value||'');body.append('existing_tasks',JSON.stringify(openTasksForProject(selectedProject())));
try{const setStatus=s=>{recordingState.status=s;const el=$('#recording-panel .recording-status');if(el)el.textContent=s};
const {ok,data}=await new Promise((resolve,reject)=>{const xhr=new XMLHttpRequest();xhr.open('POST','/api/transcribe');xhr.timeout=300000;
xhr.upload.onprogress=ev=>{if(ev.lengthComputable){const pct=Math.round(ev.loaded/ev.total*100);setStatus(pct<100?L(`Uploading recording … ${pct}%`,`Aufnahme wird hochgeladen … ${pct}%`):L('Upload complete · extracting audio and asking Gemini to listen (20–90 s) …','Upload abgeschlossen · Tonspur wird extrahiert, Gemini hört zu (20–90 s) …'))}};
xhr.onload=()=>{let d={};try{d=JSON.parse(xhr.responseText)}catch{}resolve({ok:xhr.status>=200&&xhr.status<300,data:d})};
xhr.onerror=()=>reject(Error(L('Network error during upload.','Netzwerkfehler beim Hochladen.')));xhr.ontimeout=()=>reject(Error(L('The request timed out. Try a shorter clip or an audio-only export.','Zeitüberschreitung. Versuche einen kürzeren Clip oder nur die Tonspur.')));xhr.send(body)});
if(!ok)throw Error(data.detail||L('Transcription failed.','Transkription fehlgeschlagen.'));
resolveSpeakers(data);recordingState.result=data;recordingState.status='';recordingState.selected=new Set((data.tasks||[]).map((t,i)=>i));recordingState.selectedUpdates=new Set((data.updates||[]).map((u,i)=>i));
toast(L('Transcript ready · form pre-filled','Transkript fertig · Formular vorbefüllt'))}catch(error){recordingState.error=String(error.message||error)}
recordingState.busy=false;
const current=$('#recording-panel');
if(current){current.outerHTML=recordingPanelHTML();mountRecordingWiring();fillMeetingForm()}}}
function resolveSpeakers(r){const team=people.slice(0,6),first=n=>String(n||'').trim().toLowerCase().split(/\s+/)[0];
const text=r.turns.map(t=>t.en+' '+t.de).join(' ').toLowerCase(),mentioned=new Set(team.map((p,i)=>text.includes(first(p.name))?i:-1).filter(i=>i>=0));
const used=new Set(),map={};
const labels=[...new Set(r.turns.map(t=>String(t.speaker||'').trim()).filter(Boolean))],known=l=>team.findIndex(p=>first(p.name)===first(l)||p.name.toLowerCase()===l.toLowerCase());
for(const label of labels){const i=known(label);if(i>=0&&!used.has(i)){map[label]=i;used.add(i)}}
for(const label of labels){if(map[label]!==undefined)continue;
let i=team.findIndex((p,idx)=>!used.has(idx)&&!mentioned.has(idx));
if(i<0)i=team.findIndex((p,idx)=>!used.has(idx));
if(i<0)i=speakerIndex(label);
map[label]=i;used.add(i)}
for(const t of r.turns){const i=map[String(t.speaker||'').trim()];if(i!==undefined)t.speaker=people[i].name}
for(const t of r.tasks||[]){const label=String(t.owner||'').trim();if(!label)continue;
const i=map[label]??team.findIndex(p=>first(p.name)===first(label)||p.name.toLowerCase()===label.toLowerCase());
t.owner=i>=0?people[i].name:''}
r.speakerMap=map}
function speakerIndex(name){const key=String(name||'').trim().toLowerCase();
if(!key)return onboarding.person;
let i=people.findIndex(p=>p.name.toLowerCase()===key||p.name.toLowerCase().split(/\s+/)[0]===key.split(/\s+/)[0]);
if(i>=0)return i;
people.push({name:String(name).trim(),role:L('Meeting participant','Meeting-Teilnehmer/in'),initial:String(name).trim().split(/\s+/).slice(0,2).map(s=>s[0]).join('').toUpperCase(),color:'#e1eadd'});
return people.length-1}
function applyTaskUpdates(m,updates){let n=0;const today=new Date().toISOString().slice(0,10);m.updates=[];
for(const u of updates){const t=tasks.find(t=>t.id===u.taskId);if(!t)continue;
const noteDe=String(u.note_de||u.note_en||'').trim(),noteEn=String(u.note_en||u.note_de||'').trim();if(noteDe)translations[noteDe]=noteEn;
const before={status:t.status,progress:t.progress,due:t.due};
if(u.status&&u.status!=='unchanged'&&statusFromUpdate[u.status])t.status=statusFromUpdate[u.status];
if(Number.isInteger(u.progress)&&u.progress>=0)t.progress=Math.min(100,u.progress);
if(t.status==='Erledigt')t.progress=100;else if(t.progress===100)t.status='Erledigt';else if(t.progress>0&&t.status==='Offen')t.status='In Arbeit';
if(/^\d{4}-\d{2}-\d{2}$/.test(u.due||''))t.due=u.due;
const change=[before.status!==t.status?`${tr(before.status)} → ${tr(t.status)}`:'',before.progress!==t.progress?`${before.progress}% → ${t.progress}%`:'',before.due!==t.due?`${date(before.due)} → ${date(t.due)}`:''].filter(Boolean).join(' · ');
t.history.push({date:m.date||today,text:`${L('Update from meeting','Update aus Meeting')} „${tr(m.title)}“: ${noteDe}${change?' ('+change+')':''}`,meetingId:m.id});
t.lastMeetingUpdate=m.id;(m.relatedTaskIds??=[]).push(t.id);
m.updates.push({taskId:t.id,title:t.title,note_de:noteDe,note_en:noteEn,status:t.status,progress:t.progress,due:t.due});n++}
return n}
function attachRecording(m){const r=recordingState.result,f=$('#meeting-form'),p=recordingState.prefill;
if(!r||!m)return;
const same=(field,value)=>p&&f&&f.elements.namedItem(field).value.trim()===p[field].trim()&&value;
if(same('title',true)){m.title=r.title_de;translations[r.title_de]=r.title_en}
if(same('notes',true)){m.notes=[...r.minutes_de];r.minutes_de.forEach((de,i)=>translations[de]=r.minutes_en[i]||de);m.summary=r.summary_de;translations[r.summary_de]=r.summary_en}
if(same('decisions',true)){m.decisions=[...r.decisions_de];r.decisions_de.forEach((de,i)=>translations[de]=r.decisions_en[i]||de)}
m.turns=r.turns.map(t=>[t.time,speakerIndex(t.speaker),t.en,t.de,recordingKinds[t.kind]||'']);
m.people=[...new Set([...m.turns.map(t=>t[1]),onboarding.person])];
m.duration=Math.max(5,Math.ceil((()=>{const last=r.turns.at(-1)?.time||'0:00',[mm,ss]=last.split(':').map(Number);return (mm*60+(ss||0))/60})()));
m.recording=true;m.model=r.model;
const today=new Date().toISOString().slice(0,10),fallbackDue=(()=>{const d=new Date((m.date||today)+'T12:00:00Z');d.setUTCDate(d.getUTCDate()+7);return d.toISOString().slice(0,10)})();
let created=0;
(r.tasks||[]).forEach((t,i)=>{if(!recordingState.selected.has(i))return;
const titleDe=String(t.title_de||t.title_en).trim().slice(0,150),titleEn=String(t.title_en||t.title_de).trim().slice(0,150);
if(!titleDe)return;translations[titleDe]=titleEn;
const detailDe=String(t.detail_de||t.detail_en||'').trim(),detailEn=String(t.detail_en||t.detail_de||'').trim();if(detailDe)translations[detailDe]=detailEn;
const task={id:Math.max(0,...tasks.map(t=>t.id))+1,title:titleDe,owner:t.owner?(people.findIndex(p=>p.name===t.owner)>=0?people.findIndex(p=>p.name===t.owner):speakerIndex(t.owner)):onboarding.person,meeting:m.id,projectId:m.projectId||null,due:/^\d{4}-\d{2}-\d{2}$/.test(t.due||'')?t.due:fallbackDue,description:detailDe,progress:0,status:'Offen',source:'recording',kind:t.kind,ownerUnclear:!t.owner,createdBy:onboarding.person,history:[{date:today,text:L('Extracted from the meeting recording by Gemini and confirmed on save.','Von Gemini aus der Meeting-Aufnahme extrahiert und beim Speichern bestätigt.')}]};
tasks.push(task);created++});
const applied=applyTaskUpdates(m,(r.updates||[]).filter((u,i)=>recordingState.selectedUpdates.has(i)));
m.people=[...new Set([...m.people,...tasks.filter(t=>t.meeting===m.id).map(t=>t.owner)])];
if(applied)setTimeout(()=>toast(L(`${applied} existing task${applied===1?'':'s'} updated from this meeting`,`${applied} bestehende Aufgabe${applied===1?'':'n'} aus diesem Meeting aktualisiert`)),1600);
if(created)setTimeout(()=>toast(L(`Meeting saved · ${created} task${created===1?'':'s'} created from the recording`,`Meeting gespeichert · ${created} Aufgabe${created===1?'':'n'} aus der Aufnahme erstellt`)),50);
persistRecording(m,tasks.filter(t=>t.meeting===m.id));
recordingState.result=null;recordingState.file=null;recordingState.prefill=null;recordingState.selected=new Set()}
const loadedRecordings=new Set();
function persistRecording(m,list){const names=i=>people[i]?.name||'';
const payload={updates:m.updates||[],meeting:{...m,people:m.people.map(names),turns:(m.turns||[]).map(t=>({time:t[0],speaker:names(t[1]),en:t[2],de:t[3],kind:t[4]||''}))},tasks:list.map(t=>({...t,owner:names(t.owner)})),translations:Object.fromEntries([m.title,m.summary,...m.notes,...m.decisions,...list.flatMap(t=>[t.title,t.description])].filter(k=>k&&translations[k]).map(k=>[k,translations[k]])),people:people.slice(6).map(p=>p.name)};
fetch('/api/recordings',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)}).then(r=>r.json()).then(r=>{m.storage=r.storage;toast(r.storage==='firestore'?L('Saved to Firestore · visible to everyone who opens this demo','In Firestore gespeichert · für alle sichtbar, die diese Demo öffnen'):L('Saved on the server for this session','Auf dem Server für diese Sitzung gespeichert'))}).catch(()=>toast(L('Saved in this browser only · server not reachable','Nur in diesem Browser gespeichert · Server nicht erreichbar')))}
async function loadRecordings(){if(onboarding.template!=='hotel')return;
let data;try{data=await (await fetch('/api/recordings')).json()}catch{return}
let added=0;
for(const rec of data.recordings||[]){if(!rec?.id||loadedRecordings.has(rec.id)||!rec.meeting)continue;loadedRecordings.add(rec.id);
Object.assign(translations,rec.translations||{});
const id=Math.max(0,...meetings.map(m=>m.id))+1,m={...rec.meeting,id,storage:data.storage,people:(rec.meeting.people||[]).map(speakerIndex),turns:(rec.meeting.turns||[]).map(t=>Array.isArray(t)?[t[0],speakerIndex(t[1]),t[2],t[3],t[4]||'']:[t.time,speakerIndex(t.speaker),t.en,t.de,t.kind||''])};
meetings.push(m);
for(const t of rec.tasks||[]){tasks.push({...t,id:Math.max(0,...tasks.map(t=>t.id))+1,meeting:id,owner:speakerIndex(t.owner)})}
for(const u of rec.updates||[]){const t=tasks.find(t=>t.id===u.taskId&&t.title===u.title)||tasks.find(t=>t.title===u.title);if(!t)continue;
if(u.note_de)translations[u.note_de]=u.note_en||u.note_de;
const text=`${L('Update from meeting','Update aus Meeting')} „${tr(m.title)}“: ${u.note_de}`;
if(!t.history.some(h=>h.meetingId===id||h.text===text)){t.status=u.status||t.status;t.progress=Number.isInteger(u.progress)?u.progress:t.progress;if(u.due)t.due=u.due;t.history.push({date:m.date,text,meetingId:id});t.lastMeetingUpdate=id;(m.relatedTaskIds??=[]).push(t.id)}}
added++}
if(added){hotelData.meetings=JSON.parse(JSON.stringify(meetings));hotelData.tasks=JSON.parse(JSON.stringify(tasks));if(onboarding.ready)render()}}
const enterBeforeUpload=enterWorkspace;enterWorkspace=function(person){enterBeforeUpload(person);loadRecordings()};
let meetingsBeforeSubmit=0;
document.addEventListener('submit',e=>{if(e.target.id==='meeting-form')meetingsBeforeSubmit=meetings.length},true);
document.addEventListener('submit',e=>{if(e.target.id!=='meeting-form'||meetings.length<=meetingsBeforeSubmit)return;const m=meetings.at(-1),pid=e.target.elements.projectId?.value||'';if(pid&&activeProjectsForMeeting().some(p=>p.id===pid))m.projectId=pid;recordingState.projectId='';attachRecording(m)});
const renderBeforeUpload=render;render=function(){renderBeforeUpload();
if(onboarding.ready&&view==='add')mountRecordingPanel()};
const taskDetailBeforeUpload=taskDetail;taskDetail=function(id){taskDetailBeforeUpload(id);const t=tasks.find(t=>t.id===id);if(t?.ownerUnclear&&$('#detail').open)$('#detail .dialogbody').insertAdjacentHTML('afterbegin',`<span class="badge risk">${L('Owner unclear in the recording · assigned to you for review','Verantwortliche Person in der Aufnahme unklar · dir zur Prüfung zugewiesen')}</span>`)};
const meetingDetailBeforeUpload=meetingDetail;meetingDetail=function(id){meetingDetailBeforeUpload(id);
const m=meetings.find(m=>m.id===id);
if(m?.recording&&$('#detail').open){const label=$('#detail .transcript-label');
if(label)label.textContent=L('Transcribed from your uploaded recording by ','Aus deiner hochgeladenen Aufnahme transkribiert von ')+m.model+L('. Highlights were suggested by Gemini.','. Hervorhebungen wurden von Gemini vorgeschlagen.')}};
